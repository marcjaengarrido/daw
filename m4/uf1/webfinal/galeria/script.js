function spawn(imagenurl) {
    let popup = document.getElementsByClassName('popup')[0];
    let imagen = document.getElementsByClassName('imagenPopup')[0];
    let fondoNegro = document.getElementsByClassName('fondoNegro')[0];

    imagen.src = imagenurl;
    popup.style.display = 'flex';
    fondoNegro.style.display = 'flex';

}



function randomimagen(cambioimagen = 0) {
    const fotosBruto = document.querySelectorAll('img:not(.imagenPopup)');
    const fotoActual = document.getElementsByClassName('imagenPopup')[0];
    const fotos = Array.from(fotosBruto);

    let puntoMuerto = false;
    let indiceActual = 0;
    for (const foto of fotos) {
        if (foto.src == fotoActual.src || puntoMuerto) {
            puntoMuerto = true;
        } else {
            indiceActual++;
        }
    }

    if (cambioimagen === 0) {
        // random
        let fotito;
        do {
            let indice = Math.floor(Math.random() * fotos.length);
            indiceActual = indice;
            fotito = fotos[indice];
        } while (fotito.src === fotoActual.src);

        spawn(fotito.src);
    } else if (cambioimagen === 1) {
        // +1
        indiceActual = (indiceActual + 1) % fotos.length;
        spawn(fotos[indiceActual].src);
    } else if (cambioimagen === -1) {
        // -1
        indiceActual = (indiceActual - 1 + fotos.length) % fotos.length;
        spawn(fotos[indiceActual].src);
    }
}









function esc(teclado) {
    let fondoNegro = document.getElementsByClassName('fondoNegro')[0];
    let popup = document.getElementsByClassName('popup')[0];

    if (teclado.key == "Escape") {
        fondoNegro.style.display = 'none';
        popup.style.display = 'none';
      }
}
