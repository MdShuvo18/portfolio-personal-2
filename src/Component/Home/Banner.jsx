import { Typewriter } from "react-simple-typewriter";


const Banner = () => {
    return (
        <div className="grid grid-cols-1 justify-items-center text-center space-y-10">
            <img className="w-64 h-56 rounded-full" src="/shuvo.jpeg" alt="" />


            <h1 className="text-3xl font-extrabold text-white">I am   <span style={{
                backgroundImage: 'linear-gradient(90deg, #FF8660 0%, #9A33FF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                fontWeight: 'bold',
            }}>
                {/* Style will be inherited from the parent element */}
                <Typewriter
                    words={['Kamruzzaman Shuvo']}
                    loop={0 | false}
                    cursor
                    cursorStyle='_'
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}

                />
            </span> <br /> A Passionate Web Developer from Bangladesh</h1>


            <p className="text-[#C5C5C5] font-light text-lg"> I am a skilled web developer specializing in front-end development with a passion for creating dynamic, responsive web applications. Proficient in <span className="text-2xl font-bold">HTML</span>, <span className="text-2xl font-bold">CSS</span>, <span className="text-2xl font-bold">JavaScript</span>, and modern frameworks like <span className="text-2xl font-bold">Tailwind</span> and <span className="text-2xl font-bold">React</span>, I build intuitive user interfaces. My expertise extends to backend development with <span className="text-2xl font-bold">MongoDB</span> and <span className="text-2xl font-bold">Node.js</span>, enabling me to deliver seamless full-stack solutions. Committed to excellence and continuous learning, I stay updated with the latest industry trends to ensure my projects are cutting-edge and future-proof.</p>
            <div>
                <a href="#_" className="mr-4 relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Get In Touch</span>
                    <span className="relative invisible">Get In Touch</span>
                </a>
                <a href="/Resume.pdf" download className="relative inline-flex items-center justify-center p-4 px-6 py-3 overflow-hidden font-medium text-indigo-600 transition duration-300 ease-out border-2 border-purple-500 rounded-full shadow-md group">
                    <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-purple-500 group-hover:translate-x-0 ease">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                    </span>
                    <span className="absolute flex items-center justify-center w-full h-full text-white transition-all duration-300 transform group-hover:translate-x-full ease">Download Resume</span>
                    <span className="relative invisible">Download Resume</span>
                </a>
            </div>
        </div>
    );
};

export default Banner;