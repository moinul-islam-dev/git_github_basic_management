import logo from "../assets/logo.png"

const navLinks = ["Home", "Technologies", "Projects", "About", "Contact"];

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm px-4 lg:px-8">
            {/* Navbar Start: Mobile Dropdown & Logo */}
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            aria-label="Menu"
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16"
                            />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-50 mt-3 w-52 p-2 shadow-md"
                    >
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <a href="#" className="hover:text-pink-600 font-medium">
                                    {link}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Logo & Brand Name */}
                <a href="#" className="flex items-center gap-2 btn btn-ghost text-xl px-1 hover:bg-transparent">
                    <img src={logo} alt="logo" className="h-8 w-auto" />
                    {/* যদি লোগোর পাশে টেক্সট আলাদা রাখতে চান */}
                    {/* <span className="font-bold text-xl"><span className="text-neutral">Dev</span><span className="text-pink-600">Stack</span></span> */}
                </a>
            </div>

            {/* Navbar Center: Desktop Menu */}
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-1">
                    {navLinks.map((link, index) => (
                        <li key={index}>
                            <a
                                href="#"
                                className={`font-medium ${link === "Home" ? "text-pink-600" : "text-gray-600 hover:text-pink-600"}`}
                            >
                                {link}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Navbar End: Sign In & Sign Up Buttons */}
            <div className="navbar-end gap-3">
                <a href="#signin" className="hidden sm:inline-block font-medium text-gray-700 hover:text-pink-600 px-3 py-2">
                    Sign In
                </a>
                <a href="#signup" className="btn bg-pink-600 hover:bg-pink-700 text-white border-none rounded-full px-6">
                    Sign Up
                </a>
            </div>
        </div>
    )
};

export default Navbar;