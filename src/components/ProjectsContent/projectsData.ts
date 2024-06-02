export type Project = {
    id: string;
    name: string;
    overview: string;
    purposes: string[];
    technologies: string[];
    img: string;
    link: string;
    github: string;
};

export type ProjectNode = {
    prev: Project;
    current: Project;
    next: Project;
};
export const projects: Project[] = [
    {
        id: "1",
        name: "Weather Forecast",
        overview: `The Weather Forecast is a web application to predict the
        conditions of the atmosphere for a given city or user's current
        location, using the Weather API - OpenWeatherMap. The
        application was implemented by ReactJs framework with Typescript`,
        purposes: [
            `User can check the current condition of weather by giving
        the city name or current location`,
            `Show the prediction of weather's condition in next 5 days so
        that user can prepare their plan wisely`,
        ],
        technologies: ["HTML", "CSS", "TS", "React", "Fetching API"],
        img: "weather-forecast.png",
        link: "https://the-weather-forecast.vercel.app/",
        github: "https://github.com/NhatPhucNguyen/the-weather-forecast",
    },
    {
        id: "2",
        name: "QQuizzes",
        overview:
            "QQuizzes is web application that allows users to create and share their own quizzes with others. The application includes a variety of functionalities such as user authentication, quiz creation, quiz categories, quiz taking, quiz history, leaderboard, timer, mobile responsiveness, security, and analytics.",
        purposes: [
            "Users can register and login to the application to create new quizzes by providing questions and answers.",
            "Quizzes are organized into different categories to make it easier for users to find the quizzes they are interested in",
            "Users can take the quizzes, view the questions and answers, and submit their answers. They can also see the correct answers and their score after the quiz is completed",
            "A leaderboard is provided to show the top performers on the quizzes. There is a timer for the quizzes, so the user can track the time left to complete the quiz.",
        ],
        technologies: [
            "HTML",
            "CSS",
            "TS",
            "React",
            "NodeJs",
            "ExpressJs",
            "MongoDb",
        ],
        img: "quiz.png",
        link: "https://q-quizzes-frontend-react.vercel.app/",
        github: "https://github.com/NhatPhucNguyen/QQuizzes_Frontend_React",
    },
    {
        id: "3",
        name: "BookFinder",
        overview:
            "Welcome to BookFinder, an online bookstore web application designed to provide a seamless and intuitive book shopping experience. Built with modern technologies like Next.js, React, and TypeScript, BookFinder offers a robust and scalable solution for book lovers and readers of all kinds.",
        purposes: [
            "BookFinder's main features include a comprehensive book listing page, detailed book information pages, and a best sellers section, all designed to help users discover and explore books with ease. Users can search for books by ISBN, view detailed information about each book, and see the best-selling books at a glance.",
            "The application also includes an admin control panel for managing books, allowing for the addition and management of books in the store.",
        ],
        technologies: [
            "HTML",
            "CSS",
            "Typescript",
            "React",
            "Next.js",
            "Tailwind CSS",
            "PostgreSQL",
            "Prisma",
            "Stripe",
            "Vitest",
            "Playwright",
        ],
        img: "text-logo-trans.png",
        link: "https://bookstore-lyart-omega.vercel.app/",
        github: "https://github.com/NhatPhucNguyen/bookstore-nextjs-app",
    },
    // {
    //     id: "4",
    //     name: "Grocery",
    //     description: "Checking price",
    //     technologies: ["HTML", "CSS", "TS", "React"],
    //     img: "grocery.png",
    //     link: "",
    //     github: "",
    // },
    // {
    //     id: "5",
    //     name: "Soccer",
    //     description: "Live score Checking",
    //     technologies: ["HTML", "CSS", "TS", "React"],
    //     img: "football.png",
    //     link: "",
    //     github: "",
    // },
];

const linkedList: ProjectNode[] = [];

for (let index = 0; index < projects.length; index++) {
    let newLink: ProjectNode;
    if (index === 0) {
        newLink = {
            prev: projects[projects.length - 1],
            current: projects[index],
            next: projects[index + 1],
        };
    } else {
        newLink = {
            prev: projects[index - 1],
            current: projects[index],
            next: projects[index + 1],
        };
    }
    if (index === projects.length - 1) {
        newLink = {
            prev: projects[index - 1],
            current: projects[index],
            next: projects[0],
        };
    }
    linkedList.push(newLink);
}
export const projectsData = linkedList;
