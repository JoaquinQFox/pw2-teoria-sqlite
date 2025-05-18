const tableBody = document.getElementById('actorTableBody');
const paginacion = document.getElementById('paginacion');

const filasPorPagina = 20;
let paginaActual = 1;
let datos = [];

fetch('./actores')
.then(response => response.json())
.then(data => {
    datos = data;
    mostrarTabla();
    mostrarPaginacion();
})
.catch(error => console.error(error));

function mostrarTabla() {
    const indiceMenor = (paginaActual - 1) * filasPorPagina;
    const indiceMayor = indiceMenor + filasPorPagina;
    const paginaData = datos.slice(indiceMenor, indiceMayor);

    tableBody.innerHTML = '';

    let output = '';
    for (let actor of paginaData) {
        output += `<tr><td>${actor.Name}</td></tr>`
    }

    tableBody.innerHTML = output;
}

function mostrarPaginacion() {
    const paginas = Math.ceil(datos.length / filasPorPagina);
    paginacion.innerHTML = '';
    console.log(paginas);

    for (let i = 1; i < paginas + 1; i++) {
        const boton = document.createElement('button');

        boton.textContent = i;
        boton.classList.add('botonPagina');

        if (i ==  paginaActual) boton.disabled = true;

        boton.addEventListener('click', () => {
            paginaActual = i;
            mostrarTabla();
            mostrarPaginacion();
        });

        paginacion.appendChild(boton);
    }
}