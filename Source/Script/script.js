let $ = document

/////////////////////////////

const body = $.body
const addBtn = $.querySelector(".add")
const noStatusContainer = $.querySelector(".noStatusTodolist")
const notCompleteContainer = $.querySelector(".notCompleteTodoList")
const inProgressContainer = $.querySelector(".inProgressTodolist")
const completedContainer = $.querySelector(".completedTodolist")


// fucntions ////////////////////////
function domUpdater (){
    let liveUserScreenHeight = visualViewport.height
    body.style.minHeight = liveUserScreenHeight + "px"
}

function addNewTodo(){
   let newTodo = prompt("Please enter sth \n It should be at least 3 and at most 15 characters")
   if(newTodo.trim().length<3 || newTodo.trim().length>15){
    alert("a todo should be at least 3 and at most 15 characters")
   }else{
    let todoCard = $.createElement("div")
    let newTodotext = $.createElement("div")
    let deleteBtn = $.createElement("button")
    let deleteIcon = $.createElement("i")
    
    todoCard.className = "todoCard"
    newTodotext.className = "ms-2"
    deleteBtn.className = "deleteBtn me-2"
    deleteIcon.className = "fas fa-close"
    newTodotext.innerHTML = newTodo

    todoCard.setAttribute("Id" , newTodo)
    todoCard.setAttribute("ondragstart" , "maindragstartHandler(event)")
    todoCard.setAttribute("draggable" , "true")

    deleteBtn.append(deleteIcon)
    todoCard.append(newTodotext)
    todoCard.append(deleteBtn)

    noStatusContainer.append(todoCard)

    let deleteBtns = $.querySelectorAll(".deleteBtn")
    deleteBtns.forEach(function(deleteBtn){
        deleteBtn.addEventListener("click" , function (event){
            (event.target.parentElement.parentElement).remove()
        })
    })
   }
}

function maindragstartHandler (event){
    event.dataTransfer.setData("todoID" , event.target.id)
}

function dragstartHandler(event){
    event.dataTransfer.setData("todoID" , event.target.id)
}

function dragOverHander(event){
    event.preventDefault()
}

function dropHandler(event){
    let todoId = event.dataTransfer.getData("todoId")
    let selectedTodo = $.querySelector("#" + todoId)

    event.target.append(selectedTodo)
}

function test(event){
    
}

// eventListeners ////////////////////////
setInterval(domUpdater , 100)
addBtn.addEventListener("click" , addNewTodo)