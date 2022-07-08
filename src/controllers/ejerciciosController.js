const exercisesController = {
    listado:(req, res) => {
        res.render('ejercicios', {listadoDeEjercicios: ejercicios});
    },
todo: (req, res)=> {
   res.sendFile(__dirname + '/organizador.html');
}
};

module.exports = exercisesController;