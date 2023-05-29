import Button from "./Button";
import { PageContext } from "../../pages/context";
import { useContext } from "react";

const Intro = () => {
    const pageContext = useContext(PageContext);
    return (
        <div className="intro-container">
            <section className="intro-desc">
                <h1 className="title">
                    Hello, My name is{" "}
                    <span className="highlight">Nhat Nguyen</span>
                </h1>
                <p>
                    I am a <span className="highlight">web developer</span>{" "}
                    based in Toronto, Canada with passion in crafting solid and
                    scalable products with great user experiences...
                    <a
                        className="highlight"
                        onClick={() => {
                            pageContext.getPage("about");
                        }}
                    >
                        more about me
                    </a>
                </p>
                <div className="btn-container">
                    <Button name="projects" />
                    <Button name="contact" />
                </div>
            </section>
        </div>
    );
};

export default Intro;
