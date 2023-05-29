export type Project = {
    id: string;
    name: string;
    description: string;
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
        description: "Predicting Weather",
        technologies: ["HTML", "CSS", "TS", "React"],
        img: "weather-forecast.png",
        link: "",
        github: "",
    },
    {
        id: "2",
        name: "Quiz Tools",
        description: "Doing Quiz",
        technologies: ["HTML", "CSS", "TS", "React"],
        img: "quiz.png",
        link: "",
        github: "",
    },
    {
        id: "3",
        name: "Investment",
        description: "Doing Stocks",
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
