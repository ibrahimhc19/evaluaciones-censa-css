let datosUsuario = {
  nombre: "",
  apellido: "",
  edad: "",
  salario: "",
  sexo: "",
}

datosUsuario.nombre = prompt("Por favor, ingresa tu nombre:");
datosUsuario.apellido = prompt("Por favor, ingresa tu apellido:");
datosUsuario.edad = parseInt(prompt("Por favor, ingresa tu edad:"));
datosUsuario.salario = parseInt(prompt("Por favor, ingresa tu salario:"));
datosUsuario.sexo = prompt("Por favor, ingresa tu sexo (M/F):");

let opciones = ["1. Pantalon ", "2. Camisa ", "3. Camiseta ", "4. Guayos ", "5. Botas "]

let eleccion = prompt("Elija un número de las opciones de compra: \n" + opciones)



function esHombre(opcion) {

  opcion = opcion.toLowerCase();

  if (opcion == "m") {
    return mensaje = " gracias por la compra, lindo"
  } else {
    return mensaje = " gracias por la compra, linda"
  }
}

function esMenor(edad) {
  if (edad < 18) {
    return true;
  } return false
}

function aplicaImpuesto(salario) {
  if (salario > 5000000) {
    return true;
  } return false
}

function aplicaDescuentoSalario(salario) {
  if (salario > 2000000) {
    return true
  } return false;
}


function precioMenor() {

  let descuento = 20;
  let impuesto = 20;

  if (esMenor(datosUsuario.edad) && aplicaDescuentoSalario(datosUsuario.salario)) {
    descuento += 10;
    return descuento;
  } else if (esMenor(datosUsuario.edad) && aplicaImpuesto(datosUsuario.salario)) {
    impuesto -= 10;
    return impuesto;
  }
}



function precioNormal() {

  let descuento;
  let impuesto;

  if (aplicaImpuesto(datosUsuario.salario)) {
    impuesto = 20;
    return impuesto;
  } else if (aplicaDescuentoSalario(datosUsuario.salario)) {
    descuento = 20;
    return descuento;
  }

}

if(esMenor(datosUsuario.edad)){
  precioMenor();
  
} else{
  precioNormal();
}