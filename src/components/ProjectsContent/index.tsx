import ImageContainer from "./ImageContainer";
import "./style.css";
import { projectsData } from "./projectsData";
import { MouseEvent, useState } from "react";
const ProjectsContent = () => {
    const [ProjectNode, setProject] = useState(projectsData[0]);
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        let currentIndex = projectsData.indexOf(ProjectNode);
        if (e.currentTarget.name == "right") {
            if (currentIndex < projectsData.length - 1) {
                setProject(projectsData[currentIndex + 1]);
            } else {
                setProject(projectsData[0]);
            }
        }
        if (e.currentTarget.name == "left") {
            if (currentIndex > 0) {
                setProject(projectsData[currentIndex - 1]);
            } else {
                setProject(projectsData[projectsData.length - 1]);
            }
        }
    };
    return (
        <div className="projects-container">
            <div className="project-select">
                <button
                    name="left"
                    className="arrow-left"
                    onClick={handleClick}
                >
                    <i className="fa-solid fa-angle-left fa-2xl"></i>
                </button>
                <ImageContainer projectNode={ProjectNode} />
                <button
                    name="right"
                    className="arrow-right"
                    onClick={handleClick}
                >
                    <i className="fa-solid fa-angle-right fa-2xl"></i>
                </button>
            </div>
            <h3 className="project-name highlight">{ProjectNode.current.name}</h3>
            <div className="project-detail">
            </div>
            <div>
                <h2>This project is still in progress.</h2>
            </div>
        </div>
    );
};

export default ProjectsContent;
