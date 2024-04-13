
function addTask() {
    var taskInput = document.getElementById("Textbox").value.trim();

    if (taskInput !== "") {
        var li = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.className = "Check";
        checkbox.id="check";

        var inputText = document.createElement("input");
        inputText.type = "text";
        inputText.value = taskInput;
        inputText.className = "task";
        inputText.is="task"
        

        var deleteButton=document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.type = "button"; 
        deleteButton.className="delete";
        deleteButton.onclick = removeTask;

        var editButton=document.createElement("button");
        editButton.textContent="Edit";
        editButton.type="button";
        editButton.className="edit";
        editButton.onclick= editTask;

        li.appendChild(checkbox);
        li.appendChild(inputText);
        li.appendChild(deleteButton);
        li.appendChild(editButton);

        document.querySelector(".Task-main ul").appendChild(li);

        document.getElementById("Textbox")

        var deleteButton = document.value = "";

        addTask.setAttribute()



    }
}


function removeTask() {

    this.parentNode.remove();
}

document.getElementById("Add").addEventListener("click", function(event) {
    event.preventDefault();
    addTask();
});


function editTask(){



}

