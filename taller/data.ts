interface Serie {
    id: number;
    nombre: string;
    canal: string;
    temporadas: number;
    descripcion : string;
}

// Datos de las series
const series: Serie[] = [
    { id: 1, nombre: 'Breaking Bad', canal: 'AMC', temporadas: 5, descripcion:'serie de drama' },
    { id: 2, nombre: 'Stranger Things', canal: 'Netflix', temporadas: 4, descripcion:'serie de drama' },
    { id: 3, nombre: 'The Mandalorian', canal: 'Disney+', temporadas: 2, descripcion:'serie de drama' },
    { id: 4, nombre: 'Game of Thrones', canal: 'HBO', temporadas: 8 , descripcion:'serie de drama'},
    { id: 5, nombre: 'Friends', canal: 'NBC', temporadas: 10, descripcion:'serie de drama' },
];
// Función para crear la tabla HTML y agregarla al contenedor especificado
function createTable(container: HTMLElement, descriptionContainer: HTMLElement) {
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
                    <td class="serie-name" data-description="${serie.descripcion}">${serie.nombre}</td>
                    <td>${serie.canal}</td>
                    <td>${serie.temporadas}</td>
                </tr>
            `).join('')}
        </tbody>
    `;

    // Agregar la tabla al contenedor
    container.appendChild(table);

    // Agregar eventos de clic a las celdas del nombre de la serie
    const serieNameCells = container.querySelectorAll('.serie-name');
    serieNameCells.forEach(cell => {
        cell.addEventListener('click', () => {
            // Obtener la descripción de la serie desde el atributo data-description
            const description = (cell as HTMLElement).dataset.description || 'Descripción no disponible';
            // Mostrar la descripción en el contenedor especificado
            descriptionContainer.innerText = description;
        });
    });
}

// Obtener el contenedor de la tabla y el contenedor de descripción
const tableContainer = document.getElementById('table-container');
const descriptionContainer = document.getElementById('description-container');

// Llamar a la función para crear la tabla y agregarla al contenedor
if (tableContainer && descriptionContainer) {
    createTable(tableContainer, descriptionContainer);
}
