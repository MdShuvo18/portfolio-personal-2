import { Link } from "react-router-dom";


const Navbar = () => {
    // const links = <>
    //     <li><NavLink to='/'>Home</NavLink></li>
    //     <li><NavLink to='/allprojects'>Projects</NavLink></li>
    //     <li><NavLink to='/contactdetails'>Contact</NavLink></li>
    // </>
    const links = [
        { title: "Home", path: "/" },
        { title: "Projects", path: "/allprojects" },
        { title: "Contact", path: "/contactdetails" },
    ];
    
    return (
        <div>
            <div className="navbar bg-[#222222]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
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
                            className="menu menu-sm dropdown-content  rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#FFFFFF]">
                           {links.map((link) => (
                            <a key={link.path} className="text-xl">
                                <Link className="hover:text-blue-300 hover:text-2xl hover:font-semibold hover:border-b-2 ml-3" to={link.path}>{link.title}</Link>
                            </a>
                        ))}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl text-white">
                    <img className="w-12 h-12 rounded-lg" src="/logo.png" alt="" />
                        <span className="bg-clip-text text-transparent bg-primary-gradient">
                        Kamruzzaman Shuvo
                    </span>
                  
                    </a>
                </div>
                <div className="navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[#FFFFFF]">
                        
                         {links.map((link) => (
                            <a key={link.path} className="text-xl font-extrabold">
                                <Link className="hover:text-blue-300 hover:text-2xl hover:font-semibold hover:border-b-2 ml-8" to={link.path}>{link.title}</Link>
                            </a>
                        ))}
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Navbar;