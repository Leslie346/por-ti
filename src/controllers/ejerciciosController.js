const exercisesController = {
    listado:(req, res) => {
        res.render('ejercicios', {listadoDeEjercicios: ejercicios});
    }
};

module.exports = exercisesController;