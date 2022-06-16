const consultar = document.querySelector("#consultar");
const ingresar = document.getElementById("ingresar");
const retirar = document.getElementById("retirar");
const operaciones = document.querySelector("#operaciones");
const salir = document.getElementById('salir');
let usuarioActual = [];
let dinero = "";
let saldoActual;

document.addEventListener("DOMContentLoaded", () => {
  usuarioActual = JSON.parse(window.localStorage.getItem("resultado"));
  saldoActual = parseInt(usuarioActual[0].saldo);

  const cabeceraNombre = document.createElement("div");
  cabeceraNombre.innerHTML = 
  `<div class="row bg-dark text-white">
  <div class="titulo col-10"><h2>Gamer Cashier</h2></div>
  <div class="col-2 text-center">${usuarioActual[0].usuario}</div>
  </div>`;

  cabecera.parentNode.insertBefore(cabeceraNombre, cabecera.nextSibling);

  const intro = document.createElement("div");
  intro.innerHTML = `<h2 class="text-center mb-3 text-primary text-white">
  ¡Hola ${usuarioActual[0].usuario}!</h2>
  <h4 class="text-center text-white">¿Qué estás buscando el dia de hoy?</h4>`;

  operaciones.parentNode.insertBefore(intro, operaciones.nextSibling);
});

ingresar.addEventListener("click", () => {
  ingresarSaldo();
});

consultar.addEventListener("click", () => {
  consultaSaldo();
});


retirar.addEventListener("click", () => {
  retirarSaldo();
});

salir.addEventListener("click", () => {
  window.location = "index.html";
});


function consultaSaldo(){
  Swal.fire({
    title: `Tu saldo es ${saldoActual}`,
    width: 500,
    padding: '3em',
    color: 'white',
    background: 'url(https://www.bing.com/th/id/OGC.0a54ef17f9414b707278320da87680ea?pid=1.7&rurl=https%3a%2f%2fmedia1.tenor.com%2fimages%2f0a54ef17f9414b707278320da87680ea%2ftenor.gif%3fitemid%3d17365826&ehk=UotC5GlpY6hQ8tsYMvCBcfqii7m%2ff9Faz%2f32rQOdees%3d)',
    
  })
}

function ingresarSaldo() {
  Swal.fire({
    title: `Tienes ${saldoActual}`,
    text: "Ingresa la cantidad a depositar",
    icon: 'info',
    input: 'number',
    inputAttributes:{
      id: "inputMoney",
    },
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
        addMoney();
    }
  })
}

function addMoney() {
  dinero = parseInt(document.getElementById("inputMoney").value);
  if (
    (dinero + saldoActual < 990) &
    (dinero + saldoActual > 10)
  ) {
    saldoActual = dinero + saldoActual;
    Swal.fire('¡Transacción exitosa!')
    
  } else {
    if (isNaN(dinero)) {
      Swal.fire({
        title: '¡Vacío!',
        text: 'Por favor ingresa una cantidad',
        imageUrl: 'https://tresubresdobles.com/wp-content/uploads/2019/09/skft-aa9e24add64d6d96c787dedfe5de33e9-768x576.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    } else {
      Swal.fire({
        title: '¡Lo sentimos!',
        text: 'No puedes ingresar mas de $990',
        imageUrl: 'https://tresubresdobles.com/wp-content/uploads/2021/04/skft-23aff38e10ee3c4e430a1f3450c4a01d.jpeg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
  }
}

function retirarSaldo() {
  Swal.fire({
    title: `Tienes ${saldoActual}`,
    text: "Ingresa la cantidad a depositar",
    icon: 'info',
    input: 'number',
    inputAttributes:{
      id: "takeMoney",
    },
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Aceptar'
  }).then((result) => {
    if (result.isConfirmed) {
        takeMoney();
    }
  })
}

function takeMoney() {
  moneyTaken = parseInt(document.getElementById("takeMoney").value);
  if (
    (saldoActual - moneyTaken < 990) &
    (saldoActual - moneyTaken > 10)
  ) {
    saldoActual = saldoActual - moneyTaken;
    Swal.fire('¡Retiro exitoso!')
  } else {
    if (isNaN(moneyTaken)) {
      Swal.fire({
        title: '¡Vacío!',
        text: 'Por favor ingresa una cantidad',
        imageUrl: 'https://th.bing.com/th/id/R.44696ab5ce4f5169042dfa03cdcf1d2d?rik=62fOQDK6OpzmoQ&riu=http%3a%2f%2fimages4.fanpop.com%2fimage%2fphotos%2f23700000%2fFunny-random-23797915-1000-981.jpg&ehk=IZ97ZuH3cXlcNGM583D4z3sPQm43pNt0Z4SrHaBg8F4%3d&risl=&pid=ImgRaw&r=0',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    } else {
      Swal.fire({
        title: '¡Lo sentimos!',
        text: 'No puedes dejar tu cuenta con menos de $10',
        imageUrl: 'https://th.bing.com/th/id/OIP.Dg0QixLfavg3cDxFRfANXQHaGQ?pid=ImgDet&rs=1',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
      })
    }
  }
}
