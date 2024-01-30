const controller = require("../controllers/subfamille.controller");

module.exports = function(app) {
    app.post(
        "/api/famille/add",
        controller.createfamille
    );

    app.get("/api/famille", controller.getAddSubFamly)
   app.get("/api/famille/:id", controller.getSub_family)
   app.post("/api/famille/:id", controller.updateSub_family)

};