import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as AuthServices from "../../services/authServices";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleOnSubmit = async (event) => {
        event.preventDefault()
        let res;
        if (username && password) {
            res = await AuthServices.login(username, password)
        }
        if (res) {
            navigate("/home");
        }
        else {
            setPassword("");
            alert("Invalid credentials");
        }
    }

    return (
        <div className="h-screen md:flex">
            <div className="flex h-screen w-full items-center justify-center text-white bg-gray-900 bg-cover bg-no-repeat" styles="background-image:url('./img/pp.jpg'); position: absolute; z-index:10;">
                <span className="text-white text-center text-6xl font-mono ml-10 -mt-80">Courses for Erasmus+ Students -CES-</span>
                <div className="wrapper">
                    <ul className="dynamic-txts">
                        <li><span>Login</span></li>
                        <li><span>Login</span></li>
                        <li><span>Login</span></li>
                    </ul>
                </div>
            </div>

            <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form className="bg-white" onSubmit={handleOnSubmit}>
                    <h1 className="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                    <p className="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="text" placeholder="Username" value={username} onChange={(event) => { setUsername(event.target.value) }} />
                    </div>
                    <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fillRule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clipRule="evenodd" />
                        </svg>
                        <input className="pl-2 outline-none border-none" type="password" placeholder="Password" value={password} onChange={(event) => { setPassword(event.target.value) }} />
                    </div>
                    <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                    <Link to='/ForgotPassword' className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</Link>
                    <Link to='/register'><span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Don't have an account?</span></Link>
                    <div className="text-center">
                        <Link to='/'><span className="text-sm ml-2 hover:text-blue-500 cursor-pointer">Continue Without account</span></Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;