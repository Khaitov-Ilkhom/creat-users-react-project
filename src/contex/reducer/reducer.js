const initialState = JSON.parse(localStorage.getItem("users")) || []

const reducer = (state, action) => {
    console.log(action)
}

export default reducer
export {initialState}
