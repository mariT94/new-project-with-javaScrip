// square measure code 
console.group("square");

// const sideSquare = 5; 
// console.log ("square size is " + sideSquare + " cm");

function perimeterSquare( sides){
    return sideSquare * 4;
}

// console.log("perimeter is " + perimeter + " cm");

// const area = sideSquare * sideSquare; 
// console.log("area is " + area + " cm^2")
// en este cambio se genera la interaccion entre la funcion y el usuario, permitiendo obtener valores y ase retornar  la funcion 

function areaSquare (sideSquare) {
    return sideSquare * sideSquare;
}

console.groupEnd();

// triangle measure code 

console.group ("triangle");

// const sideTriangle1 = 6; 
// const sideTriangle2 = 5;
// const baseTriangle = 8;
// const heightTriangle = 5.5;


// console.log (`those are the triangle measures 
// ${sideTriangle1} cm 
// ${sideTriangle2} cm`);
 
// console.log ("the triangle height is " + heightTriangle + " cm");


// const areaTriangle = (baseTriangle * heightTriangle 
// ) / 2; 
// console.log ("the triangle area is " + areaTriangle + " cm");


function areaTriangle (heightTriangle, baseTriangle){
    return (heightTriangle *baseTriangle)/2;
}

 function perimeterTriangle (sideTriangle1, sideTriangle2, baseTriangle){
     return sideTriangle1 + sideTriangle2 + baseTriangle;
 }

//  console.log ("the triangle perimeter is " + perimeterTriangle + " cm")


console.groupEnd();

//circle

console.group("circle"); 

// const circleRadius = 10; 
const PI = Math.PI;
// const diameterCircle = (2 * circleRadius); 

// console.log ("the diameter of the circle is " + diameterCircle + " cm");

function diameterCircle( circleRadius) {
    return circleRadius * 2;
}

function areaCircle (circleRadius){
   return (circleRadius * circleRadius) * PI; 
}
// const areaCircle = PI * (circleRadius * circleRadius);
// console.log ("the area of circle is " + areaCircle + " cm");


// const perimeterCircle  = (2 * PI * circleRadius); 
// console.log ("the perimeter of the circle is" + perimeterCircle + " cm");

function perimeterCircle (circleRadius) {
    const diameter = diameterCircle(circleRadius);
    return diameter * PI; 
}


