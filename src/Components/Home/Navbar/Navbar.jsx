
import React, { useContext } from "react";
import {
    Navbar,

    Typography,
    Button,
    IconButton,
    Collapse,

} from "@material-tailwind/react";

import { Link, NavLink } from "react-router-dom";

import NavbarProfile from "./NavbarProfile";
import { AuthContext } from "../../../Provider/AuthProvider";

export function StickyNavbar() {
    const [openNav, setOpenNav] = React.useState(false);
    const { user } = useContext(AuthContext)
    React.useEffect(() => {
        window.addEventListener(
            "resize",
            () => window.innerWidth >= 960 && setOpenNav(false),
        );
    }, []);


    const navList = (
        <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6 font-semibold z-10 bg-opacity-10 ">
            <Typography
                as="li"
                variant="small"
                color="black"
                className="p-1 font-normal"
            >
                <NavLink to={'/home'} className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? " p-2 underline font-bold text-blue-600" : "text-black"
                } >
                    Home
                </NavLink>
            </Typography>

        </ul>
    );

    return (
        <div className=" min-w-80 w-full max-w-[1280px] mx-auto">
            <Navbar className="fixed bg-transparent z-10 h-max max-w-[1280px] mx-auto rounded-none px-2 md:px-4 py-2 lg:px-8 lg:py-4 bg-opacity-40 bg-primary">
                <div className="flex items-center justify-between text-primary">
                    <Typography

                        className=" flex gap-2 items-center mr-2 md:mr-4 cursor-pointer py-1.5 md:text-3xl text-base font-bold text-black "
                    >
                        <img src="/logo.png" alt="logo" className="h-7 w-7 " />
                        LootBox

                    </Typography>

                    <div>
                        <div className="flex items-center gap-4">
                            <div className="mr-4 hidden lg:block text-black">{navList}</div>
                            {user ? <NavbarProfile></NavbarProfile> : <div className="flex items-center gap-x-1">



                                <Link to={'/login'}>
                                    <Button
                                        className={`flex items-center text-primary bg-white justify-center w-full p-3 font-semibold tracking-wide rounded-md dark:bg-violet-600 dark:text-gray-50 border border-primary`}
                                    >Join Us</Button>
                                </Link>


                            </div>}

                            <IconButton
                                variant="text"
                                className="ml-auto h-6 w-6 relative text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
                                ripple={false}
                                onClick={() => setOpenNav(!openNav)}
                            >
                                {openNav ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        className="h-6 w-6 relative "
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 relative"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </IconButton>

                        </div>

                    </div>


                </div>
                <Collapse open={openNav}>
                    {navList}
                    <div className="flex items-center gap-x-1">

                        <Link to={'/login'}>
                            <Button fullWidth size="sm" className="  text-white bg-primary">
                                Log In
                            </Button>
                        </Link>


                        <Link to={'/register'}>
                            <Button fullWidth variant="gradient" size="sm" className=" bg-white text-primary">
                                Register
                            </Button>
                        </Link>

                    </div>
                </Collapse>

            </Navbar>

        </div>
    );
}

