import { Link } from "react-router-dom";


const Login = () => {
    return (
        <div>
             <div className="pt-8 bg-[#009CDB26]">
                <h2 className="text-3xl my-10 text-center pt-10 font-bold">Please Login</h2>
                <form  className=" md:w-3/4 lg:w-1/2 mx-auto">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Email</span>
                        </label>
                        <input type="email" required name="email" placeholder="Email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text font-medium">Password</span>
                        </label>
                        <input type="password" required name="password" placeholder="Password" className="input input-bordered" />
                       
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn bg-red-400 text-white">Login</button>
                    </div>
                </form>
                <p className="text-center mt-4 pb-20 mb-20 text-lg font-bold">Do not have an account <Link to="/register" className="text-blue-600 font-bold" >Register</Link></p>
            </div> 
        </div>
    );
};

export default Login;