/* const {suma, resta, div , multi } = require("./calc.js");

//let suma = calc.suma;
console.log(suma(3, 5));
console.log(resta(2,6));
console.log(multi(23,6));
console.log(div(13,0));
//console.log(mod()); */

/* const os = require('os')

//nombre de usuario local
console.log(os.hostname());
//tipo de sistema
console.log(os.type());

console.log(os.platform());

//console.log(os.cpus());

//console.log(os.arch());
console.log(os.freemem());
console.log(os.totalmem()); */

/* const fs = require("fs");


fs.writeFile('./mensaje.txt', "NODE es asincrono", err =>{
    if(err){
        console.log(err);
    }
    console.log("Éxito");
})

console.log("Esto va a ocurrir primero"); */

const http= require('http');

const manejadorServidor = (req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html"})
    res.write("<h1>Bienvenido/a al servidor</h1>");
    res.end();
}

const PORT = 4000
const app = http.createServer(manejadorServidor)

app.listen(PORT, ()=>{
    console.log(`server on port ${PORT}`);
})
