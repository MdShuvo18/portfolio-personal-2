
import ProjectCard from '../ProjectCard/ProjectCard';
import '../ProjectCard/project.css'
const Team = () => {
    const projectData = [
        {
            title: 'Carrer Canvas (MERN)',
            imageSrc: '/career-canvas365.netlify.app_.png',
            technologies: ['React JS', 'Tailwind CSS','Tanstack Query', 'MongoDB', 'Express JS'],
            liveLink: 'https://career-canvas365.netlify.app/',
            clientLink: 'https://github.com/RakibHassanSoft/career-canvas-client/tree/shuvo01',
            
        },
        {
            title: 'Health Care (Landing Page)',
            imageSrc: '/healthcare-landingpage-one.vercel.app_(iPhone 14 Pro Max).png',
            technologies: ['React JS', 'Tailwind CSS'],
            liveLink: 'https://healthcare-landingpage-one.vercel.app/',
            clientLink: 'https://github.com/MdShuvo18/healthcare-landingpage',
            
        },
        
    ];
    return (
        <div className="bg-[#0d0d0d]  lg:px-40 pb-10">
             <h1 className="text-white text-center font-bold text-5xl pt-10">My Team Projects</h1>
             <hr className="border border-red-600 mt-3 lg:mx-72" />
        <div className="pt-16 flex flex-col lg:flex-row gap-4">
            {projectData.map((project, index) => (
                <ProjectCard key={index} {...project} />
            ))}
        </div>
    </div>
    );
};

export default Team;