function param(p){
    var index = process.argv.indexOf(p);
    return process.argv[index+1];    
}
var nombre = param('--nombre');
var edad = param('--edad');
console.log("Tu nombre es:"+nombre+" "+"y tu edad es:"+edad);