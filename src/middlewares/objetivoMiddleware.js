function objetivoMiddleware(req, res, next) {
   
    res.locals.isMental = false;
    res.locals.isFisica = false;
    res.locals.isSocial = false;
    
    if(req.session.userLogged){
        if(req.session.userLogged.objetivo !== 'saludsocial' && req.session.userLogged.objetivo != 'saludfisica'){
            res.locals.isMental = true;
            //console.log('No es admin');
            console.log(req.session.userLogged.objetivo);
        }else if(eq.session.userLogged.objetivo !== 'saludmental' && req.session.userLogged.objetivo != 'saludfisica'){
            res.locals.isFisica = true;
            //console.log('Es admin');
            console.log(req.session.userLogged.objetivo);
        }else{
            res.locals.isSocial = true;
            console.log(req.session.userLogged.objetivo);
        }
    }
    next();
}

module.exports = objetivoMiddleware;