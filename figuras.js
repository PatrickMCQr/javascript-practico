// Código del cuadrado
console.group("Cuadrado")
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El prímetro del cuadrado es: " + perimetroCuadrado + " cm");

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("El área del cuadrado es: " + areaCuadrado + " cm*2");
console.groupEnd();

//Código del triángulo
console.group("Triángulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm");
console.log("La altura del triángulo es de: " + alturaTriangulo);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log("El prímetro del triangulo es: " + perimetroTriangulo + " cm");

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm*2");
console.groupEnd();

//Código del círculo
console.group("Círculos");

//Radio
const radioCirculo = 4;
console.log("El radio del círculo es: " + radioCirculo);

//Diámetro
const diamteroCirculo = radioCirculo * 2;
console.log("El diámetro del círculo es: " + diamteroCirculo);

//PI
const PI = Math.PI;
console.log("El Pi es: "+ PI);

//Circunferencia
const perimetroCirculo = diamteroCirculo * PI;
console.log("El perímetro del círculo es: "+ perimetroCirculo);

//Área
const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo);

console.groupEnd();