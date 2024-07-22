import React, { useEffect, useRef } from "react"
import * as d3 from "d3"

const RadarChart = ({ data }) => {
  const ref = useRef()

  useEffect(() => {
    const width = 600
    const height = 600
    const margin = { top: 50, right: 50, bottom: 50, left: 50 }
    const levels = 3
    const maxValue = 10

    const radius = Math.min(width / 2, height / 2)

    const angleSlice = (Math.PI * 2) / data.length

    const radarLine = d3
      .lineRadial()
      .radius((d) => radius * (d.value / maxValue))
      .angle((d, i) => i * angleSlice)

    const svg = d3
      .select(ref.current)
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
      .append("g")
      .attr("transform", `translate(${width / 2 + margin.left},${height / 2 + margin.top})`)

    const axisGrid = svg.append("g").attr("class", "axisWrapper")

    axisGrid
      .selectAll(".levels")
      .data(d3.range(1, levels + 1).reverse())
      .enter()
      .append("circle")
      .attr("class", "gridCircle")
      .attr("r", (d) => (radius / levels) * d)
      .style("fill", "#CDCDCD")
      .style("stroke", "#CDCDCD")
      .style("fill-opacity", 0.1)

    axisGrid
      .selectAll(".axisLabel")
      .data(d3.range(1, levels + 1).reverse())
      .enter()
      .append("text")
      .attr("class", "axisLabel")
      .attr("x", 4)
      .attr("y", (d) => (-d * radius) / levels)
      .attr("dy", "0.4em")
      .style("font-size", "10px")
      .attr("fill", "#737373")
      .text((d) => (maxValue * d) / levels)

    const axis = axisGrid.selectAll(".axis").data(data).enter().append("g").attr("class", "axis")

    axis
      .append("line")
      .attr("x1", 0)
      .attr("y1", 0)
      .attr("x2", (d, i) => radius * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y2", (d, i) => radius * Math.sin(angleSlice * i - Math.PI / 2))
      .attr("class", "line")
      .style("stroke", "white")
      .style("stroke-width", "2px")

    axis
      .append("text")
      .attr("class", "legend")
      .attr("text-anchor", "middle")
      .attr("dy", "0.35em")
      .attr("x", (d, i) => (radius + 10) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("y", (d, i) => (radius + 10) * Math.sin(angleSlice * i - Math.PI / 2))
      .text((d) => d.skill)
      .call(wrap, 60)

    svg
      .append("path")
      .datum(data)
      .attr("class", "radarArea")
      .attr("d", radarLine)
      .style("fill", "#00A0B0")
      .style("fill-opacity", 0.7)

    svg
      .append("path")
      .datum(data)
      .attr("class", "radarStroke")
      .attr("d", radarLine)
      .style("stroke-width", "2px")
      .style("stroke", "#00A0B0")
      .style("fill", "none")

    svg
      .selectAll(".radarCircle")
      .data(data)
      .enter()
      .append("circle")
      .attr("class", "radarCircle")
      .attr("r", 4)
      .attr("cx", (d, i) => radius * (d.value / maxValue) * Math.cos(angleSlice * i - Math.PI / 2))
      .attr("cy", (d, i) => radius * (d.value / maxValue) * Math.sin(angleSlice * i - Math.PI / 2))
      .style("fill", "#00A0B0")
      .style("fill-opacity", 0.8)

    function wrap(text, width) {
      text.each(function () {
        const text = d3.select(this)
        const words = text.text().split(/\s+/).reverse()
        let word
        let line = []
        let lineNumber = 0 // Change from const to let
        const lineHeight = 1.1
        const y = text.attr("y")
        const x = text.attr("x")
        const dy = parseFloat(text.attr("dy"))
        let tspan = text.text(null).append("tspan").attr("x", x).attr("y", y).attr("dy", `${dy}em`)

        while ((word = words.pop())) {
          line.push(word)
          tspan.text(line.join(" "))
          if (tspan.node().getComputedTextLength() > width) {
            line.pop()
            tspan.text(line.join(" "))
            line = [word]
            tspan = text
              .append("tspan")
              .attr("x", x)
              .attr("y", y)
              .attr("dy", `${++lineNumber * lineHeight + dy}em`)
              .text(word)
          }
        }
      })
    }
  }, [data])

  return <svg ref={ref}></svg>
}

export default RadarChart
