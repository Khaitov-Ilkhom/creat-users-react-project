import "./Home.css"
import Navbar from "../navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";

const Home = () => {
    return (
        <div className="home">
            <Navbar/>
            <div className="home-content">
                <Outlet/>
            </div>
        </div>
    )
}
export default Home
