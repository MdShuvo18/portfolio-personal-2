
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { EffectCoverflow, Pagination } from 'swiper/modules';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Projects = () => {
    return (
        <div>
            <h1 className="text-3xl font-extrabold text-center bg-clip-text text-transparent bg-orange-gradient">PROJECTS</h1>
            <div>
                <Swiper
                    effect={'coverflow'}
                    grabCursor={true}
                    centeredSlides={true}
                    slidesPerView={'auto'}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}
                    pagination={true}
                    modules={[EffectCoverflow, Pagination]}
                    className="mySwiper"
                >
                    {/* 1st project */}
                    <SwiperSlide>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://i.ibb.co/684FQtK/icon-learn-bridge.png"
                                    alt=""
                                    className="rounded-xl" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">LearnBridge</h2>
                                <p>JavaScript || React || Tailwind || Node.js || Mongodb</p>
                                <div className="card-actions items-center">

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
                                        <div className='ml-12'>
                                            <FaGithub></FaGithub>
                                        </div>
                                    </Link>
                                </div>



                            </div>

                        </div>
                    </SwiperSlide>

                    {/* 2nd project */}
                    <SwiperSlide>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://i.ibb.co/XJ769Wc/stamped-preview-w7.png"
                                    alt=""
                                    className="rounded-xl h-[164px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">PulsePost</h2>
                                <p>JavaScript || React || Tailwind || Node.js || Mongodb</p>
                                <div className="card-actions items-center">

                                    <a href="https://pulsepost-e00be.web.app/" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                        <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                        <span className="relative group-hover:text-white">Live</span>
                                    </a>
                                    <Link to='/pulsepost'>
                                        <a href="#_" className="px-5 py-2.5 relative rounded group overflow-hidden font-medium bg-purple-50 text-purple-600 inline-block">
                                            <span className="absolute top-0 left-0 flex w-full h-0 mb-0 transition-all duration-200 ease-out transform translate-y-0 bg-purple-600 group-hover:h-full opacity-90"></span>
                                            <span className="relative group-hover:text-white">View details...</span>
                                        </a>
                                    </Link>
                                    <Link to='https://github.com/MdShuvo18/PulsePost'>
                                        <div className='ml-12'>
                                            <FaGithub></FaGithub>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    {/* 3rd project */}
                    <SwiperSlide>
                        <div className="card bg-base-100 w-96 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img
                                    src="https://i.ibb.co/pvkYNr0/images-1.png"
                                    alt=""
                                    className="rounded-xl h-[164px]" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title">ArtyPot</h2>
                                <p>JavaScript || React || Tailwind || Node.js || Mongodb</p>
                                <div className="card-actions items-center">
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
                                        <div className='ml-12'>
                                            <FaGithub></FaGithub>
                                        </div>
                                    </Link>
                                </div>


                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Projects;