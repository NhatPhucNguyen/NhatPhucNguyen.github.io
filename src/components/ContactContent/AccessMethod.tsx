import Icon from "./Icon";

const AccessMethod = () => {
    return (
        <div className="access-container">
            <h1>Let's create something together</h1>
            <div className="mail-box">
                <span>
                    Mail me at:{" "}
                    <a href="mailto:phucnhat2111@gmail.com">
                        phucnhat2111@gmail.com
                    </a>
                </span>
            </div>
            <h2>Or access me through:</h2>
            <div className="icon-container">
                <Icon link="https://twitter.com/phucnhat2111"><i className="fa-brands fa-twitter fa-2xl"></i></Icon>
                <Icon link="https://www.facebook.com/yeucamhang"><i className="fa-brands fa-facebook fa-2xl"></i></Icon>
                <Icon link="https://www.linkedin.com/in/yeucamhang/"><i className="fa-brands fa-linkedin fa-2xl"></i></Icon>
                <Icon link="https://github.com/NhatPhucNguyen"><i className="fa-brands fa-github fa-2xl"></i></Icon>
            </div>
        </div>
    );
};

export default AccessMethod;
