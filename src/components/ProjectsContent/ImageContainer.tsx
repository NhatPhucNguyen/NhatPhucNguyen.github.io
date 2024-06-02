import { Project } from "./projectsData";

const ImageContainer = ({ projects }: { projects: Project[] }) => {
    return (
        <div className="img-container">
            <img
                key={projects[0].id}
                className="img-start"
                src={`/${projects[0].img}`}
                alt=""
            />
            <img
                key={projects[1].id}
                className="img-mid"
                src={`/${projects[1].img}`}
                alt=""
                onClick={() => {
                    window.open(projects[1].link, "_blank");
                }}
            />
            <img
                key={projects[2].id}
                className="img-end"
                src={`/${projects[2].img}`}
                alt=""
            />
        </div>
    );
};

export default ImageContainer;
