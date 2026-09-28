document.addEventListener("DOMContentLoaded", () => {
    const contenedor = document.getElementById("contenedor-productos");

    if (contenedor) {
        let htmlTarjetas = "";

        productosIniciales.forEach(producto => {
            htmlTarjetas += `
                <div class="col">
                    <div class="card h-100 shadow-sm border-0 card-producto">
                        <div class="overflow-hidden rounded-top">
                            <img src="/images/picture/${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        </div>
                        <div class="card-body text-center">
                            <h5 class="card-title fw-bold">${producto.nombre}</h5>
                            <p class="card-text text-muted">$${producto.precio.toLocaleString('es-CL')}</p>
                            <a href="#detalle" class="stretched-link"></a>
                        </div>
                    </div>
                </div>
            `;
        });

        contenedor.innerHTML = htmlTarjetas;
    }
});