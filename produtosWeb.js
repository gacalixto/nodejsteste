var http = require("http");//Importa bibliotecas

var server = http.createServer(function(req,res){
    res.end("<html><body><h1>Listando Produtos:</h1></body</html>")
});
server.listen(3000);
console.log("servidor rodando!");