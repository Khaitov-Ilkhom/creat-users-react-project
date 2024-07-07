import React, {useContext, useState} from 'react'
import {IoIosEye, IoIosEyeOff} from "react-icons/io";
import {RiEdit2Fill} from "react-icons/ri";
import {MdDelete} from "react-icons/md";
import AppContext from "../../contex/store/index.jsx";
import {useNavigate} from "react-router-dom";

const UserCards = ({user}) => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false)
    const [state, dispatch] = useContext(AppContext)

    const deletedUser = (user) => {
        const deletedUser = confirm("Are you sure you want to delete it?")
        if (deletedUser) {
            dispatch({type: "Delete-User", user})
        }
    }
    const editUser = (user) => {
        dispatch({type: "Edit-User", user})
        navigate("/update-user")
    }

    return (
        <div className="user-card">
            <div className="avatar">
                <img src={user.image} alt="Avatar"/>
            </div>
            <div className="title">
                <h3><b>Username:</b> {user.username}</h3>
                <p><b>Age:</b> {user.age}</p>
                <p><b>Email:</b> <a href={`mailto: ${user.email}`}> {user.email}</a></p>
                <p className="password"><b>Password: </b>
                    {
                        showPassword ? <span>{user.password}</span> :
                            <span>{user.password.split("").fill("*")}</span>

                    }
                    <button onClick={() => setShowPassword(!showPassword)}>
                        {
                            showPassword ? <IoIosEyeOff/> : <IoIosEye/>
                        }
                    </button>
                </p>
            </div>
            <div className="btns">
                <button onClick={() => editUser(user)} className="edit"><RiEdit2Fill/></button>
                <button onClick={() => deletedUser(user)} className="delete"><MdDelete/></button>
            </div>
        </div>
    )
}
export default UserCards
