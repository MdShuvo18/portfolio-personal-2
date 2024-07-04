import { Link, NavLink } from "react-router-dom";


const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center bg-[#222222] text-base-content rounded p-10">
                <p className="text-white text-lg font-bold">
                    <span className="bg-clip-text text-transparent bg-primary-gradient">
                        Kamruzzaman Shuvo <span className="text-white">||</span> Web Developer
                    </span>
                </p>
                <nav className="grid grid-flow-col gap-4 text-white">
                    <NavLink to='/' className="link link-hover">About</NavLink>
                    <NavLink to='/contactdetails' className="link link-hover">Contact</NavLink>
                </nav>
                <nav className="flex gap-5">
                <img className="w-8 h-8 rounded-full" src="/112-gmail_email_mail-512.webp" alt="" />
                <p className="text-lg font-light text-white">mdks33881@gmail.com</p>
                </nav>
                <nav>
                    <div className="grid grid-flow-col gap-4">

                        <Link target="_blank" to='https://github.com/MdShuvo18'>
                            <img className="w-8 h-8 rounded-full" src="/github-icon-2.svg" alt="" />
                        </Link>
                        <Link target="_blank" to='https://www.linkedin.com/in/kamruzzaman-shuvo/'>
                            <img className="w-8 h-8 rounded-full" src="/linkedin-logo_578229-227.avif" alt="" />
                        </Link>

                    </div>
                </nav>
                <aside>
                    <p className="text-white">Copyright © ${new Date().getFullYear()} - All right reserved by  <span className="bg-clip-text text-transparent bg-primary-gradient">
                        Kamruzzaman Shuvo
                    </span></p>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;