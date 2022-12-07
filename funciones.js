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
  
const WrongInput = "2px solid red";



var mensajesError = Array();
mensajesError[0] =  document.getElementById('divMail');
mensajesError[1] = document.getElementById('divMensaje');
mensajesError[2] = document.getElementById('divNumTarjeta');
mensajesError[3] = document.getElementById('divNombre');
mensajesError[4] = document.getElementById('divVencimiento');
mensajesError[5] = document.getElementById('divCCV');


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

function ocultarDiv(div){
  mensajesError.find(div);
  if (div.oculto === 'block'){
    div.oculto = 'none';
  } else {
    div.oculto = 'block';
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
    mensajesError[2].style.display = 'none';
  } else {
    formCompleto = false;
    numTarjeta.style.border = WrongInput;
    mensajesError[2].style.display = 'block';
  }

  if (expReg_nombre.test(nombreT.value)){
    nombreT.style.border = "";
    mensajesError[3].style.display = 'none';
  } else {
    nombreT.style.border = WrongInput;
    formCompleto = false;
    mensajesError[3].style.display = 'block';
  }

  if (expReg_vencimiento.test(vencimiento.value)){
    vencimiento.style.border = "";
    mensajesError[4].style.display = 'none';
  } else {
    vencimiento.style.border = WrongInput;
    formCompleto = false;
    mensajesError[4].style.display = 'block';
  }
  
  if (expReg_ccv.test(ccv.value)){
    ccv.style.border = "";
    mensajesError[5].style.display = 'none';
  } else {
    ccv.style.border = WrongInput;
    formCompleto = false;
    mensajesError[5].style.display = 'block';
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
    mensajesError[0].style.display = 'none';
  } else {
    formCompleto = false;
    mail.style.border = WrongInput;
    mensajesError[0].style.display = 'block';
  }
  if (mensaje.value != ""){
    mensaje.style.border = "";
    mensajesError[1].style.display = 'none';
  } else {
    formCompleto = false;
    mensaje.style.border = WrongInput;
    mensajesError[1].style.display = 'block';
  }
  return formCompleto;
}
