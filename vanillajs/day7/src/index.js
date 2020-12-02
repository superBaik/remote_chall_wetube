
const toDoForm = document.querySelector(".js-toDoForm"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-toDoList");
const okList = document.querySelector(".js-confirmList");

const TODOS_LS = "toDos";

let toDos = [];


function deleteToDo(event) {
    
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter(function(toDo) {
      return toDo.id !== parseInt(li.id);
    });
    toDos = cleanToDos;
    saveToDos();
  }
  
  function confirmTodo(e){
    const nextBtn = document.createElement("button");

    const btn = e.target;
    const li = btn.parentNode
    
    nextBtn.innerText = "😍";
    console.log(li)
    li.appendChild(nextBtn);
    li.removeChild(btn);

    okList.appendChild(li);

    // toDos.push(toDoObj);
    console.log(toDos)
    
    
    
    
    
    
    nextBtn.addEventListener('click', undo)
    

  }

  function undo(e){
    const btn = e.target;
    const okBtn = document.createElement('button');
    const li  = btn.parentNode;
    


    okBtn.innerText = "😀";
    li.appendChild(okBtn);
    li.removeChild(btn);
    

    toDoList.appendChild(li);
    
    // console.log(e);
    

  }

  function saveToDos() {
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
  }


function paintToDo(text) {
  const li = document.createElement("li");
  

  const delBtn = document.createElement("button");
  const okBtn = document.createElement("button");
  const span = document.createElement("span");
  const newId = toDos.length + 1;

  

  delBtn.innerText = "❌";
  okBtn.innerText = "😀";
  
  delBtn.addEventListener("click", deleteToDo);
  okBtn.addEventListener("click", confirmTodo);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(okBtn);
  li.appendChild(span);
  li.id = newId;
  toDoList.appendChild(li);

  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);

  saveToDos();
}



function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value = "";
}

function loadToDos() {
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null) {
    const parsedToDos = JSON.parse(loadedToDos);
    parsedToDos.forEach(function(toDo) {
      paintToDo(toDo.text);
    });
  }
}

function init() {
  loadToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
