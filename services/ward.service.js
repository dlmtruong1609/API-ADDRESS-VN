const ward = require("../models/ward.model");
exports.findAll = (req, res) => {
    ward.find()
    .then(wards => {
        res.status(200).send(wards);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};

exports.findAllByDistrict = (req, res) => {
    ward.find({'huyen_id': req.params.districtId})
    .then(districts => {
        res.status(200).send(districts);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Something wrong while retrieving products."
        });
    });
};