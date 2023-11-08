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
    alert("Su saldo actual es $" + saldo)
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

            const movimiento = {
                tipo: "Deposito",
                monto: monto,
                fecha: new Date(),
            };

            historialMovimientos.push(movimiento);

        } else if (confirmarDeposito == "0") {
            alert("Deposito cancelado")
        } else {
            alert("Opcion no valida, deposito cancelado por seguridad! Intente nuevamente")
        }

        confirmacion = prompt("Desea realizar otro deposito? 1) Si 0) Salir")
    }
}
function agregarUsuario() {
    const aliasUsuario = prompt("Ingrese el alias o cbu del usuario:");
    const nombreUsuario = prompt("Ingrese el nombre de usuario:");


    // Crear un nuevo usuario
    const nuevoUsuario = new Usuario(nombreUsuario, aliasUsuario);

    // Agregar el usuario al objeto usuarios
    usuarios[nuevoUsuario.nombre] = nuevoUsuario;

    alert(`Usuario ${nombreUsuario} agregado con éxito.`);
}
function transferirNoAgendado(clienteATransferir){
    let monto = parseInt(prompt("Ingrese el monto a transferir"));

    if (monto <= saldo) {
        let confirmarTransferencia = prompt(`Está a punto de transferir $${monto} a ${clienteATransferir}. ¿Desea confirmar la operación? 1) Si 0) Cancelar`);

        if (confirmarTransferencia == "1") {
            saldo = saldo - monto;
            alert("La transferencia fue realizada con éxito.");

            const movimiento = {
                tipo: "Transferencia",
                monto: monto,
                fecha: new Date(),
            };
            historialMovimientos.push(movimiento);

        } else if (confirmarTransferencia == "0") {
            alert("Transferencia cancelada.");

        } else {
            alert("Opción no válida. Transferencia cancelada.");
        }
    } else {
        alert("Fondos insuficientes. Su saldo actual es $" + saldo);
    }
}
function transferirAgendado(clienteATransferir) {
    let monto = parseInt(prompt("Ingrese el monto a transferir"));

    if (monto <= saldo) {
        let confirmarTransferencia = prompt(`Está a punto de transferir $${monto} a ${usuarios[clienteATransferir].alias}. ¿Desea confirmar la operación? 1) Si 0) Cancelar`);

        if (confirmarTransferencia == "1") {
            saldo = saldo - monto;
            alert("La transferencia fue realizada con éxito.");

            const movimiento = {
                tipo: "Transferencia",
                monto: monto,
                fecha: new Date(),
            };
            historialMovimientos.push(movimiento);

        } else if (confirmarTransferencia == "0") {
            alert("Transferencia cancelada.");

        } else {
            alert("Opción no válida. Transferencia cancelada.");
        }
    } else {
        alert("Fondos insuficientes. Su saldo actual es $" + saldo);
    }
}
function transferencia() { //      NO FUNCIONA 
    let clienteATransferir = prompt("Ingrese el nombre de usuario al cual desea transferirle fondos o ingrese 'salir' para volver atrás");

    while (clienteATransferir !== "salir") {
        if (usuarios[clienteATransferir]) {
            transferirAgendado(clienteATransferir);

        } else { //usuario no encontrado en la agenda
            let agendarNuevo = prompt(`El usuario '${clienteATransferir}' no se encuentra en su lista de contactos. Desea agendarlo? 1) SI 2)NO`);
            if (agendarNuevo == "1") {
                agregarUsuario();
                transferirAgendado(clienteATransferir);
            } else if (agendarNuevo == "2"){
                transferirNoAgendado(clienteATransferir);
            }
        }

        clienteATransferir = prompt("Si desea realizar otra transferencia indique el nombre de usuario. De lo contrario ingrese 'salir' para volver atrás.");
    }
}

function constitucionPlazoFijo() {
    const montoAInvertir = parseInt(prompt("Ingrese el monto que desea invertir"));

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

                const movimiento = {
                    tipo: "Plazo fijo",
                    monto: montoAInvertir,
                    fecha: new Date(),
                    plazo: plazoElegido,
                };
                historialMovimientos.push(movimiento);

            } else {
                alert("Operación cancelada.");
            }
        } else {
            alert("Opción no válida.");
        }
    } else {
        alert("Fondos Insuficientes! Deposite dinero en su cuenta para poder constituir un Plazo Fijo")
    }
}
function agendaContactos() {
    let listaContactos = "Contactos agendados: \n ";
    for (let usuario in usuarios) {
        listaContactos += `${usuarios[usuario].nombre} (Alias: ${usuarios[usuario].alias}) \n`;
    }
    alert(listaContactos);
}

function visualizarMovimientos() {
    if (historialMovimientos.length == 0) {
        alert("No hay movimientos para mostrar.");
        return;
    }

    alert("Historial de movimientos:");

    for (const movimiento of historialMovimientos) {
        alert(`Tipo: ${movimiento.tipo}\nMonto: $${movimiento.monto.toFixed(2)}\nFecha: ${movimiento.fecha}\nPlazo (si corresponde): ${movimiento.plazo || 'N/A'}`);
    }
}

//VARIABLES
let opciones = "";
let saldo = 0;
let monto = "";
let confirmacion = "";
const usuarios = {};
const historialMovimientos = [];

//PROGRAMA
//registro al iniciar
const usuario = registroUsuario();
const contraseña = registroContrasenia();

//inicio de sesion con los datos del registro
inicioSesion();

//inicio de sesion exitoso: display de menu principal con las diferentes operaciones posibles
opciones = prompt("Ingrese una de las siguientes opciones:\n 1) Consultar saldo\n 2) Depositar\n 3) Transferir\n 4) Plazo Fijo\n 5) Agendar Contacto\n 6)Lista de Contactos\n 7) Ultimos Movimientos\n 0) Salir");
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

        case "6":
            agendaContactos();
            break;

        case "7":
            visualizarMovimientos();
            break;
    }

    opciones = prompt("Desea realizar otra operacion?\n 1) Consultar saldo\n 2) Depositar dinero\n 3) Transferir dinero\n 4) Plazo Fijo\n 5) Agendar Contacto\n 6) Lista de Contacto\n 7) Ultimos Movimientos\n 0)Salir");
}

//log out
alert("Muchas gracias por utilizar nuestros servicios!");


//COSAS QUE SE PUEDEN AGREGAR

//agregar una funcion de mostrar contactos de la agenda
//agregar una opcion para ver ultimos movimientos
//guardar los plazos fijos en una lista para despues mostrar los plazos constituidos 