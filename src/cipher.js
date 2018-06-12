<<<<<<< HEAD
//window.cipher = {

//};

const  cifradoCesar =(texto,clave) =>{
 texto=document.getElementById("textoMensaje").value;
 clave=document.getElementById("keyPosicion").value;

 let cifradoCont="";
 //let rango;
 // toUpperCase()  --- Covierte en mayusculas
 // charCodeAt()   --- Convierte un String en numero (numero ASQII)

   for (let i=0; i<texto.length; i++){

      if (texto.charCodeAt(i)===32){ //agrega si hay espacios
         let espacio=" ";
         cifradoCont+= espacio;
      }

      else if(texto.charCodeAt(i) >=65 && texto.charCodeAt(i)<=90){ // Mayusculas
        let numAsq=texto.charCodeAt(i) - 65 + clave % 26 + 65; // Formula: Obtiene el numero de la letra en ASQII
        let mensajeCifrado=String.fromCharCode(numAsq); // Cifra el numero y lo convierte a letra
        cifradoCont+= mensajeCifrado;  //Guarda las letras obtenidas
      }

      else if(texto.charCodeAt(i) >=97 && texto.charCodeAt(i)<=122){  // Minusculas
        let numAsq=texto.charCodeAt(i) - 97 + clave % 26 + 97; // Formula: Obtiene el numero de la letra en ASQII
        let mensajeCifrado=String.fromCharCode(numAsq); // Cifra el numero y lo convierte a letra
        cifradoCont+= mensajeCifrado;  //Guarda las letras obtenidas
      }


    }


      /*  if (parseInt(texto[i])% 1 === 0){     //limita la entrada de numeros
           alert("No se admiten numeros, solo texto");
        }


    }*/
=======
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
>>>>>>> df7be67d7be5d3f68acd104ee451e00eaaafdc8f
    document.getElementById("mensajeCifradoDescifrado").innerHTML=cifradoCont; //Imprime las letras obtenidas

 }

<<<<<<< HEAD
// cifradoCesar();


const descifradoCesar = (texto, clave) => {

   texto=document.getElementById("textoMensaje").value;
   clave=document.getElementById("keyPosicion").value;

  let descifradoCont="";

alert("No se aceptan numeros");
   for (let i=0; i<texto.length; i++){
     if (texto.charCodeAt(i)===32){ //agrega si hay espacios
        let espacio=" ";
        descifradoCont+= espacio;
     }
     //else if(texto.charCodeAt(i)%1===0){


    // }
     else if(texto.charCodeAt(i) >=65 && texto.charCodeAt(i)<=90){ // Mayusculas
       let numAsq=(texto.charCodeAt(i) + 65 - clave) % 26 + 65; // Formula: Obtiene el numero de la letra en ASQII
       let mensajeCifrado=String.fromCharCode(numAsq); // Cifra el numero y lo convierte a letra
       descifradoCont+= mensajeCifrado;  //Guarda las letras obtenidas
     }

     else if(texto.charCodeAt(i) >=97 && texto.charCodeAt(i)<=122){  // Minusculas
       console.log(texto);
       let numAsq=texto.charCodeAt(i) + 97 - clave % 26 - 97; // Formula: Obtiene el numero de la letra en ASQII
       console.log(numAsq);
       let mensajeCifrado=String.fromCharCode(numAsq); // Cifra el numero y lo convierte a letra
       descifradoCont+= mensajeCifrado;  //Guarda las letras obtenidas
     }

    }
    document.getElementById("mensajeCifradoDescifrado").innerHTML=descifradoCont;

 }





 //descifradoCesar();
=======
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
>>>>>>> df7be67d7be5d3f68acd104ee451e00eaaafdc8f
