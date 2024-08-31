
import Marquee from "react-fast-marquee";
import 'animate.css';
const Experience = () => {
    return (
        <div className="space-y-10">
            <h1 className="animate__animated animate__zoomInDown animate__delay-2.5s text-2xl font-extrabold text-center bg-clip-text text-transparent bg-orange-gradient ">EXPERIENCE WITH</h1>
           
            <div className="flex justify-center items-center gap-5">
                <Marquee speed={150}>
                    <div className='flex gap-4 w-1/2'>
                        <img className="w-20 h-20 rounded-lg" src="/html.png" alt="" />
                        <img className="w-20 h-20 rounded-lg" src="/css.png" alt="" />
                        <img className="w-20 h-20 rounded-lg" src="/javascript.png" alt="" />
                        <img className="w-20 h-20 rounded-lg" src="/react.png" alt="" />
                        <img className="w-20 h-20 rounded-lg" src="/tailwind.png" alt="" />
                        <img className="w-20 h-20 rounded-lg" src="/nodejs.png" alt="" />
                        <img className="w-20 h-20 rounded-lg" src="/mongodb.png" alt="" />
                    </div>
                </Marquee>

            </div>
        </div>
    );
};

export default Experience;