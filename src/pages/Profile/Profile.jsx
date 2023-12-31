import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import Navbar from "../../shared/navbar/Navbar";

const Profile = () => {
    const { user} = useContext(AuthContext);
    return (
        <div>
            <Navbar></Navbar>
            <div className="max-w-7xl ">
            
            <div className="card mx-auto md:w-[800px] md:h-[600px] mt-16 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={user.photoURL} alt="Shoes" className="rounded-xl md:h-[400px] md:w-[450px]" />
                </figure>
                <div className="card-body items-center text-center">

                    <h2 className="card-title">Name:{user.displayName}</h2>
                    <p>Email:{user.email}</p>
                    <p>User Id:{user.uid}</p>
                    
                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;