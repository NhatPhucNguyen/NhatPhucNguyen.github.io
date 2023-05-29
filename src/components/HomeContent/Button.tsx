import { useContext } from "react";
import { PageContext } from "../../pages/context";

const Button = (props: { name: string }) => {
    const pageContext = useContext(PageContext);
    return (
        <button
            className={`btn ${props.name}`}
            id={props.name}
            onClick={() => {
                pageContext.getPage(props.name);
            }}
        >
            {props.name}
        </button>
    );
};

export default Button;
