import { useState } from "react";
import ImageContainer from "./ImageContainer";
import ProjectItem from "./ProjectItem";
import { Project, projects } from "./projectsData";
import "./style.css";
const ProjectsContent = () => {
    const [projectData, setProjectData] = useState(projects);
    return (
        <div className="projects-container">
            <div className="project-select">
                <button
                    name="left"
                    className="arrow-left"
                    onClick={() => {
                        setProjectData((prev) => {
                            const data = [...prev];
                            data.unshift(data.pop() as Project);
                            return data;
                        });
                    }}
                >
                    <i className="fa-solid fa-angle-left fa-2xl"></i>
                </button>
                <ImageContainer projects={projectData}/>
                <button
                    name="right"
                    className="arrow-right"
                    onClick={() => {
                        setProjectData((prev) => {
                            const data = [...prev];
                            data.push(data.shift() as Project);
                            return data;
                        });
                    }}
                >
                    <i className="fa-solid fa-angle-right fa-2xl"></i>
                </button>
            </div>
            <a
                href={projectData[1].link}
                className="project-name highlight"
                target="_blank"
            >
                <h3>{projectData[1].name}</h3>
            </a>

            <div className="project-detail"></div>
            <ProjectItem project={projectData[1]} />
        </div>
    );
};

export default ProjectsContent;
