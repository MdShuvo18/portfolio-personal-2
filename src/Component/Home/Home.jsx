import { useState, useEffect } from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";



const Home = () => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false); // Simulate loading time
        }, 2000); // Set the loading time here (2 seconds)

        return () => clearTimeout(timer); // Cleanup timeout
    }, []);

    if (isLoading) {
        return (
            <div className="flex items-center justify-center h-screen bg-black">
                {/* Loading Spinner */}
                <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-white"></div>
            </div>
        );
    }

    return (
        <div className="space-y-12 bg-black">
            <Navbar />
            <Banner />
            <div id="skill">
                <Experience />
            </div>
            <div id="project">
                <Projects />
            </div>
            <Education />
            <div id="contact">
                <Contact />
            </div>
            <Footer />

        </div>
    );
};

export default Home;
