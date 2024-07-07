import "./Users.css"
import Container from "../../components/container/Container.jsx";
import {useContext} from "react";
import AppContext from "../../contex/store/index.jsx";
import UserCards from "../../components/user-cards/UserCards.jsx";


const Users = () => {
    const [state, dispatch] = useContext(AppContext)
    const sortUsers = () => {
        dispatch({type: "Sort-User"})
        dispatch({type: "Re-Sort-User"})
    }

    return (
        <Container>
            <button onClick={sortUsers} type="button">sort users</button>
            <div className="user-cards">
                {
                    state.users.map(user =>
                        <UserCards key={user.id} user={user}/>
                    )
                }
            </div>
        </Container>
    )
}
export default Users
