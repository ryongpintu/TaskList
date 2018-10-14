const form = document.querySelector('#task-form');
const inputField=document.querySelector('#task');
const addTaskBtn= document.querySelector('.add-task');
const inputFilter=document.querySelector('#filter');
const clearButton= document.querySelector('.clear-tasks');
const ulList= document.querySelector('.collection');
const deletItemBtn= document.querySelector(".delete-item");

function loadLielement(){

  let taskListInStorage=JSON.parse(localStorage.getItem('tasks'));
  if(taskListInStorage){
    taskListInStorage.forEach(element => {
      const li= document.createElement('li');
      li.className='collection-item';
      li.appendChild(document.createTextNode(element))
  
      link = document.createElement('a');
      link.className='delete-item secondary-content';
      link.innerHTML='<i class="fa fa-remove"></i>'
  
      li.appendChild(link);
  
      ulList.appendChild(li);
  });
}
  

  }
  

loadEventListener();


function loadEventListener(){
  // DOM loaded

  document.addEventListener('DOMContentLoaded',loadLielement);


  form.addEventListener('submit',addTask);

  // add eventListener to ul

  ulList.addEventListener('click',deleteItem);

  // clear all the tasks

  clearButton.addEventListener('click',clearAllTasks);
}


function addTask(e){

if(inputField.value==''){
  alert('Enter the value');
}else{
  let task=inputField.value;
   inputField.value='';
  const li= document.createElement('li');
  li.className='collection-item';

    link = document.createElement('a');
    link.className='delete-item secondary-content';
    link.innerHTML='<i class="fa fa-remove"></i>'

    li.appendChild(document.createTextNode(task));

    li.appendChild(link);

    ulList.appendChild(li); 

    

    loadTaskInStorage(task);
    

    
    // let taskArr=[];
    // let taskInStorage= localStorage.getItem('tasks');
    // console.log("task without parse :"+ taskInStorage);
    // console.log("task wit parse :"+ JSON.parse(taskInStorage));
    // taskArr=JSON.parse(taskInStorage);

    // console.log(taskArr);
    // taskArr.push(task)

    // localStorage.setItem('tasks',JSON.stringify(taskArr));
    //  console.log(JSON.stringify(taskArr))
  // li.appendChild(document.createTextNode(inputField.value));
  // li.appendChild(link);
  // ulList.appendChild(li);
 
}
e.preventDefault();
}

function loadTaskInStorage(task){
  let taskArr;
  if(localStorage.getItem('tasks')===null){
    taskArr=[];

  }else{
    taskArr=JSON.parse(localStorage.getItem('tasks'));
 
  }
  taskArr.push(task);
  console.log(taskArr)
  localStorage.setItem('tasks',JSON.stringify(taskArr));
  
}

function deleteItem(e){

if(e.target.parentElement.classList.contains("delete-item")){

  if(confirm("Are you sure to delete Item"))
  e.target.parentElement.parentElement.remove();
  removeItemFromLStorage(e.target.parentElement.parentElement);
}
}

function removeItemFromLStorage(taskItem){
  let taskArr;
  if(localStorage.getItem('tasks')===null){
    taskArr=[];

  }else{
    taskArr=JSON.parse(localStorage.getItem('tasks'));
 
  }

  taskArr.forEach((task,index)=>{
    if(taskItem.textContent=== task){
      taskArr.splice(index,1);
    }
  })
  localStorage.setItem('tasks',JSON.stringify(taskArr));
  

}

function clearAllTasks(e){

if(confirm("Are you sure to delete All")){
  while(ulList.firstChild){
    ulList.removeChild(ulList.firstChild)
  }
 localStorage.removeItem('tasks');
 
}

}