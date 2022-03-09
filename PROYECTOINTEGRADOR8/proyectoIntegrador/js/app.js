let $form = document.getElementById("form");
$form.addEventListener("submit", (e) => {
  let $input = document.getElementById("title").value;
  let $textarea = document.getElementById("description").value;

  const list = {
    title: $input,
    description: $textarea,
  };

  if (localStorage.getItem("Todo") === null) {
    const tareas = [];
    tareas.push(list);
    localStorage.setItem("Todo", JSON.stringify(tareas));
  } else {
    let tarea = JSON.parse(localStorage.getItem("Todo"));
    tarea.push(list);
    localStorage.setItem("Todo", JSON.stringify(tarea));
  }

  alert("😉La tarea se ha creado con éxito🧐");
  pitar();
  $form.reset();
  e.preventDefault();
});

//! FunctionDeclaration - parametro y argumentos
function eliminarTodo(descripcion) {
  let todo = JSON.parse(localStorage.getItem("Todo"));
  if (confirm("😮¿Estas seguro de querer eliminar esta actividad?🤨")) {
    // Inicializacion - condición - incremento
    for (let i = 0; i < todo.length; i++) {
      if (todo[i].description === descripcion) todo.splice(i, 1);
    }
    localStorage.setItem("Todo", JSON.stringify(todo));
    pitar();
  }
}

function pitar() {
  let datos = JSON.parse(localStorage.getItem("Todo"));
  let $targets = document.getElementById("targetas");

  $targets.innerHTML = "";

  for (let i = 0; i < datos.length; i++) {
    let title = datos[i].title;
    let description = datos[i].description;

    $targets.innerHTML += `<div class="col">
    <div class="card">
      <i class="fa-solid fa-user-tie"></i>
      <h5>${title.toUpperCase()}</h5>
      <span>Tarea número: ${i}</span>
      <div class="pra">
       <p>${description}</p>
       <div style="text-align: center;">
       <button type="button" class="rounded-pill" onclick="eliminarTodo('${description}')">Delete</button>
       </div>
      </div>
    </div>
    </div>`;
  }
}
pitar();
