import { Link, useNavigate } from "react-router-dom";
import * as AuthServices from "../../services/authServices";
import { useState } from "react";

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
    const navigate = useNavigate();
    const handleSubmit = (event) => {
        event.preventDefault();
        if (AuthServices.ForgotPassword(email)) {
            navigate("/Login");
        }
    };



    return (
        <div className="h-screen md:flex">
            <div className="flex h-screen w-full items-center justify-center text-white bg-gray-900 bg-cover bg-no-repeat" styles="background-image:url('./img/pp.jpg'); position: absolute; z-index:10;">
                <span className="text-white text-center text-6xl font-mono ml-10 -mt-80">Courses for Erasmus+ Students -CES-</span>
                <div className="wrapper">
                    <ul className="dynamic-txts">
                        <li><span>Forgot Password</span></li>
                        <li><span>Forgot Password</span></li>
                        <li><span>Forgot Password</span></li>
                    </ul>
                </div>
            </div>

            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white">
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Forgot password?</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Enter the mail address used for registration</p>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path d="M18.4 4H1.6C.7 4 0 4.7 0 5.6v8.8c0 .9.7 1.6 1.6 1.6h16.8c.9 0 1.6-.7 1.6-1.6V5.6c0-.9-.7-1.6-1.6-1.6zM17.3 6L10 11.2 2.7 6h14.6z" />
                            <path d="M2.7 14.1h14.6c.2 0 .4-.1.4-.4v-.8L10 9.9 2.3 12.9v.8c0 .2.2.4.4.4zm-.4-1.2l7.7-3.1L2.3 7v5.9z" />
                        </svg>

                        <input className="pl-2 outline-none border-none" type="email" placeholder="Email" value={email} onChange={(event) => setEmail(event.target.value)} />
                    </div>

                    <button onClick={handleSubmit} className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Confirm</button>

                    <Link to="/Login"><span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Return to Login</span></Link>
                    <Link to="/register"><span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Sign up</span></Link>

                </form>
            </div>
        </div>
    );

};

export default ForgotPassword;