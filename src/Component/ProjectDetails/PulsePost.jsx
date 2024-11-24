import { motion } from "framer-motion";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";

// Animation variant for fade-in effect
const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: custom * 0.2 },
    }),
};

const PulsePost = () => {
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
                <h1 className="text-5xl font-extrabold">PulsePost</h1>
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
                    Welcome to PulsePost, your go-to blog-based website for discovering insightful and engaging content across a variety of topics. Here, users can write a blog and also update and delete their own blog. Different types of blogs are posted here, and blog owners can monitor them.
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
                    1. <span className="font-bold text-red-300">Diverse Range of Categories:</span> Explore a wide array of blog categories including Travel, Food & Cooking, Business & Entrepreneurship, Health & Wellness, Home & Garden, and Photography. PulsePost provides content that caters to varied interests and passions.
                </p>
                <p className="text-lg font-semibold">
                    2. <span className="font-bold text-red-300">Update & Delete:</span> Users can only update and delete their own blog posts.
                </p>
                <p className="text-lg font-semibold">
                    3. <span className="font-bold text-red-300">Detailed Blog Descriptions:</span> Each blog entry includes a detailed description, providing a clear and concise overview of the content. This ensures you can quickly gauge the relevance and interest level before diving into the full post.
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

export default PulsePost;
