let btnAdd = document.querySelector('#btnAdd')
btnAdd.addEventListener('click', function() {
    let taskName = document.querySelector("#newTask").value

    let taskElement = document.createElement("li")

    let taskLabel = document.createElement('span')
    taskLabel.innerHTML = taskName;
    taskElement.appendChild(taskLabel)

    let editButtonElement = document.createElement('button')
    editButtonElement.innerHTML = "Edit";
    taskElement.appendChild(editButtonElement)
    editButtonElement.addEventListener('click', function(){
        let newTaskName = prompt(`change task name from ${taskName} to?`)
        taskLabel.innerHTML = newTaskName;
    })

    let parentElement = document.querySelector('#todos')
    parentElement.appendChild(taskElement)


})

//closures only work within the local scope of the for loop