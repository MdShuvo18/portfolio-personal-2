import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";
import { motion } from "framer-motion";
import ProjectCard from "./sharedComponent/ProjectCard";

const AllProjects = () => {
    const projects = [
        {
            title: "LearnBridge #1",
            description:
                "Welcome to LearnBridge, your ultimate platform for comprehensive learning and development. Here anyone can become a teacher by applying for a request and waiting for admin approval. Users can also act as students to buy and purchase courses through the payment system.",
            techStack: "JavaScript || React || Tailwind || Node.js || Mongodb",
            liveLink: "https://learnbridge-11de6.web.app/",
            detailsLink: "/learnbridge",
            repoLink: "https://github.com/MdShuvo18/LearnBridge",
            imageUrl: "https://i.ibb.co/684FQtK/icon-learn-bridge.png",
        },
        {
            title: "PulsePost #2",
            description:
                "PulsePost is a blog-based website for discovering insightful and engaging content across various topics. Users can write, update, and delete their blogs. Blog owners can monitor and manage their content.",
            techStack: "JavaScript || React || Tailwind || Node.js || Mongodb",
            liveLink: "https://pulsepost-e00be.web.app/",
            detailsLink: "/pulsepost",
            repoLink: "https://github.com/MdShuvo18/PulsePost",
            imageUrl: "https://i.ibb.co/XJ769Wc/stamped-preview-w7.png",
        },
        {
            title: "ArtyPot #3",
            description:
                "ArtyPot is your go-to destination for ceramics and pottery. Whether you're a seasoned artisan or a beginner, ArtyPot provides everything you need to unleash creativity and elevate your craft.",
            techStack: "JavaScript || React || Tailwind || Node.js || Mongodb",
            liveLink: "https://art-and-craft-store-c1aff.web.app/",
            detailsLink: "/artypot",
            repoLink: "https://github.com/MdShuvo18/ArtyPot",
            imageUrl: "https://i.ibb.co/pvkYNr0/images-1.png",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-10"
        >
            <Navbar />
            <div className="">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <Footer />
        </motion.div>
    );
};

export default AllProjects;
