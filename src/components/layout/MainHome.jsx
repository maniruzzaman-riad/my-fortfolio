import { Outlet } from "react-router-dom";
import Navbar from "../Sheard/Navbar";


const MainHome = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            
        </div>
    );
};

export default MainHome;