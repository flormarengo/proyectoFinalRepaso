
window.onload=function(){

	document.getElementById("formulario").onsubmit=function(e){
		e.preventDefault();
	}
function coders(nombre,apellido,correo,contraseña){
  this.nombre = nombre;
  this.apellido = apellido;
  this.correo = correo;
  this.contraseña = contraseña;
}
 var datos = [];


document.getElementById("botón").addEventListener("click",function(){
var nombre = document.getElementById("nombre").value;
var apellido = document.getElementById("apellido").value;
var correo = document.getElementById("correo").value;
var contraseña = document.getElementById("contraseña").value;


if(nombre.length!=0 && apellido.length!=0 && correo.length!=0 && contraseña.length!=0){
datos.push(new coders(nombre,apellido,correo,contraseña));
crearDivs();
document.getElementById("formulario").reset();
}else{
  document.getElementById("span").innerHTML = "Alerta:Todos los campos son obligatorios";
}

})
//probando validar con el addEventListener

var formulario = document.getElementById("formulario");
var botón = document.getElementById("botón")


var validarNombre = function(){
	if(formulario.nombre.value == "hola"){
		document.getElementById("span_nombre").innerHTML = "ww";
	}else{
	};

var validar = function(){
	validarNombre();
};

formulario.addEventListener("submit",validar);

//
function crearDivs(){
 //crear un div
 datos.forEach(function(e){
 var contenedor = document.getElementById("contenedor");

var div_padre = document.createElement("div");
var punto1 = document.createElement("li");

div_padre.appendChild(punto1);
punto1.innerHTML = "Nombre: " + e.nombre;

var punto2 = document.createElement("li");
div_padre.appendChild(punto2);
punto2.innerHTML = "Apellido: " + e.apellido;

var punto3 = document.createElement("li");
div_padre.appendChild(punto3);
punto3.innerHTML = "Correo: " + e.correo;

var punto4 = document.createElement("li");
div_padre.appendChild(punto4);
punto4.innerHTML = "Contraseña: " + e.contraseña;

contenedor.appendChild(div_padre);

})
}
}





 //
