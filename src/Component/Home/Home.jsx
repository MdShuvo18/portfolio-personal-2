import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";


const Home = () => {
    return (
        <div className="space-y-12">
            <Navbar></Navbar>
            <Banner></Banner>
            <Experience></Experience>
            <Projects></Projects>
            <Education></Education>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;