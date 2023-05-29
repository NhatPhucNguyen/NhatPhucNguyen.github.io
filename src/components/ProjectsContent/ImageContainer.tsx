import { ProjectNode } from "./projectsData";

const ImageContainer = ({ projectNode }: { projectNode: ProjectNode }) => {
    return (
        <div className="img-container">
            <img
                key={projectNode.prev.id}
                className="img-start"
                src={`/${projectNode.prev.img}`}
                alt=""
            />
            <img
                key={projectNode.current.id}
                className="img-mid"
                src={`/${projectNode.current.img}`}
                alt=""
            />
            <img
                key={projectNode.next.id}
                className="img-end"
                src={`/${projectNode.next.img}`}
                alt=""
            />
        </div>
    );
};

export default ImageContainer;
