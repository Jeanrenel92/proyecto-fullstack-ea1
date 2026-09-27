const leerHistoria = document.getElementById("leerHistoria");
const botonesHistorias = document.querySelectorAll(".blog-leer");

const historiaCompleta = document.getElementById("historiaCompleta");
const cerrarHistoria = document.getElementById("cerrarHistoria");

const imagenHistoria = document.getElementById("imagenHistoria");
const categoriaHistoria = document.getElementById("categoriaHistoria");
const tituloHistoria = document.getElementById("tituloHistoria");
const textoHistoria = document.getElementById("textoHistoria");


const historias = {

    destacada: {

        imagen: "../images/picture/portal_blog.png",

        categoria: "HISTORIA DESTACADA",

        titulo: "El arte detrás de una torta perfecta",

        texto: `
            <p>
                En 1000 Sabores creemos que una torta es mucho más que
                un postre. Detrás de cada creación existe una historia,
                un momento especial y muchas horas de dedicación.
            </p>

            <p>
                Todo comienza con la selección de los ingredientes.
                Elegimos cuidadosamente cada producto para conseguir
                el equilibrio entre sabor, textura y calidad que buscamos
                en nuestras preparaciones.
            </p>

            <p>
                Después comienza la elaboración. Cada bizcocho se prepara
                con paciencia, respetando los tiempos de mezcla y horneado
                para conseguir una textura suave y esponjosa.
            </p>

            <p>
                Una vez que las distintas preparaciones están listas,
                comienza uno de nuestros momentos favoritos:
                la decoración.
            </p>

            <p>
                Nuestro equipo trabaja cada detalle de forma cuidadosa.
                Los colores, las formas, las frutas, el chocolate y cada
                elemento decorativo se combinan para crear una torta que
                no solamente sea deliciosa, sino también especial para
                quien la recibe.
            </p>

            <p>
                Pero quizás la parte más importante ocurre cuando la
                torta sale de nuestra cocina y llega a una celebración.
            </p>

            <p>
                Un cumpleaños, un aniversario, una reunión familiar o
                simplemente un momento para compartir pueden convertirse
                en recuerdos que perduran durante mucho tiempo.
            </p>

            <p>
                Por eso, detrás de cada torta de 1000 Sabores existe
                mucho más que una receta. Existe dedicación, creatividad
                y el deseo de hacer que cada celebración tenga un sabor
                especial.
            </p>

            <p>
                Ese es el verdadero arte detrás de una torta perfecta.
            </p>
        `
    },


    origen: {

        imagen: "../images/picture/historia._blog.png",

        categoria: "NUESTRA HISTORIA",

        titulo: "De una pequeña idea a 1000 Sabores",

        texto: `
            <p>
                Todo comenzó con una pequeña idea y una gran pasión por
                la pastelería.
            </p>

            <p>
                1000 Sabores nació con el deseo de crear productos que
                no solamente fueran deliciosos, sino que también pudieran
                formar parte de los momentos más importantes de nuestros
                clientes.
            </p>

            <p>
                Al principio todo era mucho más pequeño. Cada preparación
                se realizaba con dedicación y cada nuevo pedido representaba
                una oportunidad para aprender y mejorar.
            </p>

            <p>
                Con el tiempo, la pasión y el esfuerzo fueron haciendo
                crecer el proyecto.
            </p>

            <p>
                Nuevas recetas, nuevos sabores y nuevas ideas comenzaron
                a formar parte de nuestra pastelería.
            </p>

            <p>
                Lo que comenzó como una pequeña idea se transformó poco
                a poco en 1000 Sabores, un espacio donde buscamos combinar
                creatividad, calidad y dedicación en cada creación.
            </p>

            <p>
                Nuestra historia continúa creciendo junto a cada persona
                que elige compartir uno de nuestros productos en sus
                momentos especiales.
            </p>
        `
    },


    cocina: {

        imagen: "../images/picture/historia1.png",

        categoria: "DETRÁS DE 1000 SABORES",

        titulo: "Un día dentro de nuestra cocina",

        texto: `
            <p>
                Nuestro día comienza mucho antes de que nuestros clientes
                reciban sus productos.
            </p>

            <p>
                Desde las primeras horas de la mañana comenzamos a preparar
                los ingredientes y organizar cada una de las tareas
                necesarias para la jornada.
            </p>

            <p>
                Cada preparación requiere atención y cuidado.
            </p>

            <p>
                Mientras algunos integrantes del equipo trabajan en las
                masas y rellenos, otros comienzan con las decoraciones y
                los detalles que harán que cada producto sea especial.
            </p>

            <p>
                La organización es fundamental. Cada pedido tiene sus
                propios tiempos de preparación y debemos asegurarnos de
                que todo esté listo en el momento adecuado.
            </p>

            <p>
                Uno de los momentos más entretenidos llega cuando comienza
                la decoración.
            </p>

            <p>
                Es ahí donde cada integrante puede aportar creatividad y
                convertir una preparación en una creación única.
            </p>

            <p>
                Al finalizar la jornada revisamos cada pedido antes de
                que salga de nuestra cocina.
            </p>

            <p>
                Nuestro objetivo es que cada producto llegue a nuestros
                clientes con el mismo cuidado con el que fue preparado.
            </p>
        `
    },


    equipo: {

        imagen: "../images/picture/equipo.png",

        categoria: "NUESTRO EQUIPO",

        titulo: "Las personas detrás de cada creación",

        texto: `
            <p>
                Detrás de cada producto de 1000 Sabores existe un equipo
                de personas que comparte una misma pasión: crear momentos
                especiales a través de la pastelería.
            </p>

            <p>
                Cada integrante cumple un papel importante dentro del
                proceso.
            </p>

            <p>
                Algunas personas se encargan de las preparaciones, otras
                de las decoraciones y otras de organizar los pedidos y
                atender a nuestros clientes.
            </p>

            <p>
                Aunque cada tarea es diferente, todas tienen algo en común:
                dedicación y atención a los detalles.
            </p>

            <p>
                Trabajar en equipo nos permite compartir ideas, aprender
                de los demás y encontrar nuevas formas de mejorar nuestras
                creaciones.
            </p>

            <p>
                Para nosotros, una buena pastelería no solamente depende
                de los ingredientes o de las recetas.
            </p>

            <p>
                También depende de las personas que ponen esfuerzo,
                creatividad y cariño en cada preparación.
            </p>

            <p>
                Ese trabajo conjunto es parte fundamental de lo que somos
                como 1000 Sabores.
            </p>
        `
    }

};


function abrirHistoria(historia) {

    imagenHistoria.src = historia.imagen;

    imagenHistoria.alt = historia.titulo;

    categoriaHistoria.textContent = historia.categoria;

    tituloHistoria.textContent = historia.titulo;

    textoHistoria.innerHTML = historia.texto;

    historiaCompleta.classList.add("activo");

}


leerHistoria.addEventListener("click", function(evento) {

    evento.preventDefault();

    abrirHistoria(historias.destacada);

});


botonesHistorias.forEach(function(boton) {

    boton.addEventListener("click", function(evento) {

        evento.preventDefault();

        const nombreHistoria = boton.dataset.historia;

        const historiaSeleccionada = historias[nombreHistoria];

        if (historiaSeleccionada) {

            abrirHistoria(historiaSeleccionada);

        }

    });

});


cerrarHistoria.addEventListener("click", function() {

    historiaCompleta.classList.remove("activo");

});


historiaCompleta.addEventListener("click", function(evento) {

    if (evento.target === historiaCompleta) {

        historiaCompleta.classList.remove("activo");

    }

});