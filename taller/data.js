"use strict";
// Datos de las series
const series = [
    { id: 1, nombre: 'Breaking Bad', canal: 'AMC', temporadas: 5, descripcion: 'serie de drama' },
    { id: 2, nombre: 'Stranger Things', canal: 'Netflix', temporadas: 4, descripcion: 'serie de drama' },
    { id: 3, nombre: 'The Mandalorian', canal: 'Disney+', temporadas: 2, descripcion: 'serie de drama' },
    { id: 4, nombre: 'Game of Thrones', canal: 'HBO', temporadas: 8, descripcion: 'serie de drama' },
    { id: 5, nombre: 'Friends', canal: 'NBC', temporadas: 10, descripcion: 'serie de drama' },
];
// Función para crear la tabla HTML
function createTable() {
    const table = document.createElement('table');
    table.innerHTML = `
        <thead>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Canal</th>
                <th>Temporadas</th>
            </tr>
        </thead>
        <tbody>
            ${series.map(serie => `
                <tr>
                    <td>${serie.id}</td>
                    <td>${serie.nombre}</td>
                    <td>${serie.canal}</td>
                    <td>${serie.temporadas}</td>
                </tr>
            `).join('')}
        </tbody>
    `;
    document.body.appendChild(table);
    const serieNameCells = table.querySelectorAll('.serie-name');
    serieNameCells.forEach(cell => {
        cell.addEventListener('click', () => {
        });
    });
}
// Llamar a la función para crear la tabla al cargar la página
window.onload = createTable;
