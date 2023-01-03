function datos(){
    var nombre = document.getElementById ("nombres"). value
    console.log("Hola " + nombre);

var apellido = document.getElementById("apellidos"). value
 console.log("Tu apellido es " + apellido);

var correo = document.getElementById ("email").value
console.log("Tu correo es " +correo);

var nacimiento = document.getElementById ("fecha-nacimiento").value
console.log("Naciste el " + nacimiento + " es una fecha especial");

var femenino = document.getElementById ("f").ckeckbox
console.log(femenino);

var masculino= document.getElementById ("m").chekbox
console.log(masculino);

var estatura = document.getElementById ("estatura").value
console.log("Tu estatura es de " + estatura + "mt");

var peso = document.getElementById ("peso").value
console.log("Pesas " + peso +"Kg");

var deporte = document.getElementById ("deporte").value
console.log(deporte);

//var mensaje =
//console.log(mensaje)

var resultado = peso/estatura**2;

var sobrepeso = resultado <= 30;

console.log(sobrepeso);

console.log(resultado);


var Letras= "Jamely";
var cantidad_de_texto = Letras.length; 

console.log(cantidad_de_texto);

}
