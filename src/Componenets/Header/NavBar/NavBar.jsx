import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";

const NavBar = () => {
    return (
        <div>
            <nav className="flex justify-between items-center px-7 py-3">
                <div>
                    <Logo></Logo>
                </div>
                <ul className="flex gap-5">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/donation"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Donation
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/statistis"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-red-500 underline" : ""
                            }
                        >
                            Statistis
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;