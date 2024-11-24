import { motion } from "framer-motion";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: custom * 0.2 },
    }),
};

const LearnBridge = () => {
    return (
        <motion.div
            initial="hidden"
            animate="visible"
            className="space-y-10"
        >
            {/* Navbar */}
            <motion.div variants={fadeIn} custom={0}>
                <Navbar />
            </motion.div>

            {/* Title */}
            <motion.div
                variants={fadeIn}
                custom={1}
                className="text-center text-white"
            >
                <h1 className="text-5xl font-extrabold">Learn Bridge</h1>
            </motion.div>

            {/* Description */}
            <motion.div
                variants={fadeIn}
                custom={2}
                className="space-y-5 text-white"
            >
                <h1 className="text-2xl font-bold">Description:</h1>
                <hr />
                <p className="text-lg font-semibold">
                    Welcome to LearnBridge, your ultimate platform for comprehensive learning and development. Here anyone can want to be a teacher. In this way apply for the request and also wait for the admin response. Also a random user treat like a student and also buy and purchase any course by the payment method system. Our goal is to provide high-quality educational content to help learners master new skills and advance their careers.
                </p>
            </motion.div>

            {/* Features */}
            <motion.div
                variants={fadeIn}
                custom={3}
                className="space-y-5 text-white"
            >
                <h1 className="text-2xl font-bold mt-10">Features:</h1>
                <hr />
                <p className="text-lg font-semibold">
                    1. <span className="font-bold text-red-300">Diverse Course Catalog:</span> Access a wide range of courses across different domains including web development, data science, digital marketing, and more.
                </p>
                <p className="text-lg font-semibold">
                    2. <span className="font-bold text-red-300">Expert Instructors:</span> Learn from industry experts with extensive knowledge and experience in their respective fields.
                </p>
                <p className="text-lg font-semibold">
                    3. <span className="font-bold text-red-300">Interactive Learning:</span> Engage in interactive lessons and hands-on projects to reinforce learning and practical application.
                </p>
            </motion.div>

            {/* Technology */}
            <motion.div
                variants={fadeIn}
                custom={4}
                className="space-y-5 text-white"
            >
                <h1 className="text-2xl font-bold mt-10">Technology used in this project:</h1>
                <hr />
                <p className="font-bold text-cyan-500">
                    JavaScript || React || Tailwind || Node.js || MongoDB
                </p>
            </motion.div>

            {/* Footer */}
            <motion.div variants={fadeIn} custom={5}>
                <Footer />
            </motion.div>
        </motion.div>
    );
};

export default LearnBridge;
