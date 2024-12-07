import { FaDownload } from "react-icons/fa";
import { Link as ScrollLink } from "react-scroll";

const Nav = () => {
    return (
        
        <div className="navbar bg-[#15151580]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-8 w-8"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content  rounded-box z-[1]  w-52 p-2 shadow">
                        <ScrollLink to="about" smooth={true} duration={500}>
                            <li className='text-white text-xl  font-semibold'><a>ABOUT</a></li>
                        </ScrollLink>
                        <ScrollLink to="skill" smooth={true} duration={500}>
                            <li className='text-white text-xl font-semibold'><a>SKILL</a></li>
                        </ScrollLink>
                        <ScrollLink to="projects" smooth={true} duration={500}>
                            <li className='text-white text-xl font-semibold'><a>PROJECT</a></li>
                        </ScrollLink>
                    </ul>
                </div>
               
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu text-white menu-horizontal px-1">
                    <ScrollLink to="about" smooth={true} duration={500}>
                        <li className='text-white text-xl ml-4  font-semibold'><a>ABOUT</a></li>
                    </ScrollLink>
                    <ScrollLink to="project" smooth={true} duration={500}>
                        <li className='text-white text-xl ml-4 font-semibold'><a>PROJECT</a></li>
                    </ScrollLink>
                    <ScrollLink to="skill" smooth={true} duration={500}>
                        <li className='text-white text-xl ml-4 font-semibold'><a>SKILL</a></li>
                    </ScrollLink>
                    <ScrollLink to="contact" smooth={true} duration={500}>
                        <li className='text-white text-xl ml-4 font-semibold'><a>CONTACT</a></li>
                    </ScrollLink>
                </ul>
            </div>
            <div className="navbar-end">
                <div>
                    <a className="flex" href="https://drive.google.com/file/d/10t-kVLsIdwGzXmfFCWXhu0jhiPeU4QnH/view?usp=sharing" target="_blank">
                        <button type='button' className='bg-[#2E3438] shadow-2xl px-3 py-2 rounded-sm text-white text-xl font-bold hover:scale-110 duration-200 hover:bg-slate-900 flex justify-center items-center gap-2'>
                            Resume
                            <FaDownload />
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Nav;
