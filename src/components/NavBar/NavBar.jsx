
import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// import { FaBeer } from "react-icons/fa";


const NavBar = () => {
    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/profile/:id", name: "Profile" }
    ];


    return (
        <nav className="text-black bg-purple-300 p-6">
            <div className="md:hidden text-2xl" onClick={() => setOpen(!open)}>
                {
                    open === true ?
                        <AiOutlineClose></AiOutlineClose> :
                        <AiOutlineMenu className=""></AiOutlineMenu>
                }

            </div>

            <ul className={`md:flex absolute duration-1000
            ${open ? 'top-16' : '-top-60'}  
            px-4 md:static`}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;