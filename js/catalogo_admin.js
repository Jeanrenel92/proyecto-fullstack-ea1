const CLAVE_PRODUCTOS = "productos";

const productosIniciales = [
    {
        codigo: "TC001",
        categoria: "Tortas Cuadradas",
        nombre: "Torta Cuadrada de Chocolate",
        precio: 45000,
        descripcion: "Deliciosa torta cuadrada de chocolate.",
        imagen: "Torta Cuadrada de Chocolate.png"
    },
    {
        codigo: "TC002",
        categoria: "Tortas Cuadradas",
        nombre: "Torta Cuadrada de Frutas",
        precio: 50000,
        descripcion: "Torta cuadrada decorada con frutas frescas.",
        imagen: "Torta Cuadrada de Frutas.png"
    },
    {
        codigo: "TT001",
        categoria: "Tortas Circulares",
        nombre: "Torta Circular de Vainilla",
        precio: 40000,
        descripcion: "Suave torta circular de vainilla.",
        imagen: "Torta Circular de Vainilla.png"
    },
    {
        codigo: "TT002",
        categoria: "Tortas Circulares",
        nombre: "Torta Circular de Manjar",
        precio: 42000,
        descripcion: "Torta circular rellena con delicioso manjar.",
        imagen: "Torta Circular de Manjar.png"
    },
    {
        codigo: "PI001",
        categoria: "Postres Individuales",
        nombre: "Mousse de Chocolate",
        precio: 5000,
        descripcion: "Cremoso mousse individual de chocolate.",
        imagen: "Mousse de Chocolate.png"
    },
    {
        codigo: "PI002",
        categoria: "Postres Individuales",
        nombre: "Tiramisú Clásico",
        precio: 5500,
        descripcion: "Clásico tiramisú individual.",
        imagen: "Tiramisú Clásico.png"
    },
    {
        codigo: "PSA001",
        categoria: "Productos Sin Azúcar",
        nombre: "Torta Sin Azúcar de Naranja",
        precio: 48000,
        descripcion: "Torta de naranja preparada sin azúcar.",
        imagen: "Torta Sin Azúcar de Naranja.png"
    },
    {
        codigo: "PSA002",
        categoria: "Productos Sin Azúcar",
        nombre: "Cheesecake Sin Azúcar",
        precio: 47000,
        descripcion: "Cremoso cheesecake preparado sin azúcar.",
        imagen: "Cheesecake Sin Azúcar.png"
    },
    {
        codigo: "PT001",
        categoria: "Pastelería Tradicional",
        nombre: "Empanada de Manzana",
        precio: 3000,
        descripcion: "Tradicional empanada rellena de manzana.",
        imagen: "Empanada de Manzana.png"
    },
    {
        codigo: "PT002",
        categoria: "Pastelería Tradicional",
        nombre: "Tarta de Santiago",
        precio: 6000,
        descripcion: "Tradicional tarta de Santiago.",
        imagen: "Tarta de Santiago.png"
    },
    {
        codigo: "PG001",
        categoria: "Productos Sin Gluten",
        nombre: "Brownie Sin Gluten",
        precio: 4000,
        descripcion: "Delicioso brownie preparado sin gluten.",
        imagen: "Brownie Sin Gluten.png"
    },
    {
        codigo: "PG002",
        categoria: "Productos Sin Gluten",
        nombre: "Pan Sin Gluten",
        precio: 3500,
        descripcion: "Pan artesanal preparado sin gluten.",
        imagen: "Pan Sin Gluten.png"
    },
    {
        codigo: "PV001",
        categoria: "Productos Vegana",
        nombre: "Torta Vegana de Chocolate",
        precio: 50000,
        descripcion: "Torta de chocolate preparada completamente con ingredientes veganos.",
        imagen: "Torta Vegana de Chocolate.png"
    },
    {
        codigo: "PV002",
        categoria: "Productos Vegana",
        nombre: "Galletas Veganas de Avena",
        precio: 4500,
        descripcion: "Galletas de avena preparadas con ingredientes veganos.",
        imagen: "Galletas Veganas de Avena.png"
    },
    {
        codigo: "TE001",
        categoria: "Tortas Especiales",
        nombre: "Torta Especial de Cumpleaños",
        precio: 55000,
        descripcion: "Torta especial para celebraciones de cumpleaños.",
        imagen: "Torta Especial de Cumpleaños.png"
    },
    {
        codigo: "TE002",
        categoria: "Tortas Especiales",
        nombre: "Torta Especial de Boda",
        precio: 60000,
        descripcion: "Torta especial diseñada para celebraciones de boda.",
        imagen: "Torta Especial de Boda.png"
    }
];

