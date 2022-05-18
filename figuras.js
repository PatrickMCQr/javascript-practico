// Código del cuadrado
console.group("Cuadrado")
//const ladoCuadrado = 5;
//console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
} 

perimetroCuadrado()
//console.log("El prímetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
} 
//console.log("El área del cuadrado es: " + areaCuadrado + " cm*2");
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
//const ladoTriangulo1 = 6;
//const ladoTriangulo2 = 6
//const baseTriangulo = 4;
//const alturaTriangulo = 5.5;
//console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
//console.log("La altura del triángulo es de: " + alturaTriangulo);

function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 
//console.log("El prímetro del triangulo es: " + perimetroTriangulo + " cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 
//console.log("El área del triángulo es: " + areaTriangulo + "cm*2");
console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
//const radioCirculo = 4;
//console.log("El radio del círculo es: " + radioCirculo);

//Diámetro
function diamteroCirculo(radio) {
    return radio * 2;
} 
//console.log("El diámetro del círculo es: " + diamteroCirculo);

//PI
const PI = Math.PI;
//console.log("El Pi es: "+ PI);

//Circunferencia
function perimetroCirculo(radio) {
    const diamtero = diamteroCirculo(radio);
    return diamtero * PI;
} 
//console.log("El perímetro del círculo es: "+ perimetroCirculo);

//Área
function areaCirculo(radio) {
    return (radio * radio) * PI
} 
//console.log("El área del círculo es: " + areaCirculo);

console.groupEnd();

// Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado"); //Obtenemos la etiqueta del HTML con ese ID
    const value = input.value; //Obtenemos el valor de los usuarios del HTML

    const perimetro = perimetroCuadrado(value); //Llamamos a la funcion para calcular el perimetro
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado"); //Obtenemos la etiqueta del HTML con ese ID
    const value = input.value; //Obtenemos el valor de los usuarios del HTML

    const area = areaCuadrado(value); //Llamamos a la funcion para calcular el perimetro
    alert(area);
}