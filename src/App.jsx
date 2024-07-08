import './App.css'
import {Route, Routes} from "react-router-dom";
import Users from "./routes/users/Users.jsx";
import UpdatedUsers from "./routes/update-user/UpdatedUsers.jsx";
import CreateUsers from "./routes/create-user/CreateUsers.jsx";
import Navbar from "./components/navbar/Navbar.jsx";
import {ToastContainer} from "react-toastify";

function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route element={<Navbar/>}>
            <Route path="/" element={<CreateUsers/>}/>
            <Route path="update-user" element={<UpdatedUsers/>}/>
            <Route path="users" element={<Users/>}/>
        </Route>
      </Routes>
      <ToastContainer/>
    </div>
  )
}

export default App
