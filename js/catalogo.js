const CLAVE_PRODUCTOS = "productos";

const productosIniciales = [
    {
        codigo: "TC001",
        categoria: "Tortas Cuadradas",
        nombre: "Torta Cuadrada de Chocolate",
        precio: 45000,
        descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas. Personalizable con mensajes especiales.",
        imagen: "TC001.jpg"
    },
    {
        codigo: "TC002",
        categoria: "Tortas Cuadradas",
        nombre: "Torta Cuadrada de Frutas",
        precio: 50000,
        descripcion: "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones.",
        imagen: "TC002.jpg"
    },
    {
        codigo: "TT001",
        categoria: "Tortas Circulares",
        nombre: "Torta Circular de Vainilla",
        precio: 40000,
        descripcion: "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión.",
        imagen: "TT001.jpg"
    },
    {
        codigo: "TT002",
        categoria: "Tortas Circulares",
        nombre: "Torta Circular de Manjar",
        precio: 42000,
        descripcion: "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos.",
        imagen: "TT002.jpg"
    },
    {
        codigo: "PI001",
        categoria: "Postres Individuales",
        nombre: "Mousse de Chocolate",
        precio: 5000,
        descripcion: "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate.",
        imagen: "PI001.jpg"
    },
    {
        codigo: "PI002",
        categoria: "Postres Individuales",
        nombre: "Tiramisú Clásico",
        precio: 5500,
        descripcion: "Un postre italiano individual con capas de café, mascarpone y cacao, perfecto para finalizar cualquier comida.",
        imagen: "PI002.jpg"
    },
    {
        codigo: "PSA001",
        categoria: "Productos Sin Azúcar",
        nombre: "Torta Sin Azúcar de Naranja",
        precio: 48000,
        descripcion: "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables.",
        imagen: "PSA001.jpg"
    },
    {
        codigo: "PSA002",
        categoria: "Productos Sin Azúcar",
        nombre: "Cheesecake Sin Azúcar",
        precio: 47000,
        descripcion: "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa.",
        imagen: "PSA002.jpg"
    },
    {
        codigo: "PT001",
        categoria: "Pastelería Tradicional",
        nombre: "Empanada de Manzana",
        precio: 3000,
        descripcion: "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda.",
        imagen: "PT001.jpg"
    },
    {
        codigo: "PT002",
        categoria: "Pastelería Tradicional",
        nombre: "Tarta de Santiago",
        precio: 6000,
        descripcion: "Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos.",
        imagen: "PT002.jpg"
    },
    {
        codigo: "PG001",
        categoria: "Productos Sin Gluten",
        nombre: "Brownie Sin Gluten",
        precio: 4000,
        descripcion: "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor.",
        imagen: "PG001.jpg"
    },
    {
        codigo: "PG002",
        categoria: "Productos Sin Gluten",
        nombre: "Pan Sin Gluten",
        precio: 3500,
        descripcion: "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida.",
        imagen: "PG002.jpg"
    },
    {
        codigo: "PV001",
        categoria: "Productos Vegana",
        nombre: "Torta Vegana de Chocolate",
        precio: 50000,
        descripcion: "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos.",
        imagen: "PV001.jpg"
    },
    {
        codigo: "PV002",
        categoria: "Productos Vegana",
        nombre: "Galletas Veganas de Avena",
        precio: 4500,
        descripcion: "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano.",
        imagen: "PV002.jpg"
    },
    {
        codigo: "TE001",
        categoria: "Tortas Especiales",
        nombre: "Torta Especial de Cumpleaños",
        precio: 55000,
        descripcion: "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos.",
        imagen: "TE001.jpg"
    },
    {
        codigo: "TE002",
        categoria: "Tortas Especiales",
        nombre: "Torta Especial de Boda",
        precio: 60000,
        descripcion: "Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda.",
        imagen: "TE002.jpg"
    }
];

let productos = [];

const listaProductos = document.getElementById("listaProductos");
const buscarProducto = document.getElementById("buscarProducto");
const filtrarCategoria = document.getElementById("filtrarCategoria");


function cargarProductos() {

    const productosGuardados = localStorage.getItem(CLAVE_PRODUCTOS);

    if (!productosGuardados) {

        productos = [...productosIniciales];

        localStorage.setItem(
            CLAVE_PRODUCTOS,
            JSON.stringify(productos)
        );

        return;
    }

    try {

        productos = JSON.parse(productosGuardados);

        if (!Array.isArray(productos)) {
            productos = [...productosIniciales];

            localStorage.setItem(
                CLAVE_PRODUCTOS,
                JSON.stringify(productos)
            );
        }

    } catch (error) {

        productos = [...productosIniciales];

        localStorage.setItem(
            CLAVE_PRODUCTOS,
            JSON.stringify(productos)
        );
    }
}


function formatearPrecio(valor) {

    return new Intl.NumberFormat("es-CL", {
        style: "currency",
        currency: "CLP",
        maximumFractionDigits: 0
    }).format(valor);
}


function mostrarProductos() {

    const textoBusqueda = buscarProducto
        ? buscarProducto.value.toLowerCase().trim()
        : "";

    const categoriaSeleccionada = filtrarCategoria
        ? filtrarCategoria.value
        : "";


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
            <div class="sin-productos">
                No se encontraron productos.
            </div>
        `;

        return;
    }


    productosFiltrados.forEach(producto => {

        const productoHTML = document.createElement("article");

        productoHTML.className = "producto";


        productoHTML.innerHTML = `
            <div class="producto-imagen-contenedor">

                <img
                    src="../images/picture/${producto.imagen}"
                    alt="${producto.nombre}"
                    class="producto-imagen"
                >

            </div>

            <div class="producto-contenido">

                <span class="producto-categoria">
                    ${producto.categoria}
                </span>

                <h3>
                    ${producto.nombre}
                </h3>

                <p class="producto-descripcion">
                    ${producto.descripcion}
                </p>

                <div class="producto-pie">

                    <span class="producto-precio">
                        ${formatearPrecio(producto.precio)}
                    </span>

                    <button
                        type="button"
                        class="btn-agregar-carrito"
                        data-codigo="${producto.codigo}">
                        Agregar al carrito
                    </button>

                </div>

            </div>
        `;


        listaProductos.appendChild(productoHTML);
    });
}


function agregarAlCarrito(codigoProducto) {

    const producto = productos.find(
        producto => producto.codigo === codigoProducto
    );

    if (!producto) {
        return;
    }


    let carrito = JSON.parse(
        localStorage.getItem("carrito")
    ) || [];


    const productoExistente = carrito.find(
        item => item.codigo === codigoProducto
    );


    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({
            codigo: producto.codigo,
            nombre: producto.nombre,
            precio: producto.precio,
            imagen: producto.imagen,
            cantidad: 1
        });
    }


    localStorage.setItem(
        "carrito",
        JSON.stringify(carrito)
    );


    alert("Producto agregado al carrito.");
}


if (buscarProducto) {

    buscarProducto.addEventListener(
        "input",
        mostrarProductos
    );
}


if (filtrarCategoria) {

    filtrarCategoria.addEventListener(
        "change",
        mostrarProductos
    );
}


if (listaProductos) {

    listaProductos.addEventListener(
        "click",
        function(event) {

            const boton = event.target.closest(
                ".btn-agregar-carrito"
            );

            if (!boton) {
                return;
            }

            agregarAlCarrito(
                boton.dataset.codigo
            );
        }
    );
}


cargarProductos();
mostrarProductos();