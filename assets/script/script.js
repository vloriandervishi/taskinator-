var formEl=document.querySelector('#task-form');
var tasksToDoEl= document.querySelector("#tasks-to-do");








var taskFormHandler= function(){
    //stops the browser from reloading the page upon a form submission
    event.preventDefault();
    // gets the information entered into a form's input field
    var taskNameInput= document.querySelector("input[name='task-name']").value;
    var taskTypeInput= document.querySelector("select[name='task-type']").value;
    var listItemEl= document.createElement("li");
    
     // check if input values are empty strings
     if(!taskNameInput|| !taskTypeInput){
         alert('You need to fill out the task form!')
         return false;
     }
    formEl.reset();
    
    // package up data as an object
    var taskDataObj = {
        name: taskNameInput,
        type: taskTypeInput
    };

    //create list item
    var listItemEl= document.createElement("li");
    listItemEl.className="task-item";

    //create div to hold task infor and add to list item
    var taskInforEl = document.createElement("div");
    // give it a class name
    taskInforEl.className="task=info";
    //add html content to div
    taskInforEl.innerHTML="<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type+ "</span>";
    listItemEl.appendChild(taskInforEl);
    // add entire list item to list
    tasksToDoEl.appendChild(listItemEl);

}
var createTaskEl= function (taskDataObj){
    // create list item
var listItemEl = document.createElement("li");
listItemEl.className = "task-item";

// add task id as a custom attribute
listItemEl.setAttribute("data-task-id",taskIdCounter);

// create div to hold task info and add to list item
var taskInfoEl = document.createElement("div");
taskInfoEl.className = "task-info";
taskInfoEl.innerHTML = "<h3 class='task-name'>" + taskDataObj.name + "</h3><span class='task-type'>" + taskDataObj.type + "</span>";

listItemEl.appendChild(taskInfoEl);

// add entire list item to list
tasksToDoEl.appendChild(listItemEl);
taskIdCounter++;

}
formEl.addEventListener("submit",taskFormHandler);