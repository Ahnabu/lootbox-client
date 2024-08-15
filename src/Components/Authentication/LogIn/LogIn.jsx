
import { Link } from "react-router-dom";

import { Typography, Button, } from "@material-tailwind/react";
import { useContext, useState } from "react";
import axios from 'axios'
import { useLocation, useNavigate } from 'react-router-dom';
import { FaEyeSlash } from "react-icons/fa6";
import { FaEye } from "react-icons/fa";



import { useForm } from "react-hook-form";

import Swal from "sweetalert2";
import { AuthContext } from "../../../Provider/AuthProvider";
import Methods from "../Methods/Methods";
function LogIn() {

    const { LogInEmail, setUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const [see, setSee] = useState(false);
    const { register, handleSubmit } = useForm();
    const handleLogIn = async data => {



        try {
            const result = await LogInEmail(data?.email, data?.password)

            setUser(result.user)
            await axios.post(`${import.meta.env.VITE_API_URL}/users`)
                .then(res => setUser(res.data))
            navigate(location?.state || '/', { replace: true })
            Swal.fire({
                title: 'Success',
                text: 'Successfully logged in',
                icon: 'success',
                timer: 1500
            })
        }
        catch (error) {
            Swal.fire({
                title: 'Error!',
                timer: 1500,
                text: `${error.message}`,
                icon: 'error',

            })
            return console.log(error);

        }
    }



    return (
        <div className="w-full mx-auto pt-16 bg-opacity-40 text-black">
           
            <div className="w-full max-w-md p-8 space-y-3 bg-gray-300 text-gray rounded-xl dark:bg-gray-50 mx-auto dark:text-gray-800">
                <h1 className="text-2xl font-bold text-center">Login</h1>
                <form noValidate="" action="" className="space-y-6" onSubmit={handleSubmit(handleLogIn)}>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="username" className="block font-bold  dark:text-gray-600">Email</label>
                        <input type="text" name="email" id="email"
                            {...register("email")}
                            placeholder="your@email.com" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600 text-black" />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label htmlFor="password" className="block dark:text-gray-600 font-bold ">Password</label>
                        <input type={`${see ? 'text' : 'password'}`}
                            {...register("password")}
                            name="password" id="password" placeholder="Password" className="w-full px-4 py-3 rounded-md dark:border-gray-300 dark:bg-gray-50 text-black dark:text-gray-800 focus:dark:border-violet-600" />
                        <div className="flex justify-end text-xs dark:text-gray-600">

                            <span onClick={() => { setSee(!see) }} className={' relative -top-9  right-3 md:right-6 text-primary text-xl'}>
                                {see ? <FaEyeSlash /> : <FaEye />}
                            </span>
                        </div>
                    </div>
                    <Button className="mt-6 bg-primary border-black text-black"  type="submit" fullWidth >
                        Log In
                    </Button>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                   
                    <div className="flex-1 h-px sm:w-16 dark:bg-gray-300"></div>
                </div>
                <Methods></Methods>



                <Typography color="gray" className="mt-4 text-center font-normal">
                    Do not have an account?{" "}
                    <Link to={'/register'}>Register</Link>
                </Typography>
            </div>

        </div>

    );
}

export default LogIn;