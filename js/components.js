const path = window.location.pathname;
const estaEnPages = path.includes('/pages/');
const base = estaEnPages ? '../' : '';

// 1. Arreglo con las palabras clave de las páginas donde NO queremos el carrito
const paginasSinCarrito = ['login', 'registro', 'nosotros', 'contacto', 'blog'];

// 2. Verificamos si la URL actual contiene alguna de las palabras de la lista
const ocultarCarrito = paginasSinCarrito.some(pagina => path.includes(pagina));

// 3. Si estamos en alguna de esas páginas, el botón queda vacío (''). Si no, dibujamos el botón.
const botonCarritoHTML = ocultarCarrito ? '' : `
    <a href="#panelCarrito" class="btn-carrito text-decoration-none" data-bs-toggle="offcanvas" role="button" aria-controls="panelCarrito">
        🛒 <span id="contador-carrito" class="badge bg-danger rounded-pill fs-6" style="font-size: 0.6rem !important; vertical-align: top;">0</span>
    </a>
`;

// 4. Lo mismo para el panel lateral
const panelCarritoHTML = ocultarCarrito ? '' : `
    <div class="offcanvas offcanvas-end" tabindex="-1" id="panelCarrito" aria-labelledby="tituloCarrito">
        <div class="offcanvas-header border-bottom">
            <h5 class="offcanvas-title fw-bold" id="tituloCarrito">Tienes <span id="cantidad-total">0</span> productos</h5>
            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Cerrar"></button>
        </div>
        
        <div class="offcanvas-body" id="contenedor-items-carrito">
            <p class="text-center text-muted mt-5">Tu carrito está vacío.</p>
        </div>
        
        <div class="offcanvas-footer p-3 border-top">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <a href="#" id="btn-vaciar" class="text-danger text-decoration-none small">Vaciar carro</a>
                <h6 class="fw-bold mb-0">Total: $<span id="precio-total">0</span></h6>
            </div>
            <a href="${base}pages/carrito.html" class="btn btn-danger w-100 fw-bold">Continuar</a>
        </div>
    </div>
`;

// 5. Armamos el header inyectando las variables
const header = `
<header class="header">
    <div class="contenedor">
        <div class="logo">
            <img src="${base}images/logo/mil sabores.jpg" alt="Logo de 1000 Sabores">
            <span>1000 Sabores</span>
        </div>

        <nav>
            <ul class="menu">
                <li><a href="${base}index.html">Inicio</a></li>
                <li><a href="${base}pages/nosotros.html">Sobre nosotros</a></li>
                <li><a href="${base}pages/catalogo.html">Productos</a></li>
                <li><a href="${base}pages/blog.html">Blog</a></li>
                <li><a href="${base}pages/contacto.html">Contactanos</a></li>
            </ul>

            <!-- Aquí se insertará el botón solo si corresponde -->
            ${botonCarritoHTML}
        </nav>
    </div>
</header>

<!-- Aquí se insertará el panel Offcanvas solo si corresponde -->
${panelCarritoHTML}
`;

const footer = `
<footer class="footer">
    <div class="contenedor footer-contenido">

        <div class="footer-columna">
            <div class="logo">
                <img src="${base}images/logo/mil sabores.jpg" alt="Logo de 1000 Sabores">
                <span>1000 Sabores</span>
            </div>

            <p>💬 contacto@1000sabores.cl</p>
            <p>📞 +56 9 1234 5678</p>
        </div>

        <div class="footer-columna">
            <h3>Síguenos en nuestras redes</h3>
            <ul>
                <li><a href="#">Instagram</a></li>
                <li><a href="#">Facebook</a></li>
                <li><a href="#">TikTok</a></li>
            </ul>
        </div>

        <div class="footer-columna">
            <h3>Ubicación</h3>
            <p>🇨🇱 Santiago, Chile</p>
            <p>Atención presencial y online</p>
        </div>

        <div class="footer-columna">
            <h3>Enlaces rápidos</h3>
            <ul>
                <li><a href="${base}index.html">Inicio</a></li>
                <li><a href="${base}pages/catalogo.html">Productos</a></li>
                <li><a href="${base}pages/nosotros.html">Sobre nosotros</a></li>
                <li><a href="${base}pages/login.html">Iniciar sesión</a></li>
            </ul>
        </div>

    </div>

    <div class="footer-bottom">
        <p>© 2026 Todos los derechos reservados.</p>
    </div>
</footer>
`;

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;