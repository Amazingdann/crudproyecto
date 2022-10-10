console.log("Entro al main.js");

let tareaNombre = document.getElementById("tareaNombre");
let tareaDetalle = document.getElementById("tareaDetalle");
const tareasPendientes = document.getElementById("tareasPendientes");
const elementoLista = document.getElementById("elementoLista");
const detalleLista = document.getElementById("detalleLista");
let tareas = (localStorage.getItem("tareas")) ? JSON.parse(localStorage.getItem("tareas")): [
];
actualizarLista()

// investigar if ternario  
////{tarea:tareaNombre.value, detalle: tareaDetalle.value}

function agregarTarea() {
    console.log("entró a agregar tarea");
    if(tareaNombre.value == "") {
        alert("Ingresa una tarea maldito insecto");
    }
    else {
        const tarea = tareaNombre.value;
        const detalle = tareaDetalle.value; 
        tareas.push(tarea, detalle)
        console.log (tarea);
        console.log (detalle);
        localStorage.setItem("tareas", JSON.stringify(tareas))
        console.log(tareas);
    }
    };


function actualizarLista(){
    if(tareas.lenght === 0){
    tareasPendientes.innerHTML= `<li class="list-group-item d-flex align-items-center">
    No hay Tareas Pendientes
</li>`;
    }
    else {

    }
};


function tareaCumplida (){

};
function eliminarTarea(){

;}
