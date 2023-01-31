let video=document.querySelector(".video-historia")

const iniciarRep=()=>{
    video.play()
    document.querySelector("#duracion").innerText=video.duration
}
const pausarRep=()=>{
    video.pause()
}


/* No logre resolver el juego mediante el metodo dado en clase mediante la ruta de la imagen.
Investigando encontre este metodo, pero me desplazaba los textos "Arrastre y suelte aqui"
Probe hacer una variable a traves del id y llamar desde el drop: parrafoJuego.style.display="none"
y funciono, pero solo me lo aplicaba al primer div.
Lamentablemente por cuestion de tiempos no pude seguir buscando alternativas y puse en texto por fuera del div.*/

let destino= ["","",""]

function allowDrop(event){
    event.preventDefault()
}

function drag(event){
    event.dataTransfer.setData("texto", event.target.id);
}

function drop(event){
    if (destino[parseInt(event.target.id)]=="")
    var data=event.dataTransfer.getData("texto");
    event.target.appendChild(document.getElementById(data));
}


const reinicio=()=>{
    window.location.reload()
}



