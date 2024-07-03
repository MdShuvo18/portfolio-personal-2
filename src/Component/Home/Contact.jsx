import { Link } from "react-router-dom";



const Contact = () => {
    return (
        <div className="space-y-10">
            <h1 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-orange-gradient">CONTACT</h1>
            <p className="text-[#C5C5C5] font-light text-center text-lg">
                I am open to exploring new opportunities that align with my skills and interests. Please feel free to reach out if you have any questions or requests.
            </p>
            <div className="flex gap-6 justify-center items-center">
                <img className="w-8 h-8 rounded-full" src="/call.png" alt="" />
                <p className="text-white text-lg font-light">+880 1576-475587 ; +880 1738-774335</p>
                
            </div>
            <div className="flex justify-center items-center gap-6">
                <a href="mailto:mdks33881@gmail.com" className="text-blue-500 hover:text-blue-700">
                    <img className="w-8 h-8 rounded-full" src="/112-gmail_email_mail-512.webp" alt="" />
                </a>
                <Link to='https://github.com/MdShuvo18'>
                    <img className="w-8 h-8 rounded-full" src="/github-icon-2.svg" alt="" />
                </Link>
                <Link to='https://www.linkedin.com/in/kamruzzaman-shuvo/'>
                    <img className="w-8 h-8 rounded-full" src="/linkedin-logo_578229-227.avif" alt="" />
                </Link>
            </div>
        </div>
    );
};

export default Contact;