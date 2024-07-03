import { Link } from "react-router-dom";
import emailjs from '@emailjs/browser';


const Contact = () => {
    const handleSend = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const name = form.name.value;
        const message = form.message.value
        const total = { email, name, message }
        console.log(total)
        // console.log(email)

        const templateParams = {
            from_name: email,
            to_name: name,
            message: message,
        };
        emailjs
            .send(`${import.meta.env.VITE_SERVICES_ID}`, `${import.meta.env.VITE_TEMPLATEID}`, templateParams, {
                publicKey: `${import.meta.env.VITE_PUBLIC_KEY}`,
            })
            .then(
                (response) => {
                    console.log('SUCCESS!', response.status, response.text);
                },
                (err) => {
                    console.log('FAILED...', err);
                },
            );
           
    }
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
            <div>
                <form onSubmit={handleSend} className="w-1/3 ml-[150px] lg:ml-[520px]">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Name</span>
                        </label>
                        <input type="name" name="name" placeholder="name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Email</span>
                        </label>
                        <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-white">Message</span>
                        </label>
                        <textarea
                            required
                            type='text'
                            name='message'
                            placeholder='Message'
                            className="textarea textarea-bordered textarea-xs w-full "></textarea>
                    </div>

                    <div className="text-center mt-6">
                        {/* <input className="text-white" name="submit" type="submit" /> */}
                        <button href="#_" className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden font-semibold text-indigo-600 transition-all duration-150 ease-in-out rounded hover:pl-10 hover:pr-6 bg-gray-50 group">
                            <span className="absolute bottom-0 left-0 w-full h-1 transition-all duration-150 ease-in-out bg-indigo-600 group-hover:h-full"></span>
                            <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="absolute left-0 pl-2.5 -translate-x-12 group-hover:translate-x-0 ease-out duration-200">
                                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
                            </span>
                            <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">Send</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Contact;