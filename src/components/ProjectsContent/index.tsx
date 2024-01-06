import ImageContainer from "./ImageContainer";
import "./style.css";
import { projectsData } from "./projectsData";
import { MouseEvent, useState } from "react";
import ProjectItem from "./ProjectItem";
const ProjectsContent = () => {
    const [projectNode, setProject] = useState(projectsData[0]);
    const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
        const currentIndex = projectsData.indexOf(projectNode);
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
                <ImageContainer projectNode={projectNode} />
                <button
                    name="right"
                    className="arrow-right"
                    onClick={handleClick}
                >
                    <i className="fa-solid fa-angle-right fa-2xl"></i>
                </button>
            </div>
            <a href={projectNode.current.link} className="project-name highlight" target="_blank">
                <h3 >
                    {projectNode.current.name}
                </h3>
            </a>

            <div className="project-detail"></div>
            <ProjectItem project={projectNode.current} />
        </div>
    );
};

export default ProjectsContent;