let productos = [];
let productoEditando = null;

const formularioContenedor = document.getElementById("formularioContenedor");
const formularioProducto = document.getElementById("formularioProducto");
const tituloFormulario = document.getElementById("tituloFormulario");
const btnGuardar = document.getElementById("btnGuardar");
const btnAgregarProducto = document.getElementById("btnAgregarProducto");
const btnCerrarFormulario = document.getElementById("btnCerrarFormulario");
const btnCancelar = document.getElementById("btnCancelar");
const listaProductos = document.getElementById("listaProductos");
const buscarProducto = document.getElementById("buscarProducto");
const filtrarCategoria = document.getElementById("filtrarCategoria");

const codigo = document.getElementById("codigo");
const categoria = document.getElementById("categoria");
const nombre = document.getElementById("nombre");
const precio = document.getElementById("precio");
const descripcion = document.getElementById("descripcion");
const imagen = document.getElementById("imagen");

function cargarProductos() {
    productos = [...productosIniciales];
}

function guardarProductos() {
    localStorage.setItem(CLAVE_PRODUCTOS, JSON.stringify(productos));
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
            producto.codigo.toLowerCase().includes(textoBusqueda) ||
            producto.nombre.toLowerCase().includes(textoBusqueda) ||
            producto.categoria.toLowerCase().includes(textoBusqueda) ||
            producto.descripcion.toLowerCase().includes(textoBusqueda);

        const coincideCategoria =
            categoriaSeleccionada === "" ||
            producto.categoria === categoriaSeleccionada;

        return coincideBusqueda && coincideCategoria;
    });

    listaProductos.innerHTML = "";

    if (productosFiltrados.length === 0) {
        listaProductos.innerHTML = `
            <tr>
                <td colspan="6">
                    No se encontraron productos.
                </td>
            </tr>
        `;
        return;
    }

    productosFiltrados.forEach(producto => {
        const fila = document.createElement("tr");

        fila.innerHTML = `
            <td>
                <img
                    src="../images/picture/${producto.imagen}"
                    alt="${producto.nombre}"
                    class="producto-imagen"
                >
            </td>

            <td>
                <span class="producto-codigo">
                    ${producto.codigo}
                </span>
            </td>

            <td>
                ${producto.categoria}
            </td>

            <td>
                ${producto.nombre}
            </td>

            <td>
                <span class="producto-precio">
                    ${formatearPrecio(producto.precio)}
                </span>
            </td>

            <td>
                <div class="acciones-producto">
                    <button
                        type="button"
                        class="btn-editar"
                        data-codigo="${producto.codigo}">
                        Editar
                    </button>

                    <button
                        type="button"
                        class="btn-eliminar"
                        data-codigo="${producto.codigo}">
                        Eliminar
                    </button>
                </div>
            </td>
        `;

        listaProductos.appendChild(fila);
    });
}

function mostrarFormularioAgregar() {
    productoEditando = null;

    formularioProducto.reset();

    tituloFormulario.textContent = "Agregar producto";
    btnGuardar.textContent = "Agregar producto";

    formularioContenedor.classList.add("activo");

    codigo.focus();
}

function mostrarFormularioEditar(codigoProducto) {
    const producto = productos.find(
        producto => producto.codigo === codigoProducto
    );

    if (!producto) {
        return;
    }

    productoEditando = codigoProducto;

    codigo.value = producto.codigo;
    categoria.value = producto.categoria;
    nombre.value = producto.nombre;
    precio.value = producto.precio;
    descripcion.value = producto.descripcion;
    imagen.value = producto.imagen;

    tituloFormulario.textContent = "Editar producto";
    btnGuardar.textContent = "Guardar cambios";

    formularioContenedor.classList.add("activo");

    codigo.focus();
}

