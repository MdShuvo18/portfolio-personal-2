import { createBrowserRouter} from "react-router-dom";
import Main from "../LayOut/Main";
import Home from "../Component/Home/Home";
import LearnBridge from "../Component/ProjectDetails/LearnBridge";
import PulsePost from "../Component/ProjectDetails/PulsePost";
import ArtyPot from "../Component/ProjectDetails/ArtyPot";
import AllProjects from "../Component/Details/AllProjects";
import ContactDetails from "../Component/Details/ContactDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/learnbridge',
                element:<LearnBridge></LearnBridge>
            },
            {
                path:'/pulsepost',
                element:<PulsePost></PulsePost>
            },
            {
                path:'/artypot',
                element:<ArtyPot></ArtyPot>
            },
            {
                path:'/allprojects',
                element:<AllProjects></AllProjects>
            },
            {
                path:'/contactdetails',
                element:<ContactDetails></ContactDetails>
            }
           
        ]
    },
]);
export default router;