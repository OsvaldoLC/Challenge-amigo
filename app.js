// Array global para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos al array y mostrar la lista
function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return;
    }

    amigos.push(nombre);
    input.value = ""; // Limpiar input

    mostrarListaAmigos(); // Mostrar la lista actualizada
}

// Función para mostrar la lista de amigos en pantalla
function mostrarListaAmigos() {
    let lista = document.getElementById('listaAmigos');
    lista.innerHTML = ""; // Limpiar la lista para evitar duplicados

    for (let i = 0; i < amigos.length; i++) {
        let elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        lista.appendChild(elementoLista);
    }
}

// ✅ Función para sortear un amigo al azar
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("No hay amigos para sortear. Por favor, agregue al menos un nombre.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length); // Índice aleatorio
    let amigoSorteado = amigos[indiceAleatorio]; // Nombre sorteado

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<li>${amigoSorteado}</li>`; // Mostrar resultado
}

