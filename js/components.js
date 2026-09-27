const estaEnPages = window.location.pathname.includes('/pages/');
const base = estaEnPages ? '../' : '';

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
                <li><a href="${base}pages/blog.html">Nuestro Blog</a></li>
                <li><a href="${base}pages/contacto.html">Contactanos</a></li>
                <li><a href="${base}pages/pedidos.html">Pedidos</a></li>
            </ul>

            <a href="${base}pages/login.html" class="btn-login">
                Iniciar sesión
            </a>

            <a href="${base}pages/carrito.html" class="btn-carrito">
                🛒
            </a>
        </nav>
    </div>
</header>
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
                <li><a href="">Instagram</a></li>
                <li><a href="">Facebook</a></li>
                <li><a href="">TikTok</a></li>
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
        <p>© 2026 1000 Sabores. Todos los derechos reservados.</p>
    </div>
</footer>
`;

document.getElementById('header').innerHTML = header;
document.getElementById('footer').innerHTML = footer;