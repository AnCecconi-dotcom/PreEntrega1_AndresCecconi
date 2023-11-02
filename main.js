// PROGRAMA PARA UNA PAGINA DE UN BANCO/BILLETERA VIRTUAL

//CLASES CONSTRUCTORA PARA USUARIOS
class Usuario {
    constructor(nombre, alias) {
        this.nombre = nombre;
        this.alias = alias;
    }
}

//FUNCIONES
function registroUsuario() {
    let usuario = prompt("Bienvenido/a, para registrarse ingrese un nombre de usuario y a continuacion se le pedira que ingrese una contraseña");
    return usuario;
}
function registroContrasenia() {
    let contraseña1 = prompt("Ingrese una contraseña");
    let contraseña = prompt("Vuelva a ingresar su contraseña");

    while (contraseña1 !== contraseña) {
        contraseña1 = prompt("Las contraseñas no coinciden. Vuelva a ingresar una contraseña");
        contraseña = prompt("Verifique su contraseña. Recuerde que las contraseñas deben ser identicas.");
    }
    alert("Registro exitoso! Ahora será redirigido a la pagina inicial para iniciar sesion.");
    return contraseña;
}
function inicioSesion() {
    let ingreso = prompt("Bienvenido! Ingrese su usuario");
    while (ingreso !== usuario) {
        ingreso = prompt("El usuario no es valido. Ingrese su usuario nuevamente.");
    }

    let acceso = prompt("Ahora ingrese su contraseña");
    while (acceso !== contraseña) {
        acceso = prompt("La contraseña no es valida. Ingresela nuevamente.");
    }
    alert("Bienvenido " + usuario + ". Ya estas listo para operar! Comencemos!");
}
function consultarSaldo() {
    alert("Su saldo es $" + saldo)
}
function desposito() {
    let confirmacion = "";

    while (confirmacion !== "0") {
        monto = parseInt(prompt("Su saldo actual es $" + saldo + ". Ingrese cuanto dinero desea depositar en su cuenta"))

        //Confirmacion del deposito
        let confirmarDeposito = prompt("Usted esta por depositar $" + monto + ". Desea confirmar la operacion? 1) Si 0) Salir");
        if (confirmarDeposito == "1") {
            saldo = saldo + monto
            alert("Operacion realizada con éxito! Su nuevo saldo es de $" + saldo);
        } else if (confirmarDeposito == "0") {
            alert("Deposito cancelado")
        } else {
            alert("Opcion no valida, deposito cancelado por seguridad! Intente nuevamente")
        }

        confirmacion = prompt("Desea realizar otro deposito? 1) Si 0) Salir")
    }
}
function agregarUsuario() {
    const nombreUsuario = prompt("Ingrese el nombre de usuario:");
    const aliasUsuario = prompt("Ingrese un alias para el usuario:");

    // Crear un nuevo usuario
    const nuevoUsuario = new Usuario(nombreUsuario, aliasUsuario);

    // Agregar el usuario al objeto usuarios
    usuarios[nuevoUsuario.nombre] = nuevoUsuario;

    alert(`Usuario ${nombreUsuario} agregado con éxito.`);
}
function transferencia() {
    let clienteATransferir = prompt("Ingrese el nombre de usuario al cual desea transferirle fondos o ingrese 'salir' para volver atrás");

    while (clienteATransferir !== "salir") {
        if (!usuarios[clienteATransferir]) {
            alert("Usuario no encontrado. Verifique el nombre de usuario.");
        } else {
            let monto = parseInt(prompt("Ingrese el monto a transferir"));
            if (monto <= saldo) {
                let confirmarTransferencia = prompt(`Está a punto de transferir $${monto} a ${usuarios[clienteATransferir].alias}. ¿Desea confirmar la operación? 1) Si 0) Cancelar`);
                if (confirmarTransferencia === "1") {
                    saldo = saldo - monto;
                    alert("La transferencia fue realizada con éxito.");
                } else if (confirmarTransferencia === "0") {
                    alert("Transferencia cancelada.");
                } else {
                    alert("Opción no válida. Transferencia cancelada.");
                }
            } else {
                alert("Fondos insuficientes. Su saldo actual es $" + saldo);
            }
        }
        clienteATransferir = prompt("Si desea realizar otra transferencia indique el nombre de usuario. De lo contrario ingrese 'salir' para volver atrás.");
    }
}
function constitucionPlazoFijo() {
    const montoAInvertir = parseInt(prompt("Ingrese la cantidad de dinero que desea invertir en plazo fijo"));

    if (montoAInvertir <= saldo) {
        const opcionesPlazo = ["30", "90", "180", "270", "365"];
        const opcionElegida = prompt("Elija una de las siguientes opciones de plazo fijo: 30, 90, 180, 270 o 365 dias");

        if (opcionesPlazo.includes(opcionElegida)) {
            const tasaAnual = 1.33; // 133% anual
            const plazoElegido = parseInt(opcionElegida);
            const montoAPlazo = montoAInvertir + (montoAInvertir * (tasaAnual * plazoElegido / 365));

            //CONFIRMACION

            const confirmar = prompt(`Está a punto de invertir $${montoAInvertir} a plazo fijo por ${plazoElegido} días y recibirá $${montoAPlazo.toFixed(2)}. ¿Desea confirmar? 1) Sí 0) Cancelar`);
            if (confirmar == "1") {
                saldo -= montoAInvertir; // Resta el monto invertido al saldo
                alert(`Constitución de plazo fijo exitosa. Usted recibirá en ${plazoElegido} días $${montoAPlazo.toFixed(2)}`);
            } else {
                alert("Inversión a plazo fijo cancelada.");
            }
        } else {
            alert("Opción de plazo fijo no válida.");
        }
    } else {
        alert("Fondos Insuficientes! Deposite dinero en su cuenta para poder constituir un Plazo Fijo")
    }
}

//VARIABLES
let opciones = "";
let saldo = 0;
let monto = "";
let confirmacion = "";
const usuarios = {};

//PROGRAMA
//registro al iniciar
const usuario = registroUsuario();
const contraseña = registroContrasenia();

//inicio de sesion con los datos del registro
inicioSesion();

//inicio de sesion exitoso: display de menu principal con las diferentes operaciones posibles
opciones = prompt("Ingrese una de las siguientes opciones: 1) Consultar saldo 2) Depositar 3) Transferir 4) Plazo Fijo 5) Agendar nuevo destinatario 0) Salir");
while (opciones !== "0") {
    switch (opciones) {
        case "1":
            consultarSaldo();
            break;

        case "2":
            desposito();
            break;

        case "3":
            transferencia();
            break;

        case "4":
            alert("Usted esta por realizar un Plazo Fijo");
            constitucionPlazoFijo();
            break;

        case "5":
            agregarUsuario();
            break;
    }

    opciones = prompt("Desea realizar otra operacion? 1) Consultar saldo 2) Depositar dinero 3) Transferir dinero 4) Plazo Fijo 5) Agendar nuevo destinatario 0)Salir");
}

//log out
alert("Muchas gracias por utilizar nuestros servicios!");


//COSAS QUE SE PUEDEN AGREGAR

//agregar una funcion de mostrar contactos de la agenda
//agregar una opcion para ver ultimos movimientos
//guardar los plazos fijos en una lista para despues mostrar los plazos constituidos 