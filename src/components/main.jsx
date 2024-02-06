import Nav from "./Nav";
import Hero from "./Hero";
import Project from "./Project";
import Footer from "./Footer";
import Contact from "./Contact";

const main = ()=> {
    return (
        <div className= "bg-blue-600">
            <Nav/>
            <Hero/>
            <Project/>
            <Contact/>
            <Footer/>
        </div>
    )
};

export default main;