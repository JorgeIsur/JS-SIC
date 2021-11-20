const fs = require('fs');
fs.writeFileSync('Archivo.txt',"Hola este es un archivo creado de manera sincrónica.");
fs.writeFile('Archivo2.txt',"Archivo creado de manera asíncronica.",(err)=>{
  if (err) {
    console.log(err);
  }
  else{

  }
});
let informacion = fs.readFileSync('Archivo.txt','utf8');
console.log(informacion);
fs.unlinkSync('Archivo.txt');
