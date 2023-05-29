import NavLinks from "./NavLinks";

const Nav = () => {
    return (
        <div>
            <nav className="navbar-container">
                <div className="start">
                    <span className="logo-text">Nhat/ Web Developer</span>
                </div>
                <div className="end">
                    <NavLinks />
                </div>
            </nav>
        </div>
    );
};

export default Nav;
