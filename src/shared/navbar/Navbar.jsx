import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Navbar = () => {
    const { user, logOut } = useContext(AuthContext);
    const navLinks = <>
        <li><NavLink className="text-lg" to="/">Home</NavLink></li>
        { !user && <>
            <li><NavLink className="text-lg" to="/contact">Contact</NavLink></li>
        <li><NavLink className="text-lg" to="/about">About Us</NavLink></li>
        </>}
        
        { user && <>
            <li><NavLink className="text-lg" to="/Gallery">Gallery</NavLink></li>
        <li><NavLink className="text-lg" to="/career">Career</NavLink></li>
        <li><NavLink className="text-lg" to="/profile">Profile</NavLink></li>
        </>}
    </>
    
    console.log(user)
    const handleSignOut = () => {
        logOut()
            .then(()=>{
                toast.success(`LogOut Successfull`, {
                    position: toast.POSITION.TOP_CENTER,
                });
            })
            .catch()
    }
    return (
        <div>
            <div className="navbar bg-base-100 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks}
                        </ul>
                    </div>

                    <a className="btn btn-ghost normal-case text-base md:text-3xl pl-4 navbar-start">BirthdayBliss</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="navbar-end">
                    { 
                        user ?  <div className=" md:flex items-center ">
                            <img className="ml-28 md:ml-0 md:w-[30px] h-11 md:h-7 rounded-full" src={user.photoURL} alt="" />
                            <p>UserName:{user.displayName}</p>
                            
                            <button onClick={handleSignOut} className="btn ml-20 md:ml-0">Sign Out</button>
                        </div>

                            :
                            <Link to="/login" className="btn bg-red-400 text-white text-lg">Login</Link>

                    }
                    <ToastContainer></ToastContainer>
                </div>

            </div>
        </div>
    );
};

export default Navbar;