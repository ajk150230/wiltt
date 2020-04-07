module.exports={
    getAllShoes: function(req, res){
        const db = req.app.get('db')
        db.shoes.getAllShoes()
            .then((shoes) =>{
                console.log(shoes)
                res.status(200).send(shoes)
            })
            .catch(error=>{
                console.error(error)
                res.sendStatus(500)
            })
    }
}