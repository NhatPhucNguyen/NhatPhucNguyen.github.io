import NavLink from "./NavLink";

const NavLinks = () => {
            
    return (
        <ul className="nav-links">
            <NavLink name="home"/>
            <NavLink name="about"/>
            <NavLink name="projects"/>
            <NavLink name="contact"/>
        </ul>
    );
};

export default NavLinks;
