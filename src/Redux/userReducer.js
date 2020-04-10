import axios from "axios";
const initialState = {
  user_id: "",
  email: "",
  firstname: "",
  lastname: "",
  address: "",
  cart: [],
  total: 0,
};
const GET_SESSION = "GET_SESSION";
const EDITADDRESS = "EDITADDRESS";
const CHECKOUT = "CHECKOUT";
const DELETEORDER = "DELETEORDER"

export function getSession() {
  return {
    type: GET_SESSION,
    payload: axios.get("/auth/user"),
  };
}
export function editAddress(address) {
  return {
    type: EDITADDRESS,
    payload: axios.put("/auth/user", { address }),
  };
}
export function checkOut(token, order) {
  return {
    type: checkOut,
    payload: axios.post("/api/stripe", { token, order }),
  };
}
export function deleteOrder(orders_id){
    console.log(orders_id)
    return{
      type: DELETEORDER,
      payload: axios.delete(`/api/order/${orders_id}`)
    }
  }
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_SESSION + "_FULFILLED":
      console.log(action.payload);
      return {
        ...state,
        user_id: action.payload.data.user_id,
        email: action.payload.data.email,
        firstname: action.payload.data.first,
        lastname: action.payload.data.last,
        address: action.payload.data.address,
        cart: action.payload.data.cart,
        total: action.payload.data.total,
      };
    case EDITADDRESS + "_FULFILLED":
      return {
        ...state,
        address: action.payload.data.address,
      };
    case CHECKOUT + "_FULLFILLED":
      return {
        ...state,
        cart: action.payload.data.cart,
        total: action.payload.data.total,
      };
    case DELETEORDER + "_FULFILLED":
      return {
        ...state,
      };
    default:
      return state;
  }
}
