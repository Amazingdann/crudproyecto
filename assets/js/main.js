console.log("Entro al main.js");

let tareaNombre = document.getElementById("tareaNombre");
let tareasPendientes = document.getElementById("tareasPendientes");
let tareas = (localStorage.getItem("tareas")) ? JSON.parse(localStorage.getItem("tareas")): [
];
actualizarLista();
// investigar if ternario  
////{tarea:tareaNombre.value, detalle: tareaDetalle.value}

function agregarTarea() {
    console.log("entró a agregar tarea");
    if(tareaNombre.value == "") {
        alert("Ingresa una tarea maldito insecto");
    }
    else {
        console.log(tareaNombre.value)
        const tarea = tareaNombre.value;
        tareas.push(tarea);
        console.log (tarea);
        localStorage.setItem("tareas", JSON.stringify(tareas));
        actualizarLista();
    }
    };
function actualizarLista(){
    console.log(tareas);
         if(tareas.length === 0){ 
            console.log("no hay tareas");
            tareasPendientes.innerHTML= `<li class="list-group-item d-flex align-items-center"> No Hay Tareas Pendientes </li>`;
            }
            else{ 
            console.log("hay tareas pendientes");
            tareasPendientes.innerHTML = "";
            for(const tareaNombre of tareas){
                console.log("entró creación de lista")
                const li = document.createElement("li");
                li.innerText = tareaNombre;
                li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "glass");

                const divbuttons = document.createElement("div");
                divbuttons.classList.add("text-align-right")

                const botoncheck = document.createElement("button");
                botoncheck.classList.add("btn", "btn-success", "btn-sm")
                botoncheck.innerText = "✓"

                const botoncross = document.createElement("button");
                botoncross.innerText = " X ";
                botoncross.classList.add("btn", "btn-danger", "btn-sm")
                
                divbuttons.appendChild (botoncheck);
                divbuttons.appendChild (botoncross);
                li.appendChild(divbuttons);
                tareasPendientes.appendChild(li);
                }
            }
    }
    
    


 

function tareaCumplida (){

};
function eliminarTarea(){

;}
