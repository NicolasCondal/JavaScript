console.log('asddsa');

//Uso de variables
/*var nombre = 'Grover';
console.log(nombre);
console.log(typeof(nombre));

var edad = 34;
console.log(edad);
console.log(typeof(edad));

edad = 'Cinco';
console.log(edad);
console.log(typeof(edad));

var sueldo = 1900.99;
console.log(sueldo);
console.log(typeof(sueldo));

var tieneTrabajo = false;
console.log(tieneTrabajo);
console.log(typeof(tieneTrabajo));

var puestoDeTrabajo;
console.log(puestoDeTrabajo);

puestoDeTrabajo = null;
console.log(puestoDeTrabajo);
**********************************/

/*************
 * Operadores matemáticos +, -, *, /
 */

 /*var edadAna, edadMaria, diferenciaEdad;
 var sumaEdades, yearAna, yearMaria, yearActual;

 edadAna = 34;
 edadMaria = 28;
 yearActual = 2019;

diferenciaEdad = edadAna - edadMaria;
sumaEdades = edadAna + edadMaria;

yearAna = yearActual - edadAna;
yearMaria = yearActual - edadMaria;

console.log(diferenciaEdad);
console.log(sumaEdades);
console.log('Año en que nació Ana ' + yearAna);
console.log('Año en que nació María ' + yearMaria);
console.log(yearActual * 5);
console.log(yearActual / 2)

 
   Operadores Lógicos, unarios y de asignación
 
//Lógicos < > <= >= ==
var edadAna, edadMaria, diferenciaEdad;
edadAna = 34;
edadMaria = 28;

var mayorAna = !(edadAna == edadMaria);
console.log(mayorAna);

//Unarios, ++Incremento, --Decremento
//edadAna++;
console.log(++edadAna);
console.log(edadAna);

//Asignación, +=, -=, *=, /=, %=
var a = 12;
var b = 5;

var c = a % 5; //Residuo o resto de una división
console.log(c);
a += b;
console.log(a);
*/

var i = 10;

do{

    console.log(i);
    i++;

}while (i <= 10);

var nombres = ['Grover', 'Carlos', 'Ana', 'Luisa'];
var vegetales = new Array('Tomate', 'Lechuga', 'Zanahoria');

// console.log(nombres[3]);
// console.log(vegetales[1]);

// nombres[0] = 'José';
// vegetales[2] = 'Nabo';

// console.log(nombres[0]);
// console.log(vegetales[2]);

// console.log(nombres.length);
// for(var i = 0; i <= nombres.length - 1; i++){
//     console.log(nombres[i]);
// }

// vegetales.forEach(function(elemento, indice){
//     console.log(elemento, indice);
// })

console.log(nombres);
nombres.push('Pedro');
console.log(nombres);
nombres.unshift('Lili');
console.log(nombres);
nombres.pop();
console.log(nombres);
nombres.shift();
console.log(nombres);

var pos = nombres.indexOf('Carlos');
console.log(pos);

nombres.splice(1, 2);
console.log(nombres);