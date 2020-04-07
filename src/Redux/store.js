import { createStore, combineReducers, applyMiddleware } from "redux"
import promiseMiddleware from 'redux-promise-middleware'
import userReducer from "./userReducer"
import shoesReducer from "./shoesReducer"

const rootReducer = combineReducers({
    user: userReducer,
    shoes: shoesReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware))