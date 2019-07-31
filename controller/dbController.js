const db = require("./../models");

module.exports = {
  newUser: function(req, res) {
    console.log(req.body)
    db.User
      .create(req.body)
      .then(info => {
        console.log(info);
        res.json(info)
      })
  }
};