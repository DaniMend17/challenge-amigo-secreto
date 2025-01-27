let amigos = [];
let amigo = document.querySelector('.input-name');
let listaAmigos = document.getElementById('listaAmigos');
let amigoSecreto = document.getElementById('resultado')

function agregarAmigo(){
    if (validaNombre(amigo.value.trim())) {
        amigos.push(amigo.value);
        amigoSecreto.innerHTML = '';
        amigo.value = '';
        listaAmigos.innerHTML = mostrarAmigos(0); 
    } else {
        alert('Por favor ingrese un nombre valido');
    }
}

function sortearAmigo(){
    if (amigos.length > 0) {
        listaAmigos.innerHTML = '';
        amigoSecreto.innerHTML = `<li> El amigo secreto sorteado es:
         ${amigos.length > 1? amigos[eligeAmigoSecreto()]: amigos[0]} </li>`;
    }else{
        alert('Por favor añade un amigo antes de sortear.')
    }
}

function eligeAmigoSecreto(){
    return Math.floor(Math.random() * (amigos.length));
}

function mostrarAmigos(i){
    if (i > amigos.length - 1) {
        return '';
    }
    return `<li> ${amigos[i]} </li> \n` + mostrarAmigos(i + 1);
}

function validaNombre(amigo){
    return amigo  === ''? false : true;
}