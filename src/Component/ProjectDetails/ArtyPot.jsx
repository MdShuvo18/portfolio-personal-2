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

const ArtyPot = () => {
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
                <h1 className="text-5xl font-extrabold">ArtyPot</h1>
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
                    ArtyPot is your go-to destination for all things ceramics and pottery. Whether you are a seasoned artisan or just starting out, ArtyPot has everything you need to unleash your creativity and elevate your craft.
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
                    1. <span className="font-bold text-red-300">Diverse Range of Categories:</span> Explore our extensive collection of ceramics and pottery items, including vases, mugs, plates, sculptures, and more, crafted by talented artisans from around the world, which is begin added by them.
                </p>
                <p className="text-lg font-semibold">
                    2. <span className="font-bold text-red-300">Update & Delete:</span> Here user only update and delete only his/her own item.
                </p>
                <p className="text-lg font-semibold">
                    3. <span className="font-bold text-red-300">Detailed Descriptions:</span> Each item entry includes a detailed description, providing a clear and concise overview of the item. This ensures you can quickly gauge the relevance and interest level before diving into the detail item.
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

export default ArtyPot;
