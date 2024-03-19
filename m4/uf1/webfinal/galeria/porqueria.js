function wait(ms) {
    var start = new Date().getTime();
    var end = start;
    while (end < start + ms) {
        end = new Date().getTime();
    }
}

const nombres = ["Pepe", "Juan", "Marc", "Jose", "Amen", "Hola", "WDJ", "grewrgew"];
let indiceSeleccionado = 0;

[0,0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,0,0,1,1,1,1,1].forEach((n) => {

    if (n == 1) {
        indiceSeleccionado = (indiceSeleccionado + 1) % nombres.length;
    } else {
        indiceSeleccionado = (indiceSeleccionado - 1 + nombres.length) % nombres.length;
    }
});
