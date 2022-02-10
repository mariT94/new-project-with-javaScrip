// square measure code 
console.group("square");

// const sideSquare = 5; 
// console.log ("square size is " + sideSquare + " cm");

function perimeterSquare(sideSquare){
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

//insert this with HTML 

function calculatePerimeterSquare(){
    const input = document.getElementById ("squareSide");
    const value = input.value;

    const perimeter = perimeterSquare(value); 
    alert (perimeter); 
}

function calculateAreaSquare (){
    const input = document.getElementById ('squareSide');
    const value = input.value; 

    const area = areaSquare(value); 
    alert (area);
}


//isosceles triangle
console.group ("triangleIsoceles");

function heightTriangle(side1, side2, side3)
{
 const height = (Math.sqrt((side1 * side2) - ((side3*side3)/4)));
 return  height
}

function calculateHeightTriangle ()
{
if (inputSide1 === inputSide2){
    var inputSide1 = document.getElementById("side1")
    var side1Value =  inputSide1.value; 

    var inputSide2 = document.getElementById("side2")
    var side2Value = inputSide2.value; 

    var inputSide3 = document.getElementById("side3")
    var side3Value = inputSide3.value; 
    

    const heigthTrianglheigthTriangleisosceleseisosceles =  heightTriangle(side1Value, side2Value, side3Value);
    alert (heigthTrianglheigthTriangleisosceleseisosceles)
}
else (inputSide1 !== inputSide2)
{
    console.error('try again')
}
}

// function calculateHeightTriangle (){
  

//     const height = heightTriangle
//     alert (height);
// }




