var path =require ('path');

module.exports.index = function(req,res){
    //Rendew ile views klasörüne bakılır. 2. parametre ise json dosyasıdır.
    var name = ['Ahmet','Ali','Ayşe','Ayten'];
    res.render('index', {
        message : "Bu bir test mesajıdır.",
        name : name
    });
}
module.exports.login = function(req,res){
    res.render('login');
}

module.exports.signin = function(req,res){
    res.render('signin');
}