export interface Project {
  name: string
  imageName: string
  tech: string
  description: string
  github: string
  live?: string
}

export const projects: Project[] = [
  {
    name: "Todo React",
    imageName: "todo-react.jpg",
    tech: "React",
    description:
      "I used React to create a task markup project that facilitates the organization and management of daily activities. This project demonstrates my ability to develop interactive and user-centric applications using modern technologies such as React.",
    github: "https://github.com/Arcilac/todo-react",
    live: "https://arcilac.github.io/todo-react/",
  },
  {
    name: "Exchange",
    imageName: "exchange.jpg",
    tech: "Redux",
    description:
      "I developed a currency converter project using Redux to exchange different currencies, such as converting dollars to euros. This project shows my proficiency in managing global state and complex data flows using Redux, ensuring a smooth and efficient user experience.",
    github: "https://github.com/Arcilac/redux-practice",
  },
  {
    name: "Time",
    imageName: "time.jpg",
    tech: "JavaScript",
    description:
      "I developed a small JavaScript library to calculate the hours worked. This library allows to calculate the time difference between two timestamps, which is useful for recording and calculating working hours. It uses native JavaScript functionality to calculate the difference in hours and minutes.",
    github: "https://github.com/Arcilac/time",
    live: "https://arcilac.github.io/time/",
  },
  {
    name: "Lazy-Load",
    imageName: "lazy-load.jpg",
    tech: "TypeScript",
    description:
      "I created a lazy-loading image component using TypeScript to improve website performance by loading images only when they are visible in the viewport. This project demonstrates my ability to use TypeScript to create efficient and scalable web applications that enhance the user experience, I also did the fizzbuzz exercise in TypeScript.",
    github: "https://github.com/Arcilac/tlazy-load-images",
    live: "https://arcilac.github.io/lazy-load-images/",
  },
]
