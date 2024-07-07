import "./UpdatedUsers.css"
import Container from "../../components/container/Container.jsx";
import {useNavigate} from "react-router-dom";
import {useContext, useEffect, useState} from "react";
import AppContext from "../../contex/store/index.jsx";
import {toast} from "react-toastify";
import {v4 as uuidv4} from "uuid";

const UpdatedUsers = () => {
    const navigate = useNavigate()
    const [state, dispatch] = useContext(AppContext)

    useEffect(() => {
        if (!state.editUser) {
            navigate("/users")
        }
    }, [state]);

    const [user, setUser] = useState({
        username: state.editUser?.username,
        age: state.editUser?.age,
        email: state.editUser?.email,
        password: state.editUser?.password,
    })

    const updateUser = (e) => {
        e.preventDefault()

        dispatch({type: "Update-User", editUser: user})
    }

    return (
        <Container>
            <div className='users'>
                <form className="form" onSubmit={updateUser}>
                    <h2>Create User</h2>
                    <input type="text" placeholder="Username" value={user.username}
                           onChange={(e) => setUser({...user, username: e.target.value})}/>
                    <input type="number" placeholder="Age" value={user.age}
                           onChange={(e) => setUser({...user, age: e.target.value})} required/>
                    <input type="text" placeholder="Email" value={user.email}
                           onChange={(e) => setUser({...user, email: e.target.value})} required/>
                    <input type="text" placeholder="Password" value={user.password}
                           onChange={(e) => setUser({...user, password: e.target.value})} required/>
                    <button type="submit">Update User</button>
                </form>
            </div>
        </Container>
    )
}
export default UpdatedUsers
