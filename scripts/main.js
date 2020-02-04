/*
* No conozco muy bien todas las funciones que estás usando y el hecho de que nada esté documentado no ayuda.
* Recuerda que comentar el código es importante para que los demás podemos entenderlo
* NO usas nunca var esto es una Muy buene práctica--> MUY BIEN!
*/


let imagenSP = document.querySelector('#imagenSP');
imagenSP.onclick = function(){
  let source = imagenSP.getAttribute('src');
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
  imagenSP.setAttribute('src', rta);
};

/**
* TODO: INCLUIR DOCUMENTACIÓN PARA ESTA FUNCIÓN
*/
let imagenVC = document.querySelector('#imagenVC');
imagenVC.onclick = function(){
  let source = imagenVC.getAttribute('src');
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
  imagenVC.setAttribute('src', rta);
};

/**
* TODO: INCLUIR DOCUMENTACIÓN PARA ESTA FUNCIÓN
*/

let imagenSB = document.querySelector('#imagenSB');
imagenSB.onclick = function(){
  let source = imagenSB.getAttribute('src');
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
  imagenSB.setAttribute('src', rta);
};

/**
* TODO: INCLUIR DOCUMENTACIÓN PARA ESTA FUNCIÓN
*/
let imagenCM = document.querySelector('#imagenCM');
imagenCM.onclick = function(){
  let source = imagenCM.getAttribute('src');
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
  imagenCM.setAttribute('src', rta);
};

/**
* TODO: INCLUIR DOCUMENTACIÓN PARA ESTA FUNCIÓN
*/
let imagenPP = document.querySelector('#imagenPP');
imagenPP.onclick = function(){
  let source = imagenPP.getAttribute('src');
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
  imagenPP.setAttribute('src', rta);
};


/**
* TODO: INCLUIR DOCUMENTACIÓN PARA ESTA FUNCIÓN
*/
let imagenAZ = document.querySelector('#imagenAZ');
imagenAZ.onclick = function(){
  let source = imagenAZ.getAttribute('src');
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
  imagenAZ.setAttribute('src', rta);
};
