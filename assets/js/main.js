console.log("Entro al main.js");

let tareaNombre = document.getElementById("tareaNombre");

let tareasPendientes = document.getElementById("tareasPendientes");

let tareasCompletadas = document.getElementById("tareasCompletadas");

let tareas = (localStorage.getItem("tareas")) ? JSON.parse(localStorage.getItem("tareas")): [
];
let completadas = (localStorage.getItem("completadas")) ? JSON.parse(localStorage.getItem("completadas")): [
];
actualizarLista();
actualizarCompletadas();
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
        updateStorage();
    };
}
function updateStorage() {
    console.log("actualizando storage")
    localStorage.setItem("tareas", JSON.stringify(tareas));
    actualizarLista();
    console.log("storage actualizado")
};


function actualizarLista(){
    console.log(tareas);
         if(tareas.length === 0){ 
            console.log("no hay tareas");
            tareasPendientes.innerHTML= `<li class="list-group-item d-flex align-items-center glass"> No hay tareas pendientes </li>`;
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
                botoncheck.onclick= () => tareaCumplida (tareaNombre);
                botoncheck.classList.add("btn", "btn-success", "btn-sm", "ml-1");
                botoncheck.innerText = `  ✓  ` ;

                const botonedit = document.createElement("button");
                botonedit.onclick= () => editarTarea(tareaNombre);
                botonedit.classList.add("btn", "btn-warning", "btn-sm", "ml-1")
                botonedit.innerText = "Edit"

                const botoncross = document.createElement("button");
                botoncross.onclick= () => eliminarTarea(tareaNombre);
                botoncross.innerText = `  X  `;
                botoncross.classList.add("btn", "btn-danger", "btn-sm", "ml-1");
                
                divbuttons.appendChild (botoncheck);
                divbuttons.appendChild (botonedit);
                divbuttons.appendChild (botoncross);
                li.appendChild(divbuttons);
                tareasPendientes.appendChild(li);
                };
            };
    };
    
function editarTarea(tareaNombre){
    console.log("editando tarea");
    const index = tareas.indexOf(tareaNombre);
    const editadatarea = prompt (`ingrese modificaciones a esta tarea`);
    tareas[index] = editadatarea;
    updateStorage();

}

function eliminarTarea(tareaNombre){
        console.log("ingresa a eliminar tarea");
        const index = tareas.indexOf(tareaNombre);
        tareas.splice(index, 1);
        updateStorage();
        actualizarLista();
    };



function tareaCumplida (tareaNombre){
    console.log("ingresa a tareas completadas tarea");
    const index = tareas.indexOf(tareaNombre);
    tareas.splice(index, 1);
    completadas.push(tareaNombre);
    updateStorage()
    completadasStorage();
};

function completadasStorage() {
    console.log("actualizando storage de completadas")
    localStorage.setItem("completadas", JSON.stringify(completadas));
    actualizarLista();
    console.log("storage actualizado", completadas);
    actualizarCompletadas();
};

function actualizarCompletadas(){
    console.log(completadas);
         if(completadas.length === 0){ 
            console.log("no hay tareas completadas");
            tareasCompletadas.innerHTML= `<li class="list-group-item d-flex align-items-center glass"> No hay tareas completadas, ponte a chingarle papi  o agrega una tarea</li>`;
            }
            else{ 
            console.log("hay tareas completadas");
            tareasCompletadas.innerHTML = "";
            for(const tareaNombre of completadas){
                console.log("entró creación de lista en completadas")
                const li = document.createElement("li");
                li.innerText = tareaNombre;
                li.classList.add("list-group-item", "d-flex", "justify-content-between", "align-items-center", "glass");

                const divbuttons = document.createElement("div");
                divbuttons.classList.add("text-align-right")

                const botoncross = document.createElement("button");
                botoncross.onclick = ()=> eliminarcompletada(tareaNombre);
                botoncross.innerText = " X ";
                botoncross.classList.add("btn", "btn-danger", "btn-sm");
                
                tareasCompletadas.appendChild(li);
                li.appendChild(divbuttons);
                divbuttons.appendChild (botoncross); 
                };
            };
    };

    function eliminarcompletada(tareaNombre){
        console.log("ingresa a eliminar tarea");
        const index = completadas.indexOf(tareaNombre);
        completadas.splice(index, 1);
        completadasStorage();
        actualizarCompletadas();
    };