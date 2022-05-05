const alimentosController = {
    listado:(req, res) => {
        res.sendFile(path.join(__dirname, './views/alimentos.html'));
    },
    detalle: function(req, res) {
res.send("Tu alimento del día es " + 
req.params.idAlimento)
    }
};

module.exports = alimentosController;