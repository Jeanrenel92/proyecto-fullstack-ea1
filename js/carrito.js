// 1. Cargar el carrito desde la memoria del navegador (localStorage) o crear uno vacío
let carritoCompras = JSON.parse(localStorage.getItem('carritoMilSabores')) || [];

// 2. Función para guardar los cambios en la memoria
function guardarCarrito() {
    localStorage.setItem('carritoMilSabores', JSON.stringify(carritoCompras));
}

// 3. Función principal de renderizado (Actualiza el Offcanvas y la Página del Carrito)
function renderizarCarrito() {
    // Guardar siempre el estado actual en memoria
    guardarCarrito();

    // Elementos del Offcanvas (pueden no estar en todas las páginas, por eso validaremos con if)
    const contenedorOffcanvas = document.getElementById('contenedor-items-carrito');
    const spanCantidad = document.getElementById('cantidad-total');
    const spanContador = document.getElementById('contador-carrito');
    const spanPrecioOffcanvas = document.getElementById('precio-total');

    // Elementos de la página carrito.html
    const contenedorPagina = document.getElementById('contenedor-carrito-pagina');
    const spanPrecioPagina = document.getElementById('precio-total-pagina');

    // Si el carrito está vacío
    if (carritoCompras.length === 0) {
        if (contenedorOffcanvas) contenedorOffcanvas.innerHTML = '<p class="text-center text-muted mt-5">Tu carrito está vacío.</p>';
        if (spanCantidad) spanCantidad.textContent = 0;
        if (spanContador) spanContador.textContent = 0;
        if (spanPrecioOffcanvas) spanPrecioOffcanvas.textContent = 0;

        if (contenedorPagina) contenedorPagina.innerHTML = '<div class="text-center py-5"><h4 class="text-muted">Tu carrito está vacío</h4><p>¡Agrega algunos pasteles deliciosos del catálogo!</p></div>';
        if (spanPrecioPagina) spanPrecioPagina.textContent = 0;
        return;
    }

    let htmlOffcanvas = '';
    let htmlPagina = '';
    let totalPrecio = 0;
    let totalCantidad = 0;

    carritoCompras.forEach((producto, index) => {
        totalPrecio += (producto.precio * producto.cantidad);
        totalCantidad += producto.cantidad;

        // --- Dibuja la tarjeta pequeña para el Offcanvas ---
        htmlOffcanvas += `
            <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3">
                <img src="${producto.imagen}" width="50" height="50" class="rounded" style="object-fit: cover;" alt="${producto.nombre}">
                <div class="flex-grow-1 ms-3">
                    <h6 class="mb-0 small fw-bold">${producto.nombre}</h6>
                    <span class="text-muted small">$${producto.precio.toLocaleString('es-CL')}</span>
                </div>
                <div class="d-flex flex-column align-items-end">
                    <button class="btn btn-link text-danger p-0 text-decoration-none small mb-2" onclick="eliminarDelCarrito(${index})">Eliminar</button>
                    <div class="btn-group btn-group-sm">
                        <button class="btn btn-outline-danger px-2" onclick="cambiarCantidad(${index}, -1)">-</button>
                        <span class="btn btn-outline-secondary disabled px-3 text-dark border-danger-subtle">${producto.cantidad}</span>
                        <button class="btn btn-danger px-2" onclick="cambiarCantidad(${index}, 1)">+</button>
                    </div>
                </div>
            </div>
        `;

        // --- Dibuja la fila grande para la página carrito.html ---
        htmlPagina += `
            <div class="row align-items-center mb-3 border-bottom pb-3">
                <div class="col-4 col-md-2 text-center">
                    <img src="${producto.imagen}" class="img-fluid rounded" style="max-height: 80px; object-fit: cover;" alt="${producto.nombre}">
                </div>
                <div class="col-8 col-md-4 mt-2 mt-md-0">
                    <h5 class="mb-1 fw-bold">${producto.nombre}</h5>
                    <span class="text-muted">$${producto.precio.toLocaleString('es-CL')} unitario</span>
                </div>
                <div class="col-6 col-md-3 mt-3 mt-md-0">
                    <div class="input-group input-group-sm w-75 mx-auto mx-md-0">
                        <button class="btn btn-outline-danger" onclick="cambiarCantidad(${index}, -1)">-</button>
                        <input type="text" class="form-control text-center bg-white" value="${producto.cantidad}" readonly>
                        <button class="btn btn-danger" onclick="cambiarCantidad(${index}, 1)">+</button>
                    </div>
                </div>
                <div class="col-6 col-md-3 mt-3 mt-md-0 text-end d-flex flex-column align-items-end">
                    <h5 class="fw-bold mb-2">$${(producto.precio * producto.cantidad).toLocaleString('es-CL')}</h5>
                    <button class="btn btn-sm btn-outline-danger" onclick="eliminarDelCarrito(${index})">🗑️️ Eliminar</button>
                </div>
            </div>
        `;
    });

    // Inyecta en Offcanvas
    if (contenedorOffcanvas) contenedorOffcanvas.innerHTML = htmlOffcanvas;
    if (spanCantidad) spanCantidad.textContent = totalCantidad;
    if (spanContador) spanContador.textContent = totalCantidad;
    if (spanPrecioOffcanvas) spanPrecioOffcanvas.textContent = totalPrecio.toLocaleString('es-CL');

    // Inyecta en la página principal del carrito
    if (contenedorPagina) contenedorPagina.innerHTML = htmlPagina;
    if (spanPrecioPagina) spanPrecioPagina.textContent = totalPrecio.toLocaleString('es-CL');
}

