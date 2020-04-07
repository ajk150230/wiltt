import axios from 'axios'
const initialState = {
    shoes: []
}

const GETALLSHOES = 'GETALLSHOES'

export function getAllShoes(){
    return{
        type: GETALLSHOES,
        payload: axios.get('/api/shoes')
    }
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GETALLSHOES + '_FULFILLED':
            console.log(action.payload)
            return {
                ...state,
                shoes: action.payload.data
            }
        case GETALLSHOES + '_PENDING':
            return{
                ...state,
            }
        default:
            return state;
    }

}