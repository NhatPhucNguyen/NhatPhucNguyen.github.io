import { useContext } from 'react';
import { PageContext } from "../../pages/context";
const NavLink = (props: { name: string }) => {
    //Getting context to check the name of current page
    const pageContext = useContext(PageContext);
    return (
        <li>
            <a
                className={
                    pageContext.page == props.name
                        ? "link show-background"
                        : "link"
                }
                onClick={() => pageContext.getPage(props.name)}
            >
                {props.name}
            </a>
        </li>
    );
};

export default NavLink;
