//Uso de modo strict en todo el documento
"use strict";

//Esta es una función que recibe una imagen, obtiene el src de la imagen
//y lo cambia por una imagen siguiente
function funcioncita(imagen){
  let source = imagen.getAttribute('src');
  let rta = '';
  if(source.includes('1')){
    rta = source.replace('1', '2');
  }
  else if (source.includes('2')) {
    rta = source.replace('2', '3');
  }
  else {
    rta = source.replace('3', '1');
  }
  imagen.setAttribute('src', rta);
};

//Guardo en variables las imagenes del documento que se quieren cambiar
let imagenSP = document.querySelector('#imagenSP');
let imagenVC = document.querySelector('#imagenVC');
let imagenSB = document.querySelector('#imagenSB');
let imagenCM = document.querySelector('#imagenCM');
let imagenPP = document.querySelector('#imagenPP');
let imagenAZ = document.querySelector('#imagenAZ');

//Agrego las imagenes a una lista
const imagenes = [imagenSP, imagenSB, imagenCM, imagenPP, imagenAZ, imagenVC];

//Recorro las imagenes de la lista y le asigno al evento de
//on click una función anónima que llama a la función del principio con
//la imagen como parámetro
imagenes.forEach((imagen) => {
  imagen.onclick = () => funcioncita(imagen)
});
