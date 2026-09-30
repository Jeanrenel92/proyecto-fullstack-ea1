document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-productos");

    if (contenedor) {
        let htmlTarjetas = "";
        
        const estaEnPages = window.location.pathname.includes('/pages/');
        const base = estaEnPages ? '../' : './';
        const esInicio = window.location.pathname.includes('index.html') || window.location.pathname.endsWith('/');
        
        const productosAMostrar = esInicio ? productosIniciales.slice(0, 3) : productosIniciales;

        productosAMostrar.forEach(producto => {
            
            // Creamos los botones SOLO si NO estamos en la página de inicio
            const botonesHTML = esInicio ? '' : `
                <div class="d-flex justify-content-between mt-3 gap-2">
                    <button class="btn btn-outline-secondary w-50" onclick="verDetalle('${producto.codigo}')">Detalle</button>
                    <button class="btn btn-danger w-50" onclick="agregarAlCarrito('${producto.codigo}')">+ Agregar</button>
                </div>
            `;

            htmlTarjetas += `
                <div class="col">
                    <div class="card h-100 shadow-sm border-0 card-producto">
                        <div class="overflow-hidden rounded-top">
                            <img src="${base}images/picture/${producto.imagen}" class="card-img-top p-3 img-catalogo" alt="${producto.nombre}">
                        </div>
                        <div class="card-body text-center pb-4">
                            <h5 class="card-title fw-bold">${producto.nombre}</h5>
                            <p class="card-text text-muted">$${producto.precio.toLocaleString('es-CL')}</p>
                            
                            <!-- Inyectamos los botones condicionales aquí -->
                            ${botonesHTML}
                        </div>
                    </div>
                </div>
            `;
        });

        contenedor.innerHTML = htmlTarjetas;
    }
});

function verDetalle(codigoProducto) {
    const producto = productosIniciales.find(p => p.codigo === codigoProducto);

    if (producto) {
        // También aplicamos la lógica de rutas al Modal para que la imagen se vea en cualquier página
        const estaEnPages = window.location.pathname.includes('/pages/');
        const base = estaEnPages ? '../' : './';

        document.getElementById('modalTitulo').textContent = producto.nombre;
        document.getElementById('modalImagen').src = `${base}images/picture/${producto.imagen}`;
        document.getElementById('modalPrecio').textContent = producto.precio.toLocaleString('es-CL');
        document.getElementById('modalDescripcion').textContent = producto.descripcion;

        const modalElement = document.getElementById('modalDetalleProducto');
        const modalBootstrap = new bootstrap.Modal(modalElement);
        modalBootstrap.show();
    }
}