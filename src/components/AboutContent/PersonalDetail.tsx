import { useContext } from "react";
import { PageContext } from "../../pages/context";

const PersonalDetail = () => {
    const pageContext = useContext(PageContext);
    return (
        <div className="pd-container">
            <section className="description">
                <h2 className="highlight">About me</h2>
                <p>
                    I am a web developer based in Toronto, Canada with a passion
                    for creating beautiful and functional websites. I have
                    experience in both front-end and back-end development, and I
                    am always eager to learn new technologies and programming
                    languages.
                </p>
                <p>
                    My skills include: HTML/CSS, JavaScript, Typescript, C#,
                    React, Next.js, Tailwind CSS, Bootstrap, NodeJS, ExpressJS, PostgreSQL, MongoDb, Git, and more.
                </p>
                <p>
                    I am a creative problem solver who enjoys working
                    collaboratively with others to achieve a common goal. I am
                    also a quick learner and am always looking for ways to
                    improve my skills and knowledge. If you are interested in
                    working together, please don't hesitate to contact me!
                </p>
                <button
                    className="btn btn-contact"
                    onClick={() => {
                        pageContext.getPage("contact");
                    }}
                >
                    Contact me
                </button>
            </section>
        </div>
    );
};

export default PersonalDetail;
