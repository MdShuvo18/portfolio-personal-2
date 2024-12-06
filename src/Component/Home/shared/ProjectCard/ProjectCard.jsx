/* eslint-disable react/prop-types */


const ProjectCard = ({ title, imageSrc, technologies, liveLink, clientLink, serverLink }) => {
    return (
        <div className="card bg-base-300 mx-auto shadow-xl">
            <div className="img-container">
                <img src={imageSrc} alt={`${title} screenshot`} />
            </div>
            <div className="card-body">
                <h2 className="card-title text-3xl font-bold">{title}</h2>
                <hr className="mb-2 border-1 border-black" />
                <div className="text-sm flex justify-center flex-wrap gap-2 text-slate-300">
                    {technologies.map((tech, index) => (
                        <span key={index} className="border px-2 rounded-full text-gray-800 border-slate-600">
                            {tech}
                        </span>
                    ))}
                </div>
                <hr className="mt-2 border-1 border-black" />
                <div className="mt-3 flex flex-wrap gap-2">
                    {liveLink && (
                        <a
                            className="bg-black border px-2 py-2 rounded-2xl text-gray-100"
                            href={liveLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            LIVE VIEW
                        </a>
                    )}
                    {clientLink && (
                        <a
                            className="bg-black border px-2 py-2 rounded-2xl text-gray-100"
                            href={clientLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            CLIENT SIDE
                        </a>
                    )}
                    {serverLink && (
                        <a
                            className="bg-black border px-2 py-2 rounded-2xl text-gray-100"
                            href={serverLink}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            SERVER SIDE
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
