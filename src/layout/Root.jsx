import { Outlet } from "react-router-dom";
import Navbar from "../shared/navbar/Navbar";
import Footer from "../shared/navbar/Footer";

const Root = () => {
    return (
        <div>
            <div  className="max-w-7xl mx-auto">
            

            <Outlet></Outlet>
            
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;