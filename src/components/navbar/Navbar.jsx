import "./Navbar.css"
import {NavLink, Outlet} from "react-router-dom";


const Navbar = () => {
    return (
        <>
            <nav className="nav">
                <ul className="ul">
                    <li><NavLink to="/create-user">Create user</NavLink></li>
                    <li><NavLink to="/users">Users</NavLink></li>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}
export default Navbar
