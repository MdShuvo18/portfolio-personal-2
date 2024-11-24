import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const ProjectCard = ({ title, description, techStack, liveLink, detailsLink, repoLink, imageUrl }) => {
    return (
        <motion.div
            className="hero bg-black min-h-screen"
            initial={{ opacity: 0, scale: 0.8, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <motion.img
                    src={imageUrl}
                    alt={title}
                    className="max-w-sm rounded-lg shadow-2xl"
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                />
                <div className="text-white space-y-6">
                    <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-fuchsia-500">
                        {title}
                    </h1>
                    <p className="py-6 text-lg">{description}</p>
                    <p className="text-cyan-600 font-semibold">{techStack}</p>
                    <div className="flex items-center justify-around">
                        {/* Live Link */}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={liveLink}
                            className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block animate-pulse"
                        >
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">Live</span>
                        </a>

                        {/* Details Link */}
                        <Link
                            to={detailsLink}
                            className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block"
                        >
                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                            <span className="relative group-hover:text-white">View details...</span>
                        </Link>

                        {/* Repository Link */}
                        <a
                            target="_blank"
                            rel="noopener noreferrer"
                            href={repoLink}
                            className="ml-8 w-10 h-10"
                        >
                            <img src="/github-icon-2.svg" alt="GitHub" />
                        </a>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ProjectCard;
