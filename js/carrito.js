// Arreglo para almacenar los productos temporalmente
let carritoCompras = []; 

// Función principal que "dibuja" el carrito en el HTML
function renderizarCarrito() {
    const contenedor = document.getElementById('contenedor-items-carrito');
    const spanCantidad = document.getElementById('cantidad-total');
    const spanContador = document.getElementById('contador-carrito');
    const spanPrecio = document.getElementById('precio-total');

    // Si el carrito está vacío
    if (carritoCompras.length === 0) {
        contenedor.innerHTML = '<p class="text-center text-muted mt-5">Tu carrito está vacío.</p>';
        spanCantidad.textContent = 0;
        spanContador.textContent = 0;
        spanPrecio.textContent = 0;
        return;
    }

    let html = '';
    let totalPrecio = 0;
    let totalCantidad = 0;

    // Recorre los productos para crear las tarjetas miniatura
    carritoCompras.forEach((producto, index) => {
        totalPrecio += (producto.precio * producto.cantidad);
        totalCantidad += producto.cantidad;

        html += `
            <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
                <img src="${producto.imagen}" width="50" height="50" class="rounded" style="object-fit: cover;" alt="${producto.nombre}">
                
                <div class="flex-grow-1 ms-3">
                    <h6 class="mb-0 small fw-bold">${producto.nombre}</h6>
                    <span class="text-muted small">$${producto.precio.toLocaleString('es-CL')}</span>
                </div>
                
                <div class="d-flex flex-column align-items-end">
                    <!-- Botón Eliminar -->
                    <button class="btn btn-link text-danger p-0 text-decoration-none small mb-2" onclick="eliminarDelCarrito(${index})">Eliminar</button>
                    
                    <!-- Controles de Cantidad -->
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-danger px-2" onclick="cambiarCantidad(${index}, -1)">-</button>
                        <span class="btn btn-outline-secondary disabled px-3 text-dark border-danger-subtle">${producto.cantidad}</span>
                        <button class="btn btn-danger px-2" onclick="cambiarCantidad(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;
    });

    // Actualiza el HTML y los totales
    contenedor.innerHTML = html;
    spanCantidad.textContent = totalCantidad;
    spanContador.textContent = totalCantidad;
    spanPrecio.textContent = totalPrecio.toLocaleString('es-CL');
}

// Función para modificar cantidades (+ y -)
function cambiarCantidad(indice, variacion) {
    let producto = carritoCompras[indice];
    producto.cantidad += variacion;
    
    // Si la cantidad llega a 0, se elimina
    if (producto.cantidad <= 0) {
        carritoCompras.splice(indice, 1);
    }
    renderizarCarrito();
}

// Función para eliminar producto completo
function eliminarDelCarrito(indice) {
    carritoCompras.splice(indice, 1);
    renderizarCarrito();
}

// Función para vaciar todo (Asignada al botón "Vaciar carro")
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'btn-vaciar') {
        carritoCompras = [];
        renderizarCarrito();
    }
});