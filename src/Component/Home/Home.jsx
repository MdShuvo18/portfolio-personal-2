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
            {/* Animated Navbar */}
            <div className="animate__animated animate__fadeInDown animate__delay-1s">
                <Navbar />
            </div>
            
            {/* Animated Banner */}
            <div className="animate__animated animate__zoomIn animate__delay-2s">
                <Banner />
            </div>
            
            {/* Animated Sections */}
            <div id="skill" className="animate__animated animate__fadeInLeft animate__delay-3s">
                <Experience />
            </div>
            
            <div id="project" className="animate__animated animate__fadeInRight animate__delay-4s">
                <Projects />
            </div>
            
            <div className="animate__animated animate__slideInUp animate__delay-5s">
                <Education />
            </div>
            
            <div id="contact" className="animate__animated animate__fadeIn animate__delay-6s">
                <Contact />
            </div>
            
            {/* Animated Footer */}
            <div className="animate__animated animate__fadeInUp animate__delay-7s">
                <Footer />
            </div>
        </div>
    );
};

export default Home;
