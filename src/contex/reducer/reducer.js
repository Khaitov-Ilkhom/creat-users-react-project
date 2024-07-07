import {saveDataLocalStorage} from "../../helpers/index.js";

const initialState = {
    users: JSON.parse(localStorage.getItem("users")) || [],
    editUser: null
}

const reducer = (state, action) => {
    switch (action.type) {
        case "Create-New-User": {
            const userExist = state.users.findIndex(user => user.email === action.user.email)
            if (userExist < 0) {
                saveDataLocalStorage("users", [...state.users, action.user])
                return {
                    ...state,
                    users: [...state.users, action.user]
                }
            }
        }
        case "Delete-User": {
            const deleteUser = state.users.filter(user => user.id !== action.user.id)
            saveDataLocalStorage("users", deleteUser)
            return {...state, users: deleteUser}
        }
        case "Edit-User": {
            return {
                ...state,
                editUser: action.user
            }
        }
        case "Update-User": {
            const updateUser = state.users.map(user => user.email === action.editUser.email ? {...user, ...action.editUser} : user)
            saveDataLocalStorage("users", updateUser)
            return {
                ...state,
                users: updateUser,
                editUser: null
            }
        }
        case "Sorted-User": {
            return {
                ...state,
                users: action.sortedUsers
            }
        }
        default: return state
    }
}

export default reducer
export {initialState}
