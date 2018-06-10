/*window.cipher = {
  // ...
};*/

function cifradoCesar(){

let texto=document.getElementById("textoMensaje").value;
let clave=document.getElementById("keyPosicion").value;

let cifradoCont="";

   for (let i=0; i<texto.length; i++){

     let numAsq=texto.toUpperCase().charCodeAt(i) - 65 + clave % 26 + 65; // Formula: Obtiene el numero de la letra en ASQII
     let mensajeDescifrado=String.fromCharCode(numAsq); // Cifra el numero y lo convierte a letra
     cifradoCont+= mensajeDescifrado;  //Guarda las letras obtenidas

    }
    document.getElementById("mensajeCifradoDescifrado").innerHTML=cifradoCont; //Imprime las letras obtenidas

 }

cifradoCesar();


function descifradoCesar(){

  let texto=document.getElementById("textoMensaje").value;
  let clave=document.getElementById("keyPosicion").value;

  let descifradoCont="";

   for (let i=0; i<texto.length; i++){
     let numAsq=(texto.toUpperCase().charCodeAt(i) + 65 - clave) % 26 + 65; // Formula: Obtiene el numero de la letra en ASQII
     let mensajeDescifrado=String.fromCharCode(numAsq); // Descrifra el numero y lo convierte a letra

    descifradoCont+= mensajeDescifrado;  //Guarda las letras obtenidas

    }
    document.getElementById("mensajeCifradoDescifrado").innerHTML=descifradoCont; //Obtiene lo guardado de la variable descifradoCont
                                                                                //  y lo imprime en la etiqueta mensajeCifradoDescifrado

 }

 descifradoCesar();
