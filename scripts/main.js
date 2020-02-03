/*antoine noreau: Esta manera de cambiar el nombre de la imagen me parece bien, es inteligente. El codigo JS functiona bien 
en la animacion de imagenes de estadios. Podria agregar flechas (Bootstrap tiene un paquete facil a usar) para que el usuario pueda cambiar 
mas facilmente. Me gusta!
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
