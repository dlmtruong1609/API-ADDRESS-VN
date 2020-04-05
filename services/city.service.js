const city = require("../models/city.model");
exports.findAll = (req, res) => {
    city.find()
    .then(citys => {
        res.status(200).send(citys);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};