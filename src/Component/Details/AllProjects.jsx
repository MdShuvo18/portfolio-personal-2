import { Link } from "react-router-dom";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";



const AllProjects = () => {
    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <div>
                {/* 1st */}
                <div className="hero bg-black min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src="https://i.ibb.co/684FQtK/icon-learn-bridge.png"
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="text-white space-y-6">
                            <h1 className="text-5xl font-bold">LearnBridge #1</h1>
                            <p className="py-6 text-lg">
                                Welcome to LearnBridge, your ultimate platform for comprehensive learning and development. Here anyone can want to be a teacher. In this way apply for the request and also wait for the admin response. Also a random user treat like a student and also buy and purchase any course by the payment method system. Our goal is to provide high-quality educational content to help learners master new skills and advance their careers.
                            </p>
                            <p className="text-cyan-600 font-semibold">JavaScript || React || Tailwind || Node.js || Mongodb</p>
                            <div className="flex items-center justify-around">
                                <a href="https://learnbridge-11de6.web.app/" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">Live</span>
                                </a>

                                <Link to='/learnbridge'>
                                    <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                        <span className="relative group-hover:text-white">View details...</span>
                                    </a>

                                </Link>
                                <Link to='https://github.com/MdShuvo18/LearnBridge'>
                                    <div className='ml-12 w-14 h-14'>
                                      <img src="/public/github-icon-2.svg" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <hr />
                {/* 2nd */}
                <div className="hero bg-black min-h-screen">
                    <div className="hero-content flex-col lg:flex-row gap-24">
                        <img
                            src="https://i.ibb.co/XJ769Wc/stamped-preview-w7.png"
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="text-white space-y-6">
                            <h1 className="text-5xl font-bold">PulsePost #2</h1>
                            <p className="py-6 text-lg">
                            Welcome to PulsePost, your go-to blog-based website for discovering insightful and engaging content across a variety of topics.Here user can write a blog and also update and delete his/her own blog.Different types of blog are posted here and the blogs owner can monitoring on it.
                            </p>
                            <p className="text-cyan-600 font-semibold">JavaScript || React || Tailwind || Node.js || Mongodb</p>
                            <div className="flex items-center justify-around">
                                <a href="https://pulsepost-e00be.web.app/" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">Live</span>
                                </a>

                               <div>
                               <Link to='/pulsepost'>
                                    <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                        <span className="relative group-hover:text-white">View details...</span>
                                    </a>

                                </Link>
                               </div>
                                <Link to='https://github.com/MdShuvo18/PulsePost'>
                                    <div className='ml-12 w-10 h-10'>
                                      <img src="/public/github-icon-2.svg" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
                <hr />
                {/* 3rd */}
                <div className="hero bg-black min-h-screen">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <img
                            src="https://i.ibb.co/pvkYNr0/images-1.png"
                            className="max-w-sm rounded-lg shadow-2xl" />
                        <div className="text-white space-y-6">
                            <h1 className="text-5xl font-bold">ArtyPot #3</h1>
                            <p className="py-6 text-lg">
                            ArtyPot is your go-to destination for all things ceramics and pottery. Whether you are a seasoned artisan or just starting out, ArtyPot has everything you need to unleash your creativity and elevate your craft. 
                            </p>
                            <p className="text-cyan-600 font-semibold">JavaScript || React || Tailwind || Node.js || Mongodb</p>
                            <div className="flex items-center justify-around">
                                <a href="https://art-and-craft-store-c1aff.web.app/" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                    <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                    <span className="relative group-hover:text-white">Live</span>
                                </a>

                                <Link to='/artypot'>
                                    <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                        <span className="relative group-hover:text-white">View details...</span>
                                    </a>

                                </Link>
                                <Link to='https://github.com/MdShuvo18/ArtyPot'>
                                    <div className='ml-12 w-14 h-14'>
                                      <img src="/public/github-icon-2.svg" alt="" />
                                    </div>
                                </Link>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
              
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllProjects;