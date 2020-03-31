const bcrypt = require('bcryptjs')

module.exports = {
    register: function (req, res){
        const {email, password, first, last, address} = req.body
        const db = req.app.get('db')
        console.log(req.body)
        bcrypt.hash(password, 12).then(hash => {
            db.auth.register(email, first, last, address, hash)
                .then((user) =>{
                    const currentUser = user[0]
                    console.log(user)
                    req.session.currentUser = {
                        user_id: currentUser.user_id,
                        email: currentUser.email,
                        first: currentUser.first,
                        last: currentUser.last,
                        address: currentUser.address
                    }
                    res.status(200).json(
                        req.session.currentUser
                    )
                })
                .catch(err =>{
                    console.log(err)
                    res.status(500).json(err)
                })
        })
        .catch(err =>{
            console.error(err)
            res.status(500).json(err)
        })
    },
    login: async(req, res) => {
        const {email, password} = req.body
        const loggedIn = await req.app.get('db').get_user(email)
        const user = loggedIn[0]
        if(loggedIn.length===0){
            return res.status(401).send('This user does not exist')
        }
        const cleared = await bcrypt.compare(password, user.password)
        if(!cleared){
            return res.status(403).json('Incorrect password')
        }
        console.log(user)
        req.session.currentUser = {
            user_id: user.user_id,
            email: user.email,
            first: user.first,
            last: user.last,
            address: user.address
        }
        return res.status(200).json(req.session.currentUser)
    },
    getSession: async (req, res) => {
        if(req.session.currentUser){
        res.status(200).json(req.session.currentUser)
        }
    },
    logout: (req, res) => {
        req.session.destroy();
        return res.sendStatus(200)
    }
}