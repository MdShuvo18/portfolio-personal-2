import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";


const ArtyPot = () => {
    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            <div>
                <h1 className="text-5xl font-extrabold text-center text-white">ArtyPot</h1>
                <div className="space-y-5 text-white">
                    <h1 className="text-2xl font-bold">Description:</h1>
                    <hr />
                    <p className="text-lg font-semibold">ArtyPot is your go-to destination for all things ceramics and pottery. Whether you are a seasoned artisan or just starting out, ArtyPot has everything you need to unleash your creativity and elevate your craft. </p>
                    <hr />
                    <h1 className="text-2xl font-bold mt-10">Features:</h1>
                    <hr />
                    <p className="text-lg font-semibold">
                        1. <span className="font-bold text-red-300">Diverse Range of Categories:</span>Explore our extensive collection of ceramics and pottery items, including vases, mugs, plates, sculptures, and more, crafted by talented artisans from around the world, which is begin added by them.
                    </p>
                    <p className="text-lg font-semibold">
                        2. <span className="font-bold text-red-300">Update & Delete:</span> Here user only update and delete only his/her own item.

                    </p>
                    <p className="text-lg font-semibold">3. <span className="font-bold text-red-300">Detailed Descriptions:</span> Each item entry includes a detailed description, providing a clear and concise overview of the item. This ensures you can quickly gauge the relevance and interest level before diving into the detail item.


                    </p>
                    <hr />
                    <h1 className="text-2xl font-bold mt-10">Technology used in this projects:</h1>
                    <hr />
                    <p className="font-bold text-cyan-500"> JavaScript || React || Tailwind || Node.js || Mongodb</p>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ArtyPot;