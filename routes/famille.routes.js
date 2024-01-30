const controller = require("../controllers/famille.controller");

module.exports = function(app) {
    app.post(
        "/api/famille",
        controller.createfamille
    );

    app.get("/api/famille", controller.getFamilies)
   app.get("/api/famille/:id", controller.getFamille)
   app.post("/api/famille/:id", controller.updateFamille)
   app.get("/api/familleRelations", controller.getFamilleRelations)

};