function cerrarFormulario() {
    productoEditando = null;

    formularioProducto.reset();

    tituloFormulario.textContent = "Agregar producto";
    btnGuardar.textContent = "Agregar producto";

    formularioContenedor.classList.remove("activo");
}

function agregarProducto(event) {
    event.preventDefault();

    const nuevoCodigo = codigo.value.trim().toUpperCase();
    const nuevaCategoria = categoria.value;
    const nuevoNombre = nombre.value.trim();
    const nuevoPrecio = Number(precio.value);
    const nuevaDescripcion = descripcion.value.trim();
    const nuevaImagen = imagen.value.trim();

    if (
        !nuevoCodigo ||
        !nuevaCategoria ||
        !nuevoNombre ||
        nuevoPrecio < 0 ||
        !nuevaDescripcion ||
        !nuevaImagen
    ) {
        return;
    }

    const codigoExiste = productos.some(
        producto => producto.codigo === nuevoCodigo
    );

    if (codigoExiste) {
        alert("Ya existe un producto con ese código.");
        codigo.focus();
        return;
    }

    productos.push({
        codigo: nuevoCodigo,
        categoria: nuevaCategoria,
        nombre: nuevoNombre,
        precio: nuevoPrecio,
        descripcion: nuevaDescripcion,
        imagen: nuevaImagen
    });

    guardarProductos();
    mostrarProductos();
    cerrarFormulario();
}

function actualizarProducto(event) {
    event.preventDefault();

    const nuevoCodigo = codigo.value.trim().toUpperCase();
    const nuevaCategoria = categoria.value;
    const nuevoNombre = nombre.value.trim();
    const nuevoPrecio = Number(precio.value);
    const nuevaDescripcion = descripcion.value.trim();
    const nuevaImagen = imagen.value.trim();

    if (
        !nuevoCodigo ||
        !nuevaCategoria ||
        !nuevoNombre ||
        nuevoPrecio < 0 ||
        !nuevaDescripcion ||
        !nuevaImagen
    ) {
        return;
    }

    const codigoExiste = productos.some(
        producto =>
            producto.codigo === nuevoCodigo &&
            producto.codigo !== productoEditando
    );

    if (codigoExiste) {
        alert("Ya existe otro producto con ese código.");
        codigo.focus();
        return;
    }

    const indice = productos.findIndex(
        producto => producto.codigo === productoEditando
    );

    if (indice === -1) {
        return;
    }

    productos[indice] = {
        codigo: nuevoCodigo,
        categoria: nuevaCategoria,
        nombre: nuevoNombre,
        precio: nuevoPrecio,
        descripcion: nuevaDescripcion,
        imagen: nuevaImagen
    };

    guardarProductos();
    mostrarProductos();
    cerrarFormulario();
}

function eliminarProducto(codigoProducto) {
    const producto = productos.find(
        producto => producto.codigo === codigoProducto
    );

    if (!producto) {
        return;
    }

    const confirmar = confirm(
        `¿Estás seguro de eliminar "${producto.nombre}"?`
    );

    if (!confirmar) {
        return;
    }

    productos = productos.filter(
        producto => producto.codigo !== codigoProducto
    );

    guardarProductos();
    mostrarProductos();
}

formularioProducto.addEventListener("submit", event => {
    if (productoEditando) {
        actualizarProducto(event);
    } else {
        agregarProducto(event);
    }
});

btnAgregarProducto.addEventListener(
    "click",
    mostrarFormularioAgregar
);

btnCerrarFormulario.addEventListener(
    "click",
    cerrarFormulario
);

btnCancelar.addEventListener(
    "click",
    cerrarFormulario
);

buscarProducto.addEventListener(
    "input",
    mostrarProductos
);

filtrarCategoria.addEventListener(
    "change",
    mostrarProductos
);

listaProductos.addEventListener("click", event => {
    const botonEditar = event.target.closest(".btn-editar");
    const botonEliminar = event.target.closest(".btn-eliminar");

    if (botonEditar) {
        mostrarFormularioEditar(
            botonEditar.dataset.codigo
        );
    }

    if (botonEliminar) {
        eliminarProducto(
            botonEliminar.dataset.codigo
        );
    }
});

cargarProductos();
mostrarProductos();