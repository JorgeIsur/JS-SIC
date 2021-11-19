var buffer1 = Buffer.alloc(20);
var buffer2 = Buffer.from('Hola este es un buffer');
console.log("Este es un buffer vacio:\n");
console.log(buffer1);
console.log("Este es el buffer creado por la cadena de caracteres:\n");
console.log(buffer2);
console.log("Convertido nuevamente a cadena:\n");
console.log(buffer2.toString());
