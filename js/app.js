//variables
const formLogin = document.querySelector('#form-login');
const inputUsuario = document.querySelector('#inputUsuario');
const inputClave = document.querySelector('#inputClave');

//objeto para iniciar sesion 
const iniciarSesion = {
    usuario: '',
    clave: ''
};



formLogin.addEventListener('submit', (e) => {  
    e.preventDefault(); //previene la recarga de pagina

    iniciarSesion.usuario = inputUsuario.value; 
    iniciarSesion.clave = inputClave.value;
    
        buscarCuenta();
  
        formLogin.reset();
});


function buscarCuenta(){
    const resultado = cuentas.filter(buscarUsuario).filter(buscarClave);

    if(resultado.length){
        const usuario = window.localStorage.setItem("resultado", JSON.stringify(resultado));
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          Toast.fire({
            icon: 'success',
            title: 'Signed in successfully'
          });

          setTimeout(() => {
            window.location = 'inicio.html';
          }, 2000)
    }
    else{
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Usuario y/o contraseña incorrecta'
          })
    }
};

function buscarUsuario(cuenta){
    const {usuario} = iniciarSesion;

    if(usuario){
        return cuenta.usuario == usuario;
    }

    return cuenta;
};

function buscarClave(cuenta){
    const {clave} = iniciarSesion;

    if(clave){
        return cuenta.clave == clave;
    }

    return cuenta;
};

