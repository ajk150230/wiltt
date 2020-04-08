module.exports = {
  getAllShoes: function (req, res) {
    const db = req.app.get("db");
      db.shoes
        .getAllShoes()
        .then((data) => {
          res.status(200).send(data);
        })
        .catch((error) => {
          console.error(error);
          res.sendStatus(500);
        });
  },
};
