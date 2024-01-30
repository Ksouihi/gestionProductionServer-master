const db = require("../models");
const sub_family = db.sub_family;
const Op = db.Sequelize.Op;


exports.createSub_family = (req, res) => {
    console.log(req.body)
    SubFamille.create({
        id: req.body.id.sub_family,
        name_sub_family: req.body.SubFamille.name_family,
        id_family:req.body.id_family
    })
        .then(user => {
            res.send({ message: "sub family was registered  successfully" });
        })
        .catch(err => {
            res.status(500).send({ message: err.message });
        });
};



exports.getAddSubFamly = async (req, res) => {
    const AddSubFamly = await AddSubFamly.findAll({include: [db.sub_family, db.name_family,db.id, db.id_family]});
    res.send({AddSubFamly})
}

exports.getSub_family = async (req, res) => {
    const SubFamille = await SubFamille.findByPk(req.params.id, {include: [db.sub_family, db.name_family,db.id, db.id_family]});
    res.send({sub_family})
}

exports.updateSub_family = (req, res) => {
    Sub_family.update({
        
        id: req.body.id.sub_family,
        name_sub_family: req.body.SubFamille.name_family,
        id_family:req.body.id_family
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
