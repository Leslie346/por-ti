const exercisesController = {
    listado:(req, res) => {
        res.sendFile(path.join(__dirname, './views/ejercicios.html'));
    },
    detalle: function(req, res) {
res.send("Bienvenidos al detalle del producto " + 
req.params.idEjercicio)
    }
};

module.exports = exercisesController