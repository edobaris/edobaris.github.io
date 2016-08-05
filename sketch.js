//5 08 16 Viernes
//Taller de programacion

//DECLARAR variable

//para darle valor a la variable
//esto se llama ASIGNAR

var diametro;
diametro = 10;

//variable local y
//modo rapido de DECLARAR
//y asignarle valor inmediatamente
//asignar otro valor

//hay dos sabores de variables
//existen variables locales y globales
//GLOBALES: DECLARADAS FUERA DE FUNCION
//LOCALES: DECLARADAS DENTRO DE LAFUNCION

//globales: se pueden usar en cualquier parte
//locales: solo dentro de la funcion

//las funciones tambien se declaran
//luego de declararse, pueden llamarse
//asi se declara una funcion en javascript
function miFuncionBacan() {
  //esto es lo que hace la funcion
  //se le llama cuerpo

}


function setup() {

  //crear un lienzo para dibujar
  //dimensiones en px
  createCanvas(windowWidth, windowHeight);

  //pintar el fondo
  //background(color);
  //1: grayscale, 0 es negro, 255 es blanco
  //2: grayscale + alpha
  //3: rgb, redgreenblue, 0 nada, 255 todo
  //4: rgb + alpha
  // alpha: 0 es transparente, 255 es solido
  background(0, 0, 255);
  
  

  //variable local x
  var x
  x = 10


function draw() {

  
 miElipse();

}

//declarar funcion nueva
//para dibujar elise a mi gusto
function miElipse() {
  //definir ancho de borde
  //strokeWeight(px);
  strokeWeight(3);

  //definir color del borde
  //stroke(color);
  //para no dibujar el borde
  //noStroke();
  stroke(0, 0, random(255));

  //definir color del relleno
  //fill(color);
  fill(255, 0, 0, 30);

  //dibujemos elipse
  //ellipse(posX, posY, width, height);
  //medidos en pixeles
  //seguir mouse (mouseX, mouseY, width, height);
  ellipse(mouseX, mouseY, 50, 50);

  //asignarle nuevo valor al diametro
  diametro = diametro + 1
}

//declarar funcion nueva
//funcion para hacer muchas elipses
//en lugar de aleatorios
//de colores aleatorios
function muchasElipses() {

  //elipse en posicion aleatoia
  ellipse(random(width), random(height), 1, 1);






  }