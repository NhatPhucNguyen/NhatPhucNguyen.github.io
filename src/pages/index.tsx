import About from "./About";
import Home from "./Home";
import Projects from "./Projects";
import Contact from "./Contact";
import { useState } from "react";
import { PageContext } from "./context";

const App = () => {
    const [page, setPage] = useState("home");
    const getPage = (page: string) => {
        setPage(page);
    };
    const showPage = (page: string) => {
        if (page === "home") {
            return <Home />;
        }
        if (page === "about") {
            return <About />;
        }
        if (page === "projects") {
            return <Projects />;
        }
        if (page === "contact") {
            return <Contact />;
        }
        console.log(page);
    };
    return (
        <PageContext.Provider value={{ getPage: getPage, page: page }}>
            {showPage(page)}
        </PageContext.Provider>
    );
};

export default App;
