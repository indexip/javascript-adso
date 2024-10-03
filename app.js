let nombre = document.getElementById('nombre');
let email  = document.getElementById('email');
let password  = document.getElementById('password');


function validar(){

    nombre.classList.add("validar_nombre");

}


let btn = document.getElementById('btn');


btn.addEventListener('click', validar);



