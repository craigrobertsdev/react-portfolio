const technologies = {
  javascript: {
    name: "JavaScript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  bulma: {
    name: "Bulma CSS",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bulma/bulma-plain.svg",
  },
  jquery: {
    name: "jQuery",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg",
  },
  typescript: {
    name: "TypeScript",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  csharp: {
    name: "C#",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",
  },
  html: {
    name: "HTML",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  css: {
    name: "CSS",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  react: {
    name: "React.js",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  node: {
    name: "Node.js",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  express: {
    name: "Express.js",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  },
  blazor: {
    name: "ASP.NET Blazor",
    imageUrl: "../assets/images/blazor.svg",
  },
  bootstrap: {
    name: "Bootstrap",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  },
  tailwind: {
    name: "Tailwind CSS",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg",
  },
  mysql: {
    name: "MySQL",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
  },
  mongodb: {
    name: "MongoDB",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  git: {
    name: "Git",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  jest: {
    name: "Jest",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
  },
  heroku: {
    name: "Heroku",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
  },
  sequelize: {
    name: "Sequelize",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sequelize/sequelize-original.svg",
  },
  handlebars: {
    name: "Handlebars",
    imageUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/handlebars/handlebars-original.svg",
  },
  webpack: {
    name: "webpack",
    imageUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg",
  },
};

export const languages = [
  technologies.javascript,
  technologies.typescript,
  technologies.csharp,
  technologies.html,
  technologies.css,
];

export const frameworks = [
  technologies.react,
  technologies.node,
  technologies.express,
  technologies.blazor,
  technologies.bootstrap,
  technologies.tailwind,
];

export const otherTech = [
  technologies.jquery,
  technologies.mysql,
  technologies.mongodb,
  technologies.git,
  technologies.jest,
  technologies.heroku,
];

export const projects = [
  {
    name: "Mechanomicon",
    alt: "Mechanomicon - manage your service bookings and vehicle logbooks in one place",
    description:
      "Mechanomicon is designed to enable car owners to book their vehicle in for service and repairs at a workshop, maintain a record of their service history and view invoices for each service. This app features dashboards for customers, mechanics and workshop managers alike with different views based on role. When a new mechanic is employed, an account is created by a manager, allowing them to be allocated services to do. Each user is able to track associated lists of services and invoices. This is a full-stack web application using both client and server-side technologies. Please note the deployed version of this application has been deactivated, but can be activated on request.",
    technologies: [
      technologies.javascript,
      technologies.tailwind,
      technologies.node,
      technologies.express,
      technologies.mysql,
      technologies.sequelize,
    ],
    github: "https://github.com/craigrobertsdev/Mechanomicon",
    deployed: null,
  },
  {
    name: "FlightDex",
    alt: "FlightDex - a domestic flight, accommodation and event search engine",
    description:
      "FlightDex is a domestic flight search engine. Users can enter their start locations, date of travel, whether it's a return or one way  and be presented with a list of flights to match. Once flights are selected, the user will be presented with the options to select accommodation for up to 4 passengers and events that will be on during their stay. This project was created using only front end technologies and uses fetch to get data from multiple third-party APIs.",
    technologies: [technologies.javascript, technologies.bulma, technologies.jquery],
    github: "https://github.com/craigrobertsdev/flightdex",
    deployed: "https://craigrobertsdev.github.io/flightdex/",
  },
  {
    name: "Tech Blog",
    alt: "A blog site for people to post their thoughts about all things tech",
    description:
      "This tech blog is designed for people who want to post their views on all things related to technology and for other users to leave reactions. Users can create an account and view a dashboard which stores a history of their posts, as well as view the home page of the site to see all comments that have been posted to the site. It is developed using Handlebars.js on the front end with a Node.js and MySQL backend.",
    technologies: [
      technologies.node,
      technologies.express,
      technologies.handlebars,
      technologies.mysql,
      technologies.sequelize,
      technologies.bootstrap,
    ],
    github: "https://github.com/craigrobertsdev/tech-blog",
    deployed: null,
  },
  {
    name: "Social Network API",
    alt: "An API for managing social networking",
    description:
      "This application is a backend API which any user interface could be connected with to create a social networking application. The application can be accessed using API testing tools like Postman or Insomnia and uses Express and MongoDB to efficiently run queries and store non-relational data. To manage database queries, the Mongoose Object Data Mapper (ODM) is used.",
    technologies: [technologies.node, technologies.express, technologies.mongodb],
    github: "https://github.com/craigrobertsdev/social-network-api",
    deployed: null,
  },
  {
    name: "Text Editor PWA",
    alt: "A progressive web application for storing code snippets",
    description:
      "A progressive web application (PWA) for storing code snippets for later use. It supports syntax highlighting for JavaScript code and automatically saved when focus is lost to the app. On visiting the page, all the code needed to run the application is downloaded to the browser and stored in the browser's database, called IndexedDB, for use at a later date. Once the application has downloaded, it is able to be used offline and will run at speeds that can otherwise only be achieved by natively installed applications. The application can also be downloaded to be accessed via a desktop icon.",
    technologies: [technologies.node, technologies.express, technologies.webpack],
    github: "https://github.com/craigrobertsdev/Text-Editor-PWA",
    deployed: null,
  },
  {
    name: "Employee Tracker",
    alt: "A tool for managing staff and roles within an organisation",
    description:
      "A command-line tool for manging staff, roles and departments within an organisation. The user can add new entities to each category and manage the relationship between them, creating a clear and easily queryable organisational structure. This app is made using the inquirer package for the commandline prompt and data is stored using a MySQL database.",
    technologies: [technologies.mysql, technologies.javascript, technologies.node],
    github: "https://github.com/craigrobertsdev/employee-tracker",
    deployed: null,
  },
];
