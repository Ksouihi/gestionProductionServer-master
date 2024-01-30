const db = require("../models");
const Family = db.family;
const Op = db.Sequelize.Op;


exports.createFamily = (req, res) => {
    console.log(req.body)
    Family.create({
        name_family: req.body.Famille.name_family
    })
        .then(user => {
            res.send({ message: "family was registered  successfully" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};



exports.getFamilies = async (req, res) => {
    const Famille = await Family.findAll({include: [db.family, db.name_family]});
    res.send({Famille})
}

exports.getFamily = async (req, res) => {
    const family = await family.findByPk(req.params.id, {include: [db.family, db.name_family]});
    res.send({famille})
}

exports.updatefamily = (req, res) => {
    Family.update({
        
        name_family: req.body.Famille.name_family
    }, {
        where: { id: req.params.id}
    })
        .then(user => {
            res.send({ message: "famille was updated successfully!" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};

