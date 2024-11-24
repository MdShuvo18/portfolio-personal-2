import { motion } from "framer-motion";
import Banner from "./Banner";
import Contact from "./Contact";
import Education from "./Education";
import Experience from "./Experience";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Projects from "./Projects";

const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: (custom) => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, delay: custom * 0.2 },
    }),
};

const Home = () => {
    return (
        <div className="space-y-12">
            {/* Navbar */}
            <motion.div
                initial="hidden"
                animate="visible"
                variants={fadeIn}
                custom={0}
            >
                <Navbar />
            </motion.div>

            {/* Banner */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={1}
            >
                <Banner />
            </motion.div>

            {/* Experience */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={2}
            >
                <Experience />
            </motion.div>

            {/* Projects */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={3}
            >
                <Projects />
            </motion.div>

            {/* Education */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={4}
            >
                <Education />
            </motion.div>

            {/* Contact */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={5}
            >
                <Contact />
            </motion.div>

            {/* Footer */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeIn}
                custom={5}
            >
                <Footer />
            </motion.div>
        </div>
    );
};

export default Home;
