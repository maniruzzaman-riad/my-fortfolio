import { NavLink } from "react-router-dom";


const Navbar = () => {
    const allNav = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="service">Services</NavLink></li>
        <li><NavLink to="sites">Sites</NavLink></li>
        <li><NavLink to="contact">Contact Us</NavLink></li>
    </>
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {allNav}
                        </ul>
                    </div>
                    <h2 className="text-4xl font-bold text-purple-700">Zaman-IT</h2>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {allNav}
                    </ul>
                </div>
                <div className="navbar-end">
                <button className="px-8 py-3 font-semibold rounded-full text-white bg-gray-700 hover:bg-gray-600 dark:bg-gray-100 dark:text-gray-800 border-2">Hire Me</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;