
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
      if(parseInt(texto[i])%1 ===0){
       alert("Lo sentimos, no se admiten numeros. Vuelve a intentarlo.-- GRACIAS");
       break;
      }
      else if (texto.charCodeAt(i)===32){ //agrega si hay espacios
         let espacio=" ";
         cifradoCont+= espacio;
      }
      else if(texto.charCodeAt(i)===209){ //Mayuscula Ñ Ontiene el valor del indice de Ñ  (209- # del caracter a traves de la consola)
        let letra="Ä";    //Se le asigna un string a la variable
        cifradoCont+= letra;
      }
      else if(texto.charCodeAt(i)===241){ //Minuscula ñ (241- # del caracter a traves de la consola )
        let letra="ä";
        cifradoCont+= letra;
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

     document.getElementById("mensajeCifradoDescifrado").innerHTML=cifradoCont;
}



// cifradoCesar();


const descifradoCesar = (texto, clave) => {

   texto=document.getElementById("textoMensaje").value;
   clave=document.getElementById("keyPosicion").value;

  let descifradoCont="";


   for (let i=0; i<texto.length; i++){
     if (texto.charCodeAt(i)===32){ //agrega si hay espacios
        let espacio=" ";
        descifradoCont+= espacio;
     }
     //else if(texto.charCodeAt(i)%1===0){
     else if(texto.charCodeAt(i)===196){ //Mayuscula Ñ ---
       let letra="Ñ";
       console.log(letra)
       descifradoCont+= letra;
     }
     else if(texto.charCodeAt(i)===228){ //Minuscula ñ
       let letra="ñ";
       descifradoCont+= letra;
     }
     else if(texto.charCodeAt(i) >=65 && texto.charCodeAt(i)<=90){ // Mayusculas
       let numAsq=(texto.charCodeAt(i) + 65 - clave) % 26 + 65; // Formula: Obtiene el numero de la letra en ASQII
       let mensajeCifrado=String.fromCharCode(numAsq); // Cifra el numero y lo convierte a letra
       descifradoCont+= mensajeCifrado;  //Guarda las letras obtenidas
     }

     else if(texto.charCodeAt(i) >=97 && texto.charCodeAt(i)<=122){  // Minusculas
       //console.log(texto);
       let numAsq=texto.charCodeAt(i) + 97 - clave % 26 - 97; // Formula: Obtiene el numero de la letra en ASQII
       //console.log(numAsq);
       let mensajeCifrado=String.fromCharCode(numAsq); // Cifra el numero y lo convierte a letra
       descifradoCont+= mensajeCifrado;  //Guarda las letras obtenidas
     }

    document.getElementById("mensajeCifradoDescifrado").innerHTML=descifradoCont;

  }

 }
