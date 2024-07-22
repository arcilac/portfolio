import React, { useEffect, useRef } from "react"
import * as d3 from "d3"
import "../assets/css/styles.css"

const Sunburst = ({ data }) => {
  const ref = useRef()

  useEffect(() => {
    const width = 932
    const radius = width / 6

    const partition = (data) => {
      const root = d3
        .hierarchy(data)
        .sum((d) => d.value)
        .sort((a, b) => b.value - a.value)
      return d3.partition().size([2 * Math.PI, root.height + 1])(root)
    }

    const root = partition(data)

    root.each((d) => (d.current = d))

    const svg = d3
      .select(ref.current)
      .style("width", "100%")
      .style("height", "auto")
      .attr("viewBox", [0, 0, width, width])
      .style("font", "10px sans-serif")

    const g = svg.append("g").attr("transform", `translate(${width / 2},${width / 2})`)

    const arc = d3
      .arc()
      .startAngle((d) => d.x0)
      .endAngle((d) => d.x1)
      .padAngle((d) => Math.min((d.x1 - d.x0) / 2, 0.005))
      .padRadius(radius * 1.5)
      .innerRadius((d) => d.y0 * radius)
      .outerRadius((d) => Math.max(d.y0 * radius, d.y1 * radius - 1))

    const path = g
      .append("g")
      .selectAll("path")
      .data(root.descendants().slice(1))
      .enter()
      .append("path")
      .attr("fill", (d) => {
        while (d.depth > 1) d = d.parent
        return d3.interpolateRainbow((d.x0 + d.x1) / 2 / Math.PI)
      })
      .attr("fill-opacity", (d) => (d.children ? 0.6 : 0.4))
      .attr("d", (d) => arc(d.current))

    const label = g
      .append("g")
      .attr("pointer-events", "none")
      .attr("text-anchor", "middle")
      .style("user-select", "none")
      .selectAll("text")
      .data(root.descendants().slice(1))
      .enter()
      .append("text")
      .attr("dy", "0.35em")
      .attr("fill-opacity", (d) => +labelVisible(d.current))
      .attr("transform", (d) => labelTransform(d.current))
      .text((d) => d.data.name)

    const parent = g
      .append("circle")
      .datum(root)
      .attr("r", radius)
      .attr("fill", "none")
      .attr("pointer-events", "all")
      .on("click", clicked)

    function clicked(event, p) {
      parent.datum(p.parent || root)

      root.each(
        (d) =>
          (d.target = {
            x0: Math.max(0, Math.min(1, (d.x0 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            x1: Math.max(0, Math.min(1, (d.x1 - p.x0) / (p.x1 - p.x0))) * 2 * Math.PI,
            y0: Math.max(0, d.y0 - p.depth),
            y1: Math.max(0, d.y1 - p.depth),
          })
      )

      const t = g.transition().duration(750)

      path
        .transition(t)
        .tween("data", (d) => {
          const i = d3.interpolate(d.current, d.target)
          return (t) => (d.current = i(t))
        })
        .filter(function (d) {
          return +this.getAttribute("fill-opacity") || arcVisible(d.target)
        })
        .attr("fill-opacity", (d) => (arcVisible(d.target) ? (d.children ? 0.6 : 0.4) : 0))
        .attrTween("d", (d) => () => arc(d.current))

      label
        .filter(function (d) {
          return +this.getAttribute("fill-opacity") || labelVisible(d.target)
        })
        .transition(t)
        .attr("fill-opacity", (d) => +labelVisible(d.target))
        .attrTween("transform", (d) => () => labelTransform(d.current))
    }

    function arcVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && d.x1 > d.x0
    }

    function labelVisible(d) {
      return d.y1 <= 3 && d.y0 >= 1 && d.x1 - d.x0 > 0.03
    }

    function labelTransform(d) {
      const x = (((d.x0 + d.x1) / 2) * 180) / Math.PI
      const y = ((d.y0 + d.y1) / 2) * radius
      return `rotate(${x - 90}) translate(${y},0) rotate(${x < 180 ? 0 : 180})`
    }
  }, [data])

  return <svg ref={ref}></svg>
}

export default Sunburst
