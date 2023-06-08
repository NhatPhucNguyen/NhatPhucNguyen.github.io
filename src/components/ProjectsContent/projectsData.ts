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
        github: "",
    },
    {
        id: "2",
        name: "Quiz Tools",
        overview: "Doing Quiz",
        purposes: [],
        technologies: ["HTML", "CSS", "TS", "React"],
        img: "quiz.png",
        link: "",
        github: "",
    },
    {
        id: "3",
        name: "Investment",
        overview: "Doing Stocks",
        purposes: [],
        technologies: ["HTML", "CSS", "TS", "React"],
        img: "investment.png",
        link: "",
        github: "",
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

let linkedList: ProjectNode[] = [];

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
