import "./Navbar.css"
import {NavLink} from "react-router-dom";
import {FaUsersGear, FaUsers, FaUserPlus} from "react-icons/fa6";
import { IoHome } from "react-icons/io5";


const Navbar = () => {
    return (
        <nav className="nav">
            <ul className="ul">
                <li><NavLink to=""> <IoHome/></NavLink></li>
                <li><NavLink to="create-user"> <FaUserPlus/></NavLink></li>
                <li><NavLink to="update-user"> <FaUsersGear/></NavLink></li>
                <li><NavLink to="users"><FaUsers/></NavLink></li>
            </ul>
        </nav>
    )
}
export default Navbar
