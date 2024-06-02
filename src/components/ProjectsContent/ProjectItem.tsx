import { Fragment } from "react";
import { Project } from "./projectsData";

const ProjectItem = ({ project }: { project: Project }) => {
    return (
        <Fragment key={project.id}>
            {project.purposes.length < 1 ? (
                <h2>Project is still in process</h2>
            ) : (
                <section className="project-item">
                    <h3>Project Overview:</h3>
                    <p>{project.overview}</p>
                    <h3>Main Features:</h3>
                    <ul>
                        {project.purposes.map((purpose) => {
                            return <li>{purpose}</li>;
                        })}
                    </ul>
                    <h3>Technologies were used:</h3>
                    <div className="technologies-list">
                        {project.technologies.map((tech) => {
                            return <span>{tech}</span>;
                        })}
                    </div>

                    <a
                        target="_blank"
                        href={project.github}
                        className="highlight"
                    >
                        See my code here !
                    </a>
                </section>
            )}
        </Fragment>
    );
};

export default ProjectItem;
