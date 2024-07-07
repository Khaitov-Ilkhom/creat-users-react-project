import "./CreateUsers.css"
import Container from "../../components/container/Container.jsx";
import {useContext, useState} from "react";
import AppContext from "../../contex/store/index.jsx";
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {v4 as uuidv4} from 'uuid';
import avatar from "../../images/avatar.png"


const CreateUsers = () => {
    const [state, dispatch] = useContext(AppContext)
    const [user, setUser] = useState({
        username: '',
        age: '',
        email: '',
        password: '',
        image: avatar
    })

    const createNewUser = (e) => {
        e.preventDefault()

        if (state.users.some(userIn => userIn.email === user.email)) {
            toast.error("User has already been created!")
        }

        if (user.username.trim().length > 0 && user.age > 0 && user.password.trim().length >= 4) {
            dispatch({type: "Create-New-User", user: {...user, id: uuidv4()}})
            toast.success("Created User!")
            setUser({
                username: '',
                age: '',
                email: '',
                password: '',
            })
        } else {
            toast.error("Something was entered wrongly!")
        }
    }
    return (
        <Container>
            <div className='users'>
                <form className="form" onSubmit={createNewUser}>
                    <h2>Create User</h2>
                    <input type="text" placeholder="Username" value={user.username}
                           onChange={(e) => setUser({...user, username: e.target.value})}/>
                    <input type="number" placeholder="Age" value={user.age}
                           onChange={(e) => setUser({...user, age: e.target.value})} required/>
                    <input type="text" placeholder="Email" value={user.email}
                           onChange={(e) => setUser({...user, email: e.target.value})} required/>
                    <input type="text" placeholder="Password" value={user.password}
                           onChange={(e) => setUser({...user, password: e.target.value})} required/>
                    <button type="submit">Create user</button>
                </form>
            </div>
        </Container>
    )
}
export default CreateUsers
