import htmlImg from '../../../public/html.png'
const Experience = () => {
    return (
        <div className="space-y-10">
            <h1 className="text-xl font-semibold text-[#C5C5C5] text-center ">EXPERIENCE WITH</h1>
            <div className="flex justify-center items-center gap-5">
                <img className="w-11 h-11 rounded-lg" src={htmlImg} alt="" />
                <img className="w-11 h-11 rounded-lg" src="/css.png" alt="" />
                <img className="w-11 h-11 rounded-lg" src="/javascript.png" alt="" />
                <img className="w-11 h-11 rounded-lg" src="/react.png" alt="" />
                <img className="w-11 h-11 rounded-lg" src="/tailwind.png" alt="" />
                <img className="w-11 h-11 rounded-lg" src="/nodejs.png" alt="" />
                <img className="w-11 h-11 rounded-lg" src="/mongodb.png" alt="" />
            </div>
        </div>
    );
};

export default Experience;