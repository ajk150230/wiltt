import axios from "axios";
const initialState = {
  shoes: [],
  cart: [],
  total: 0,
};

const GETALLSHOES = "GETALLSHOES";
const ADDTOCART = "ADDTOCART";
const GETSESSION = "GETSESSION";

export function getAllShoes() {
  return {
    type: GETALLSHOES,
    payload: axios.get("/api/shoes"),
  };
}

export function addToCart(shoes_id) {
  return {
    type: ADDTOCART,
    payload: axios.post(`/api/shoes/${shoes_id}`),
  };
}
export function getSession() {
    console.log('oof?')
  return {
    type: GETSESSION,
    payload: axios.get("/auth/user"),
  };
}
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GETALLSHOES + "_FULFILLED":
      return {
        ...state,
        shoes: action.payload.data,
      };
    case GETALLSHOES + "_PENDING":
      return {
        ...state,
      };
    case GETSESSION + "_FULFILLED":
        console.log('oof')
      return {
          ...state,
        cart: action.payload.data.cart,
        total: action.payload.data.total,
      };
    case ADDTOCART + "_FULFILLED":
      return {
        ...state,
        cart: action.payload.data.cart,
        total: action.payload.data.total,
      };
    default:
      return state;
  }
}
