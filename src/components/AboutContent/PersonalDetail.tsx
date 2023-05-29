import { useContext } from "react";
import { PageContext } from "../../pages/context";

const PersonalDetail = () => {
    const pageContext = useContext(PageContext);
    return (
        <div className="pd-container">
            <section className="description">
                <h2 className="highlight">About me</h2>
                <p>
                    My full name is Nhat Phuc Nguyen and I am a Vietnamese. I'm
                    currently living in Toronto, Canada and studying Software
                    Engineering Technology at Centennial College
                </p>
                <p>
                    I have been interested in programming after I graduated from
                    high school. Honestly, I choose to be programmer because I
                    once saw a video on youtube discussing about the development
                    of IT industry in the future. So, I just chose a random
                    programming language(C#) to find out the passion in coding.
                    Because I love problem-solving activities, I quickly fall in
                    love with programming, then keep improving my skills through
                    the internet.
                </p>
                <p>
                    After a while, I decided to join Centennial College to
                    improve my programming skills properly. And in the period of
                    studying at the school, I have been attracted by web
                    development courses. Therefore, I spent my most of time on
                    enhancing web-related skills such as HTML,CSS,JS,...
                    Besides, I also looked up some frameworks like Django,
                    NodeJs, ExpressJs, React,...
                </p>
                <p>
                    I think my strength is that I can adapt to new things very
                    quickly. Learning a new programming language or technology
                    is not a problem for me. Contrariwise, I feel extremely
                    excited to acquire a new knowledge and can take whole day
                    to read related documents and practice it.
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
