import Footer from "../Home/Footer";
import Navbar from "../Home/Navbar";


const PulsePost = () => {
    return (
        <div className="space-y-10">
            <Navbar></Navbar>
            
                <h1 className="text-5xl font-extrabold text-center text-white">PulsePost</h1>
                <div className="space-y-5 text-white">
                    <h1 className="text-2xl font-bold">Description:</h1>
                    <hr />
                    <p className="text-lg font-semibold">Welcome to PulsePost, your go-to blog-based website for discovering insightful and engaging content across a variety of topics.Here user can write a blog and also update and delete his/her own blog.Different types of blog are posted here and the blogs owner can monitoring on it. </p>
                    <hr />
                    <h1 className="text-2xl font-bold mt-10">Features:</h1>
                    <hr />
                    <p className="text-lg font-semibold">
                        1. <span className="font-bold text-red-300">Diverse Range of Categories:</span> Explore a wide array of blog categories including Travel, Food & Cooking, Business & Entrepreneurship, Health & Wellness, Home & Garden, and Photography. PulsePost provides content that caters to varied interests and passions.
                    </p>
                    <p className="text-lg font-semibold">
                        2. <span className="font-bold text-red-300">Update & Delete:</span> Here user only update and delete only his/her own blog posts.

                    </p>
                    <p className="text-lg font-semibold">3. <span className="font-bold text-red-300">Detailed Blog Descriptions:</span> Each blog entry includes a detailed description, providing a clear and concise overview of the content. This ensures you can quickly gauge the relevance and interest level before diving into the full post.


                    </p>
                    <hr />
                    <h1 className="text-2xl font-bold mt-10">Technology used in this projects:</h1>
                    <hr />
                    <p className="font-bold text-cyan-500"> JavaScript || React || Tailwind || Node.js || Mongodb</p>
               
            </div>
            <Footer></Footer>
        </div>
    );
};

export default PulsePost;