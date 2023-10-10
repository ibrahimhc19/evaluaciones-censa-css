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
    return true;
  } else{
    return false;
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
  } else{
    return false;
  }
}

function aplicaDescuentoSalario(salario) {
  if (salario < 2000000) {
    return true;
  } else{
    return false;
}
}


let aplica_impuesto = aplicaImpuesto(datosUsuario.salario);
let aplicaDescuento = aplicaDescuentoSalario(datosUsuario.salario);
let es_hombre = esHombre(datosUsuario.sexo);
let es_menor = esMenor(datosUsuario.edad);
let descuento;
let impuesto;
let mensaje;

if (aplica_impuesto) {
  impuesto = 20;
} else if (!aplica_impuesto) {
  impuesto = 0
}

if (aplicaDescuento) {
  descuento = 20;
} else if (!aplicaDescuento) {
  descuento = 0
}


if (es_menor && aplicaDescuento) {
  descuento += 10;
} else if (es_menor && aplica_impuesto) {
  impuesto -= 10;
}

if(es_hombre){
  mensaje = " gracias por la compra, lindo"
} else{
  mensaje = " gracias por la compra, linda"
}

switch (eleccion) {
  case "1":
    alert("La compra de su " + opciones[0] + " tiene un descuento de " + descuento + "%" + " y un impuesto de " + impuesto + "%")
    console.log("La compra de su " + opciones[0] + " tiene un descuento de " + descuento + "%" + " y un impuesto de " + impuesto + "%")
    alert(mensaje)
    console.log(mensaje)
    break;
  case "2":
    alert("La compra de su " + opciones[0] + " tiene un descuento de " + descuento + "%" + " y un impuesto de " + impuesto + "%")
    console.log("La compra de su " + opciones[1] + " tiene un descuento de " + descuento + "%" + " y un impuesto de " + impuesto + "%")
    alert(mensaje)
    console.log(mensaje)
    break;
  case "3":
    alert("La compra de su " + opciones[0] + " tiene un descuento de " + descuento + "%" + " y un impuesto de " + impuesto + "%")
    console.log("La compra de su " + opciones[2] + " tiene un descuento de " + descuento + "%" + " y un impuesto de " + impuesto + "%")
    alert(mensaje)
    console.log(mensaje)
    break;
  case "4":
    alert("La compra de su " + opciones[0] + " tiene un descuento de " + descuento + "%" + " y un impuesto de " + impuesto + "%")
    console.log("La compra de su " + opciones[3] + " tiene un descuento de " + descuento + "%" + " y un impuesto de " + impuesto + "%")
    alert(mensaje)
    console.log(mensaje)
    break;
  case "5":
    alert("La compra de su " + opciones[0] + " tiene un descuento de " + descuento + "%" + " y un impuesto de " + impuesto + "%")
    console.log("La compra de su " + opciones[4] + " tiene un descuento de " + descuento + "%" + " y un impuesto de " + impuesto + "%")
    alert(mensaje)
    console.log(mensaje)
    break;
}