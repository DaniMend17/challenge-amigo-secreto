Descripción del funcionamiento de la lógica del juego del Amigo Secreto.

En el archivo app.js se encuentra el código fuente del funcionamiento de la aplicación.

Variables del programa. 
  let amigos = []; //Representa el arreglo que va a guardar la lista de los amigos ingresados por el usuario.
  let amigo = document.querySelector('.input-name'); //Representa el inputText en donde el usuario inserta el nombre del amigo.
  let listaAmigos = document.getElementById('listaAmigos'); //Representa el elemento html que mostrara los amigos ingresados por el usuario.
  let amigoSecreto = document.getElementById('resultado'); //Representa el elemento html que mostrará el resultado del amigo secreto.

Funciones del proyecto.
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
Descripción: Función que agrega un amigo a la lista de amigos del programa validando que el tipo de dato ingresado por el usuario sea valido.

function sortearAmigo(){
    if (amigos.length > 0) {
        listaAmigos.innerHTML = '';
        amigoSecreto.innerHTML = `<li> El amigo secreto sorteado es:
         ${amigos.length > 1? amigos[eligeAmigoSecreto()]: amigos[0]} </li>`;
    }else{
        alert('Por favor añade un amigo antes de sortear.');
    }
}
Descripción: Función que elige de manera aleatoria un amigo de la lista de amigos del programa validando que el usuario haya ingresado al menos un amigo antes de sortear.

function eligeAmigoSecreto(){
    return Math.floor(Math.random() * (amigos.length));
}
Descripción: Función que se encarga de devolver una posición aleatoria en el arreglo de amigos.

function mostrarAmigos(i){
    if (i > amigos.length - 1) {
        return '';
    }
    return `<li> ${amigos[i]} </li> \n` + mostrarAmigos(i + 1);
}
Descripción: Función que se encarga de mostrar el arreglo de amigos en un elemento html.

function validaNombre(amigo){
    return amigo  === ''? false : true;
}
Descripción: Función que se encarga de validar que el texto  ingresado por el usuario sea valido y no sea vacío.

