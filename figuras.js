var lado;
var base;
var altura;
var opcion;
var resultado;
const pi=3.1416;
opcion =parseInt(prompt("Seleccione el tipo de figura al que le quiere encontrar el area 1.Cuadrado 2.Triangulo 3. Circulo"));

switch (opcion) {
    case 1:
        lado=parseInt(prompt("Ingrese el valor del lado en cm"));
        resultado = lado*lado;
        alert("El area del cuadrado es igual a " +resultado + "centimetros cuadrados");
        break;
    case 2:
            base=parseInt(prompt("Ingrese el valor de la base en cm"))
            altura=parseInt(prompt("Ingrese el valor de la altura en cm"));
            resultado = (base*altura)/2;
            alert("El area del Triangulo es igual a "+resultado + "centimetros cuadrados");
            break;
    case 3:
           radio = parseInt(prompt("Ingrese el valor del radio"));
           resultado = pi*Math.pow(radio,2);

    default:
        alert("La opcion escogida no es valida");
        break;
}
