import axios from 'axios'
const initialState = {
    user_id: '',
    email: "",
    firstname: "",
    lastname: "",
    address: "",
    cart:[],
    total:0
}
const GET_SESSION = "GET_SESSION"


export function getSession() {
    return {
        type: GET_SESSION,
        payload: axios.get('/auth/user')
    }
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_SESSION + '_FULFILLED':
            console.log(action.payload)
            return {
                ...state,
                user_id: action.payload.data.user_id,
                email: action.payload.data.email,
                firstname: action.payload.data.first,
                lastname: action.payload.data.last,
                address: action.payload.data.address,
                cart: action.payload.data.cart,
                total: action.payload.data.total
            }
        default:
            return state;
    }
}