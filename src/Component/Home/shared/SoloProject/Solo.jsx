import ProjectCard from "../../shared/ProjectCard/ProjectCard";
import "../ProjectCard/project.css";

const Solo = () => {
    const projectData = [
        {
            title: "Learn Bridge",
            imageSrc: "/learnbridge-11de6.web.app_.png",
            technologies: ["React JS", "Tailwind CSS", "JWT Token", "Tanstack Query", "MongoDB", "Express JS"],
            liveLink: "https://learnbridge-11de6.web.app/",
            clientLink: "https://github.com/MdShuvo18/LearnBridge",
            serverLink: "https://github.com/MdShuvo18/LearnBridge-server",
        },
        {
            title: "Pulse Post",
            imageSrc: "/pulsepost-e00be.web.app_.png",
            technologies: ["React JS", "Tailwind CSS", "Daisy UI", "Tanstack Query", "MongoDB", "Express JS"],
            liveLink: "https://pulsepost-e00be.web.app/",
            clientLink: "https://github.com/MdShuvo18/PulsePost",
            serverLink: "https://github.com/MdShuvo18/PulsePost-server",
        },
        {
            title: "Art & Craft",
            imageSrc: "/art-and-craft-store-c1aff.web.app_.png",
            technologies: ["React JS", "Tailwind CSS", "Daisy UI", "Tanstack Query", "MongoDB", "Express JS"],
            liveLink: "https://art-and-craft-store-c1aff.web.app/",
            clientLink: "https://github.com/MdShuvo18/ArtyPot",
            serverLink: "https://github.com/MdShuvo18/ArtyPot-server",
        },
        {
            title: "e-Ticketing",
            imageSrc: "/mdshuvo18.github.io_e-bus-ticketing_.png",
            technologies: ["HTML5", "JavaScript", "Tailwind CSS"],
            liveLink: "https://mdshuvo18.github.io/e-bus-ticketing/",
            clientLink: "https://github.com/MdShuvo18/e-bus-ticketing",
        },
        {
            title: "Travel Hut",
            imageSrc: "/mdshuvo18.github.io_Travel-Hut_(iPhone 14 Pro Max).png",
            technologies: ["HTML", "CSS"],
            liveLink: "https://mdshuvo18.github.io/Travel-Hut/",
            clientLink: "https://github.com/MdShuvo18/Travel-Hut",
        },
        {
            title: "CRUD with REDUX",
            imageSrc: "/crud-with-redux-toolkit-omega.vercel.app_(iPhone 14 Pro Max).png",
            technologies: ["React", "Redux", "Redux-TOOLKIT"],
            liveLink: "https://crud-with-redux-toolkit-omega.vercel.app/",
            clientLink: "https://github.com/MdShuvo18/CRUD-With-Redux-Toolkit",
        },
    ];

    return (
        <div className="bg-[#0d0d0d] pt-10 lg:px-40 pb-10">
            <h1 className="text-white text-center font-bold text-5xl pt-10">My Recent Projects</h1>
            <hr className="border border-red-600 mt-3 lg:mx-72" />
            <div className="pt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectData.map((project, index) => (
                    <div
                        key={index}
                        className="bg-gray-800 rounded-lg shadow-lg overflow-hidden flex flex-col items-center p-4 w-full h-full transition-transform hover:scale-105"
                    >
                        <ProjectCard {...project} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Solo;
