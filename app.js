//Menu lateral
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible==false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

let links = document.querySelectorAll("nav a");
for(var x = 0; x <links.length;x++){
    links[x].onclick = function(){
        menu.style.display = "none";
        menu_visible = false;
    }
}


function crearBarra(id_barra){
    for(i=0;i<=16;i++){
        let div = document.createElement("div");
        div.className = "e";
        id_barra.appendChild(div);
    }
}


let html = document.getElementById("html");
crearBarra(html);
let javascript = document.getElementById("javascript");
crearBarra(javascript);
let Community = document.getElementById("Community");
crearBarra(Community);
let Growth = document.getElementById("Growth");
crearBarra(Growth);
let Edicion = document.getElementById("Edicion");
crearBarra(Edicion);
let Publicidad = document.getElementById("Publicidad");
crearBarra(Publicidad);


let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;


function efectoHabilidades(){
    var habilidades = document.getElementById("habilidades");
    var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
    if(distancia_skills>=300 && entro==false){
        entro = true;
        const intervalHtml = setInterval(function(){
            pintarBarra(html, 14, 0, intervalHtml);
        },100);
        const intervalJavascript = setInterval(function(){
            pintarBarra(javascript, 9, 1, intervalJavascript);
        },100);
        const intervalCommunity = setInterval(function(){
            pintarBarra(Community, 11, 2, intervalCommunity);
        },100);
        const intervalGrowth = setInterval(function(){
            pintarBarra(Growth, 9, 3, intervalGrowth);
        },100);
        const intervalEdicion = setInterval(function(){
            pintarBarra(Edicion, 15, 4, intervalEdicion);
        },100);
        const intervalPublicidad = setInterval(function(){
            pintarBarra(Publicidad, 14, 5, intervalPublicidad);
        },100);
    }
}


function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if(x < cantidad){
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#940253";
    }else{
        clearInterval(interval)
    }
}


window.onscroll = function(){
    efectoHabilidades();
}