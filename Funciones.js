function Mensaje(){
    console.log("Hola!");
}

function Sumar (a,b,c){
    return a+b+c;
}

var Res = Sumar (2,5,9);
console.log(Res);

//funciones recursivas

var factorial = function(n){
   
    if (n != 0 && n != 1)
    {
        return (n * factorial (n-1));
    }
    else {
        return 1;
    }

}
console.log(factorial(5));

var d = new Date;
var x;
x = String(d);
console.log(x);

