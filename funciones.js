function restaurarVariable(){
  localStorage.setItem("tipo", 'otro');
}

//constantes de formularios

const numTarjeta = document.getElementById("numTarjeta");
const nombreT = document.getElementById("nombreT");
const vencimiento = document.getElementById("vencimiento");
const ccv = document.getElementById("ccv");

const mail = document.getElementById("mail");
const mensaje = document.getElementById("mensaje");
  





function validarFormulario (form){

  if (form=="datosTarjeta"){
    if (!validarTarjeta()){
      event.preventDefault();
    } 
  } else if (form=="encargos"){
    if (!validarEncargo()){
      event.preventDefault();
    }
  }
}



function validarTarjeta(){

  expReg_numT = new RegExp (/^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/);
  expReg_ccv = new RegExp(/^[0-9]{3}$/);
  expReg_vencimiento = new RegExp(/^(?:0?[1-9]|1[1-2])([\-/.])\d{2}$/);
  expReg_nombre = new RegExp(/^^([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\']+[\s])+([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])+[\s]?([A-Za-zÁÉÍÓÚñáéíóúÑ]{0}?[A-Za-zÁÉÍÓÚñáéíóúÑ\'])?$/);
  formCompleto = true;

  if (expReg_numT.test(numTarjeta.value)){
    numTarjeta.style.border = "";
  } else {
    formCompleto = false;
    numTarjeta.style.border = "2px solid red";
  }

  if (expReg_nombre.test(nombreT.value)){
    nombreT.style.border = "";
  } else {
    nombreT.style.border = "2px solid red";
    formCompleto = false;
  }

  if (expReg_vencimiento.test(vencimiento.value)){

    vencimiento.style.border = "";
  } else {
    console.log("entra a vencimiento");
    vencimiento.style.border = "2px solid red";
    formCompleto = false;
  }
  
  if (expReg_ccv.test(ccv.value)){
    ccv.style.border = "";
  } else {
    ccv.style.border = "2px solid red";
    formCompleto = false;
  }

  return formCompleto;
}

function validarEncargo(){
  formCompleto = true;
  expReg_mail = new RegExp(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
  console.log(mail.value);
  console.log(expReg_mail.test(mail.value));
  if (expReg_mail.test(mail.value)){
    mail.style.border = "";
  } else {
    formCompleto = false;
    mail.style.border = "2px solid red";
    mail.innerHTML = "Tenés que poner un mail válido";
  }
  if (mensaje.value != ""){
    mensaje.style.border = "";
  } else {
    formCompleto = false;
    mensaje.style.border = "2px solid red";
  }
  return formCompleto;
}
