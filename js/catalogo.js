const CLAVE_PRODUCTOS = "productos";

const listaProductos = document.getElementById("listaProductos");
const buscarProducto = document.getElementById("buscarProducto");
const filtrarCategoria = document.getElementById("filtrarCategoria");

let productos = [];

function cargarProductos() {
    const productosGuardados = localStorage.getItem(CLAVE_PRODUCTOS);

    if (!productosGuardados) {
        mostrarSinResultados();
        return;
    }

    try {
        productos = JSON.parse(productosGuardados);

        if (!Array.isArray(productos)) {
            productos = [];
        }
    } catch (error) {
        productos = [];
    }

    mostrarProductos();
}

function formatearPrecio(valor) {
    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0
    }).format(valor);
}

function mostrarProductos() {
    const textoBusqueda = buscarProducto.value.toLowerCase().trim();
    const categoriaSeleccionada = filtrarCategoria.value;

    const productosFiltrados = productos.filter(producto => {
        const coincideBusqueda =
            producto.nombre.toLowerCase().includes(textoBusqueda) ||
            producto.descripcion.toLowerCase().includes(textoBusqueda);

        const coincideCategoria =
            categoriaSeleccionada === "" ||
            producto.categoria === categoriaSeleccionada;

        return coincideBusqueda && coincideCategoria;
    });

    listaProductos.innerHTML = "";

    if (productosFiltrados.length === 0) {
        mostrarSinResultados();
        return;
    }

    productosFiltrados.forEach(producto => {
        const tarjeta = document.createElement("article");

        tarjeta.className = "producto-card";

        const rutaImagen = `../images/picture/${encodeURI(producto.imagen)}`;

        tarjeta.innerHTML = `
            <img
                src="${rutaImagen}"
                alt="${producto.nombre}"
                class="producto-card-imagen"
            >

            <div class="producto-card-contenido">

                <span class="producto-card-categoria">
                    ${producto.categoria}
                </span>

                <h2 class="producto-card-nombre">
                    ${producto.nombre}
                </h2>

                <p class="producto-card-descripcion">
                    ${producto.descripcion}
                </p>

                <div class="producto-card-pie">

                    <span class="producto-card-precio">
                        ${formatearPrecio(producto.precio)}
                    </span>

                    <button
                        type="button"
                        class="producto-card-boton"
                        data-codigo="${producto.codigo}">
                        Agregar al carrito
                    </button>

                </div>

            </div>
        `;

        listaProductos.appendChild(tarjeta);
    });
}

function mostrarSinResultados() {
    listaProductos.innerHTML = `
        <div class="catalogo-sin-resultados">
            <h2>No encontramos productos</h2>
            <p>
                Prueba con otro nombre o selecciona una categoría diferente.
            </p>
        </div>
    `;
}

buscarProducto.addEventListener("input", mostrarProductos);

filtrarCategoria.addEventListener("change", mostrarProductos);

cargarProductos();