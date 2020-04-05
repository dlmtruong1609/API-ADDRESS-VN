const district = require("../models/district.model");
exports.findAll = (req, res) => {
    district.find()
    .then(districts => {
        res.status(200).send(districts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};

exports.findAllByCity = (req, res) => {
    district.find({'tinh_id': req.params.cityId})
    .then(districts => {
        res.status(200).send(districts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};