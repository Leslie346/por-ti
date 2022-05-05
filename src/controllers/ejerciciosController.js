const exercisesController = {
    listado:(req, res) => {
        res.render('ejercicios', {listadoDeEjercicios: ejercicios});
    },
    detalle: function(req, res) {
res.send("Bienvenidos al detalle del producto " + 
req.params.idEjercicio)
    }
};

module.exports = exercisesController;