const leerHistoria = document.getElementById("leerHistoria");
const historiaCompleta = document.getElementById("historiaCompleta");
const cerrarHistoria = document.getElementById("cerrarHistoria");
const textoHistoria = document.getElementById("textoHistoria");

const historia = `
En 1000 Sabores creemos que una torta es mucho más que un
postre. Detrás de cada creación existe una historia, un momento
especial y muchas horas de dedicación.

Todo comienza con la selección de los ingredientes. Elegimos
cuidadosamente cada producto para conseguir el equilibrio entre
sabor, textura y calidad que buscamos en nuestras preparaciones.

Después comienza la elaboración. Cada bizcocho se prepara con
paciencia, respetando los tiempos de mezcla y horneado para
conseguir una textura suave y esponjosa.

Una vez que las distintas preparaciones están listas, comienza
uno de nuestros momentos favoritos: la decoración.

Nuestro equipo trabaja cada detalle de forma cuidadosa. Los
colores, las formas, las frutas, el chocolate y cada elemento
decorativo se combinan para crear una torta que no solamente
sea deliciosa, sino también especial para quien la recibe.

Pero quizás la parte más importante ocurre cuando la torta sale
de nuestra cocina y llega a una celebración.

Un cumpleaños, un aniversario, una reunión familiar o simplemente
un momento para compartir pueden convertirse en recuerdos que
perduran durante mucho tiempo.

Por eso, detrás de cada torta de 1000 Sabores existe mucho más
que una receta. Existe dedicación, creatividad y el deseo de
hacer que cada celebración tenga un sabor especial.

Ese es el verdadero arte detrás de una torta perfecta.
`;

leerHistoria.addEventListener("click", function(evento) {
    evento.preventDefault();

    textoHistoria.textContent = historia;

    historiaCompleta.classList.add("activo");
});

cerrarHistoria.addEventListener("click", function() {
    historiaCompleta.classList.remove("activo");
});

historiaCompleta.addEventListener("click", function(evento) {
    if (evento.target === historiaCompleta) {
        historiaCompleta.classList.remove("activo");
    }
});