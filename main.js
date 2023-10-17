// PROGRAMA PARA UNA PAGINA DE UN BANCO/BILLETERA VIRTUAL
//FUNCIONES

function registro(){
    while (contraseña1 !== contraseña){ 
        contraseña1 = prompt ("Vuelva a ingresar una contraseña");
        contraseña = prompt ("Verifique su contraseña. Recuerde que las contraseñas deben ser identicas.");
    }
    alert ("Registro exitoso! Ahora será redirigido a la pagina inicial para iniciar sesion.");
}

function inicioSesion(){
    let ingreso = prompt ("Ingrese su usuario");
    while (ingreso !== usuario){
        ingreso = prompt ("El usuario no es valido. Ingrese su usuario nuevamente.");
    }

    let acceso = prompt ("Ingrese su contraseña");
    while (acceso !== contraseña){
        acceso = prompt ("La contraseña no es valida. Ingresela nuevamente.");
    }
    alert ("Bienvenido " + usuario + ".");
}


//VARIABLES
const usuario = prompt ("Bienvenido/a, para registrarse ingrese un nombre de usuario y a continuacion se le pedira que ingrese una contraseña");
let contraseña1 =  prompt ("Ingrese su contraseña");
let  contraseña = prompt ("Vuelva a ingresar su contraseña");


let opcion = "";
let saldo = 0;
let monto = "";
let confirmacion = "";
//PROGRAMA


opcion = prompt("Ingrese una de las siguientes opciones: 1) Consultar saldo 2) Depositar 3) Transferir 4) Plazo fijo 0) Salir");
while (opcion !== "0") {
    switch (opcion) {
        case "1":
            alert ("Su saldo es $" + saldo)
            break;

        case "2":
            monto = parseInt(prompt("Su saldo actual es " + saldo + ". Ingrese cuanto dinero desea depositar en su cuenta"))

            confirmacion = prompt("Usted esta por depositar $" + monto + ". Desea confirmar la operacion? 1) Si 0) Salir");
            while (confirmacion !== "0") {
                saldo = saldo + monto
                alert("Su nuevo saldo es de $" + saldo);

                confirmacion = prompt ("Desea realizar otro deposito? 1) Si 0) Salir")
            }
            break;

        case "3":
            let clienteATransferir = prompt("Ingrese el usuario al cual desea trasferirle fondos o ingrese 'salir' para volver atras");

            while (clienteATransferir !== "salir") {
                monto = parseInt(prompt("Ingrese el monto a transferir"));

                saldo = saldo - monto

                alert("La transferencia fue realizada con exito. Su saldo actual para operar es de $" + saldo);

                clienteATransferir = prompt("Desea realizar otra transferencia indique el cliente, de lo contrario ingrese 'SALIR'")
            }

        case "4":
            alert ("Usted esta por realizar un plazo fijo");
    }

    opcion = prompt("Desea realizar otra operacion? 1) Consultar saldo 2) Ingresar dinero 3) Transferir dinero 4) Plazo fijo 0)Salir");
}

alert("Muchas gracias por utilizar nuestros servicios!");













// let saldo = prompt ("Su saldo actual es $0, indique el monto a depositar para poder seguir operando");
// alert ("Operacion realizada con éxito! Su saldo actual es " + saldo);

