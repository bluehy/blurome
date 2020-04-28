const toDoForm = document.querySelector(".js-toDoForm"),
      toDoInput = toDoForm.querySelector("input"),
      toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = "toDos";

let toDos = [];

function deleteToDo(event){
  	const btn = event.target;
  	const li = btn.parentNode;
  
  	toDoList.removeChild(li);
	//console.log(event.target.parentNode);
  	// html list지우기 기능
	
  	const cleanToDos = toDos.filter(function(toDo){
    	return toDo.id !== parseInt(li.id);
    })
    toDos = cleanToDos; // 기존의 toDos array를 cleanToDos array로 교체
    saveToDos();
}

function saveToDos(){
	localStorage.setItem(TODOS_LS, JSON.stringify(toDos));
}

function paintToDo(text){
   const li = document.createElement("li");
   const delBtn = document.createElement("button");
   const span =document.createElement("span");
   const newId = toDos.length + 1 ;
  
   delBtn.innerText = "★";
   delBtn.addEventListener("click", deleteToDo);
  
   span.innerText = text;
   li.appendChild(delBtn);
   li.appendChild(span);
   li.id = newId;
   toDoList.appendChild(li);
   const toDoObj = {
   		text: text,
     	id: newId 
   };
  toDos.push(toDoObj);
  saveToDos(); // push한 이후에 저장할 것.
}

function handleSubmit(event){
   event.preventDefault();
   const currentValue = toDoInput.value;
   paintToDo(currentValue);
   toDoInput.value = "";
}


function loadToDos(){
   const loadedToDos = localStorage.getItem(TODOS_LS);
   if(loadedToDos !== null){
		const parsedToDos = JSON.parse(loadedToDos);
     	parsedToDos.forEach(function(toDo){
          					//object로 다시 바꿔둔 애들 각각을 toDo라 지칭
			 paintToDo(toDo.text);
        });// 해당 function 파트를 따로 밖에서 정의한 후 끌어와도 ok
        
   }
}

function init(){
   loadToDos();
   toDoForm.addEventListener("submit", handleSubmit);
};

init();