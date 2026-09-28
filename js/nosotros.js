const contenidoNosotros = {
    introduccion: "Somos una pastelería dedicada a crear productos de calidad, combinando tradición, creatividad y pasión por la repostería.",

    historia: {
        titulo: "Nuestra historia",
        parrafos: [
            "1000 Sabores nació como un pequeño proyecto familiar inspirado en la pasión por la repostería y el deseo de compartir productos preparados con dedicación.",
            "Con el paso del tiempo, el proyecto fue creciendo y incorporando nuevas recetas, sabores y alternativas para diferentes gustos y necesidades.",
            "Hoy buscamos mantener ese espíritu cercano, ofreciendo una variedad de productos pensados para acompañar los momentos especiales de nuestros clientes."
        ]
    },

    mision: {
        titulo: "Nuestra misión",
        parrafos: [
            "Nuestra misión es ofrecer productos de pastelería preparados con dedicación, utilizando ingredientes de calidad y cuidando cada detalle del proceso.",
            "Buscamos entregar una experiencia agradable a nuestros clientes, combinando buen sabor, variedad y una atención cercana."
        ]
    },

    vision: {
        titulo: "Nuestra visión",
        parrafos: [
            "Nuestra visión es convertirnos en una pastelería reconocida por la calidad de nuestros productos, la variedad de nuestras preparaciones y el compromiso con nuestros clientes.",
            "Queremos continuar creciendo, incorporando nuevas ideas y manteniendo siempre la esencia que nos caracteriza."
        ]
    },

    motivacion: {
        titulo: "Nuestra motivación",
        parrafos: [
            "Nuestra principal motivación es la pasión por crear productos que puedan formar parte de momentos importantes para las personas.",
            "Cada celebración, reunión o momento especial representa una oportunidad para entregar algo preparado con dedicación y cariño."
        ]
    }
};

function cargarSeccion(tituloId, contenidoId, seccion) {
    document.getElementById(tituloId).textContent = seccion.titulo;

    const contenedor = document.getElementById(contenidoId);

    seccion.parrafos.forEach(parrafo => {
        const elemento = document.createElement("p");
        elemento.textContent = parrafo;
        contenedor.appendChild(elemento);
    });
}

document.getElementById("introduccion").textContent =
    contenidoNosotros.introduccion;

cargarSeccion(
    "tituloHistoria",
    "historia",
    contenidoNosotros.historia
);

cargarSeccion(
    "tituloMision",
    "mision",
    contenidoNosotros.mision
);

cargarSeccion(
    "tituloVision",
    "vision",
    contenidoNosotros.vision
);

cargarSeccion(
    "tituloMotivacion",
    "motivacion",
    contenidoNosotros.motivacion
);