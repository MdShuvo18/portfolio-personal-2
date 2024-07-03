import Contact from "../Home/Contact";
import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";


const ContactDetails = () => {
    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default ContactDetails;