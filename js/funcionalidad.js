

//Funcion para inicializar variables y limpiar articulos y mostrar cajas
function temaseleccionado(){

    //getElementsByTagName convierte en arreglo porque guarda mas de un elemento
    capas = document.getElementsByTagName("article");
    //Oocultar varios elementos
    for(i=0; i < capas.length; i++){
        capas[i].style.display="none";
    }
    //Almacenar el dato de la opcion del usuario
    var articulo=document.getElementById("temas").value;
    document.getElementById(articulo).style.display="block";
}

var fotografias=function(nombreFoto){
    //document.getElementById('foto').style.display = 'inline';
    document.getElementById("foto").src="imagenes/"+nombreFoto+".jpeg";
}


document.getElementById('marco').addEventListener("change",function(){marco();});
document.getElementById('mostrar').addEventListener("click",function(){mostrar();});


let marco=function(){
    let cod = document.getElementById("marco").value;

    localStorage.setItem('codigo',cod);



    let imus = document.getElementById("imagenusable").value;

    localStorage.setItem('codigo',imus)


    switch(imus)

    {
        case 1:
            break;
        case 2:
            break;
        case 3:
        break;
        
    }

    let mesas=document.getElementById("mesas").innerHTML;
    localStorage.setItem('mesa',mesas);
    let cAdultos=document.getElementsByName("adultos");
    let vAdultos=[];
    for(let i = 0; i < cAdultos.length; i++){
        vAdultos[i]=cAdultos[i].value;
        localStorage.setItem('vAdultos', vAdultos);
    }
    let cMenores=document.getElementsByName("menores");
    let vMenores=[];
    for(let i = 0; i < cMenores.length; i++){
        vMenores[i]=cMenores[i].value;
        localStorage.setItem('vMenores', vMenores);
    }

}



let mostrar=function(){ 

   
    window.open("DatosReservacion.html");
}

//Linea para detectar el evento del select
document.getElementById('temas').addEventListener("change",temaseleccionado);
