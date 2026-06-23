const imagenes = [
    "img/cangregito.png",
    "img/PULPIN.JPG",
    "img/cazuela.jpg",
    "img/ceviche.jpg",
    
    
];

let indice = 0;

function cambiarImagen() {
    indice++;

    if (indice >= imagenes.length) {
        indice = 0;
    }

    // 1. Cambia la ruta de la imagen en el HTML
    document.getElementById("slider").src = imagenes[indice];

    // 2. Actualiza la posición de los puntos indicadores
    actualizarPuntos();
}

function actualizarPuntos() {
    // Selecciona todos los círculos dentro del contenedor .puntos
    const puntos = document.querySelectorAll(".puntos span");
    
    // Quita la clase 'activo' de todos los puntos
    puntos.forEach(punto => punto.classList.remove("activo"));
    
    // Añade la clase 'activo' únicamente al punto que corresponde a la imagen actual
    if (puntos[indice]) {
        puntos[indice].classList.add("activo");
    }
}

// Cambia la imagen automáticamente cada 3 segundos (3000 milisegundos)
setInterval(cambiarImagen, 3000);