// 4. Funciones de modificación de productos
function cambiarCantidad(indice, variacion) {
    let producto = carritoCompras[indice];
    producto.cantidad += variacion;
    if (producto.cantidad <= 0) {
        carritoCompras.splice(indice, 1);
    }
    renderizarCarrito();
}

function eliminarDelCarrito(indice) {
    carritoCompras.splice(indice, 1);
    renderizarCarrito();
}

// Botón de vaciar carro
document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'btn-vaciar') {
        carritoCompras = [];
        renderizarCarrito();
    }
});

function agregarAlCarrito(codigoProducto) {
    const productoNuevo = productosIniciales.find(p => p.codigo === codigoProducto);

    if (productoNuevo) {
        const productoExistente = carritoCompras.find(p => p.codigo === codigoProducto);
        if (productoExistente) {
            productoExistente.cantidad += 1;
        } else {
            carritoCompras.push({
                codigo: productoNuevo.codigo,
                nombre: productoNuevo.nombre,
                precio: productoNuevo.precio,
                imagen: `../images/picture/${productoNuevo.imagen}`, 
                cantidad: 1
            });
        }
        
        renderizarCarrito();
        
        const modalDetalleElement = document.getElementById('modalDetalleProducto');
        if (modalDetalleElement) {
            const modalDetalle = bootstrap.Modal.getInstance(modalDetalleElement);
            if (modalDetalle) modalDetalle.hide();
        }
        
        const panelOffcanvasElement = document.getElementById('panelCarrito');
        if (panelOffcanvasElement) {
            let panelOffcanvas = bootstrap.Offcanvas.getInstance(panelOffcanvasElement);
            if (!panelOffcanvas) panelOffcanvas = new bootstrap.Offcanvas(panelOffcanvasElement);
            panelOffcanvas.show();
        }
    }
}

document.addEventListener('DOMContentLoaded', renderizarCarrito);

const btnPagar = document.getElementById('btn-pagar');

if (btnPagar) {
    btnPagar.addEventListener('click', function() {
        // 1. Validar que el carrito no esté vacío
        if (carritoCompras.length === 0) {
            alert("Tu carrito está vacío. ¡Agrega algunos pasteles antes de pagar!");
            return;
        }

        // 2. Generar un número de orden aleatorio de 6 dígitos para darle realismo
        const numeroOrden = Math.floor(100000 + Math.random() * 900000);
        
        // 3. Calcular el total final para mostrarlo en el mensaje
        let total = 0;
        carritoCompras.forEach(p => total += (p.precio * p.cantidad));

        // 4. Mostrar el mensaje de éxito (Simulación)
        alert(`¡Pago Procesado con Éxito! 🎉\n\nTu número de orden es: #${numeroOrden}\nTotal pagado: $${total.toLocaleString('es-CL')}\n\nGracias por comprar en 1000 Sabores. Serás redirigido al inicio.`);

        // 5. Limpiar el carrito de compras (fundamental en un e-commerce real)
        carritoCompras = [];
        renderizarCarrito(); // Esto actualizará la vista y el localStorage

        // 6. Redirigir al usuario al Home para reiniciar la experiencia
        window.location.href = '../index.html';
    });
}