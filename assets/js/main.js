console.log("Entro al main.js");
const tareaNombre = document.getElementById("tareaNombre");
const tareaDetalle = document.getElementById("tareaDetalle");
const lista = document.getElementById("lista");
const tareas = [ 
    {
        tarea:tareaNombre,
        detalle: tareaDetalle,
    }
]

function agregarTarea() {
    if(Tarea == "") {
        alert("Ingresa una tarea o no molestes");
    }
    else {
        const Tarea = tareaNombre.value;
        const Detalle= tareaDetalle.value
        console.log(Tarea)
        console.log (Detalle)
        localStorage.setItem("Tarea", JSON.stringify(Tarea));
        localStorage.setItem("Detalle", JSON.stringify(Detalle));
        tareaDetalle.value = "";
    }
    };

function actualizarLista(){

};

function tareaCumplida (){

};
function eliminarTarea(){

;}
