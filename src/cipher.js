
//window.cipher = {
//};

const  cifradoCesar =(texto) =>{
 texto=document.getElementById("textoMensaje").value; //Obtiene el mensaje ingresado
 //clave=document.getElementById("keyPosicion").value;


 let cifradoCont=""; //Va guardando las letras
 //let rango;
 // toUpperCase()  --- Covierte en mayusculas
 // charCodeAt()   --- Convierte un String en numero (numero ASQII)
   for (let i=0; i<texto.length; i++){ //Realiza ciclos por cada palabra encontrada
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
      else if(texto.charCodeAt(i) >=65 && texto.charCodeAt(i)<=90 ){ // Mayusculas
        let textNum=texto.charCodeAt(i); //Obtiene el numero Ascii
        let numAsq= (textNum - 65 + 4 )% 26 + 65; // Formula: Obtiene el numero a reemplazar de acuerdo a la formula
        let mensajeCifrado=String.fromCharCode(numAsq); // Obtiene el numero adquirido en numAsq y lo convierte a un caracter de acuerdo al codigo ASCII
        cifradoCont+= mensajeCifrado;  // Guardando las letras obtenidas
      }

      else if(texto.charCodeAt(i) >=97 && texto.charCodeAt(i)<=122 ){  // Minusculas
        let textNum=texto.charCodeAt(i);  //Obtiene el numero Ascii
        let numAsq= (textNum - 97 + 4 )% 26 + 97;  // Formula: Obtiene el numero a reemplazar de acuerdo a la formula
        let mensajeCifrado=String.fromCharCode(numAsq); // Obtiene el numero adquirido en numAsq y lo convierte a un caracter de acuerdo al codigo ASCII
        cifradoCont+= mensajeCifrado;  //Guarda las letras obtenidas
      }


    }

     document.getElementById("mensajeCifradoDescifrado").innerHTML=cifradoCont;
    }



    // cifradoCesar();


const descifradoCesar = (texto) => {

   texto=document.getElementById("textoMensaje").value;
   //clave=document.getElementById("keyPosicion").value;

  let descifradoCont="";


   for (let i=0; i<texto.length; i++){
     if(parseInt(texto[i])%1 ===0){
      alert("Lo sentimos, no se admiten numeros. Vuelve a intentarlo.-- GRACIAS");
      break;
     }

     else if (texto.charCodeAt(i)===32){ //agrega si hay espacios
        let espacio=" ";
        descifradoCont+= espacio;
     }
     //else if(texto.charCodeAt(i)%1===0){
     else if(texto.charCodeAt(i)===196){ //Mayuscula Ñ ---
       let letra="Ñ";
       descifradoCont+= letra;
     }
     else if(texto.charCodeAt(i)===228){ //Minuscula ñ
       let letra="ñ";
       descifradoCont+= letra;
     }
     else if(texto.charCodeAt(i) >=65 && texto.charCodeAt(i)<=90){ // Mayusculas
       let textNum=texto.charCodeAt(i);   //Obtiene el numero Ascii
       let numAsq=(textNum + 65 - 4 )% 26 + 65; // Formula: Obtiene el numero a reemplazar de acuerdo a la formula
       let mensajeCifrado=String.fromCharCode(numAsq); // Obtiene el numero adquirido en numAsq y lo convierte a un caracter de acuerdo al codigo ASCII
       descifradoCont+= mensajeCifrado;  //Guarda las letras obtenidas
     }

     else if(texto.charCodeAt(i) >=97 && texto.charCodeAt(i)<=122){  // Minusculas
       let textNum=texto.charCodeAt(i);   //Obtiene el numero Ascii
       //console.log(texto);
       let numAsq=textNum + 97 - 4 % 26 - 97; // Formula: Obtiene el numero a reemplazar de acuerdo a la formula
       //console.log(numAsq);
       let mensajeCifrado=String.fromCharCode(numAsq); // Obtiene el numero adquirido en numAsq y lo convierte a un caracter de acuerdo al codigo ASCII
       descifradoCont+= mensajeCifrado;  //Guarda las letras obtenidas

      }


  }

  document.getElementById("mensajeCifradoDescifrado").innerHTML=descifradoCont;

 }
