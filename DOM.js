console.log(document.title);

document.title = 'Prueba Js';
 
var h1 = document.getElementsByTagName('h1');
h1[0].innerHTML = 'prueba';

var boton = document.getElementById('boton');

boton.addEventListener('click', Mensaje);

function Mensaje (){
    alert("ahr");
}

