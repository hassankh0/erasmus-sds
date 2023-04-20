import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate();

    const handleOnSubmit = () => {
        navigate("/home", true);
    }

    return (
        <div class="h-screen md:flex">
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

            <div class="flex md:w-1/2 justify-center py-10 items-center bg-white">
                <form class="bg-white" onSubmit={handleOnSubmit}>
                    <h1 class="text-gray-800 font-bold text-2xl mb-1">Hello Again!</h1>
                    <p class="text-sm font-normal text-gray-600 mb-7">Welcome Back</p>

                    <div class="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                                clip-rule="evenodd" />
                        </svg>
                        <input class="pl-2 outline-none border-none" type="text" name="" id="" placeholder="Username" />
                    </div>
                    <div class="flex items-center border-2 py-2 px-3 rounded-2xl">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 text-gray-400" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clip-rule="evenodd" />
                        </svg>
                        <input class="pl-2 outline-none border-none" type="password" name="" id="" placeholder="Password" />
                    </div>
                    <button type="submit" class="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Login</button>
                    <span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Forgot Password ?</span>
                    <Link to='/register'><span class="text-sm ml-2 hover:text-blue-500 cursor-pointer">Don't have an account? ?</span></Link>

                </form>
            </div>
        </div>
    );
};

export default Login;