let animado=document.querySelectorAll(".animado");

function mostrarScroll () {
    let scrollTop=document.documentElement.scrollTop;

    for (var i=0; i<animado.length; i++) {
        let alturaAnimado=animado[i].offsetTop;
        if (alturaAnimado-500<scrollTop) {
            animado[i].style.opacity=1;
            animado[i].classList.add("subir");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);



document.getElementById('video').addEventListener('ended', handlerVideo, false);

function handlerVideo(e) {
    var div = document.getElementById("imgPortada");
    div.classList.remove("d-none");
}


