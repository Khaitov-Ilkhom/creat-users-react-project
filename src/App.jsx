import './App.css'
import {Route, Routes} from "react-router-dom";
import Users from "./routes/users/Users.jsx";
import UpdatedUsers from "./routes/update-user/UpdatedUsers.jsx";
import CreateUsers from "./routes/create-user/CreateUsers.jsx";
import Home from "./components/home/Home.jsx";

function App() {

  return (
    <div className="wrapper">
      <Routes>
        <Route path="" element={<Home/>}>
            <Route path="create-user" element={<CreateUsers/>}/>
            <Route path="update-user" element={<UpdatedUsers/>}/>
            <Route path="users" element={<Users/>}/>
        </Route>

      </Routes>
    </div>
  )
}

export default App
