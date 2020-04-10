import axios from 'axios'

module.exports ={
    getOrder: async () =>{
        const order = await axios.get('/api/order').catch(err => console.error(err))
        console.log(order)
        return order
    },
    getAllShoes: async () =>{
        const shoes = await axios.get('/api/shoes').catch(err => console.error(err))
        console.log(shoes)
        return shoes
    },
    login: async () =>{
        const user = await axios.post('/auth/user', {email: 'test5', password:'a'})
        return user
    }
}