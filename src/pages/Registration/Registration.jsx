import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { updateProfile } from "firebase/auth";

const Registration = () => {
    const {createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    


    const handleRegistration = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const name = form.get('name');
        const photo = form.get('photo');
        const email = form.get('email');
        const password = form.get('password');
        console.log(name, photo, email, password);

        if (password.length < 6) {
            toast.error(`Password should be at least 6 characters or longer`, {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }
        else if (!/[A-Z]/.test(password)) {
            toast.error(`Your password should have at least one upper case characters`, {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }
        else if (!/[!@#$%^&*()_+{}\[\]:;<>,.?~\\-]/.test(password)) {
            toast.error(`Password must contain at least one special characters`, {
                position: toast.POSITION.TOP_CENTER,
            });
            return;
        }
        createUser(email, password)
            .then(result => {
                const user = result.user;
                updateProfile(user, {
                    displayName: name , 
                    photoURL: photo , 
                  }).then(() => {
                    console.log("User profile updated");
                  }).catch((error) => {
                    console.error("Error updating profile:", error);
                  });
                toast.success(`Registration Successfully complete`, {
                    position: toast.POSITION.TOP_CENTER,
                  });
                  e.target.reset();
                  navigate(location?.state ? location.state : '/');
                  
                            })
            .catch(error => {
                console.error(error)
                toast.error(`${error.message}`, {
                    position: toast.POSITION.TOP_CENTER,
                });
            })
        }
    return (
        <div>
             <div className="bg-[#E76F511A]">
                <h2 className="text-3xl my-7 pt-5 text-center font-bold">Please Register</h2>
                <form onSubmit={handleRegistration} className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Name</span>
                        </label>
                        <input type="text" required name="name" placeholder="Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Photo URL</span>
                        </label>
                        <input type="text" required name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-semibold">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                        
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white font-bold">Register</button>
                    </div>
                </form>
                <ToastContainer></ToastContainer>
                <p className="text-center mt-4 font-bold text-lg pb-6 mb-7 ">Already have an account? <Link className="text-blue-600 font-bold" to="/login">Login</Link></p>
            </div>
            
        </div>
    );
};

export default Registration;