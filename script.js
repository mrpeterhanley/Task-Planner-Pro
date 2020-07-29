// Create the task list object array
let taskList = [];
let idCounter = 1;

// Make a function to create a new task object
function createTask(taskName, taskDetails, taskAssignee, taskDate, taskStatus) {
  var task = {
    taskid: idCounter,
    name: taskName,
    details: taskDetails,
    assignee: taskAssignee,
    duedate: taskDate,
    status: taskStatus,
  };
  idCounter++;
  return task;
}

// Cycle through the task list array and build the table body

function buildTaskTable() {
  // cycle through each task object in task list array

  // get the task table body element
  let taskTableBody = document.querySelector("#taskTableBody");

  while (taskTableBody.firstChild) {
    taskTableBody.removeChild(taskTableBody.firstChild);
  }

  for (var i = 0; i < taskList.length; i++) {
    //create a new task row
    var newTaskRow = document.createElement("tr");
    var taskID = taskList[i].taskid;
    var taskDetailId = "detail" + taskList[i].taskid;
    newTaskRow.setAttribute("id", taskID);

    // create the checkbox column
    var col0 = document.createElement("td");
    col0.setAttribute("scope", "col");
    col0.classList.add("checkBoxCol");
    var input = document.createElement("input");
    input.setAttribute("type", "checkbox");
    col0.appendChild(input);

    //add to the row
    newTaskRow.appendChild(col0);

    // create the task name column
    var col1 = document.createElement("td");
    col1.setAttribute("scope", "col");
    col1.classList.add("nameCol");
    col1.innerHTML = taskList[i].name;

    // add to the row
    newTaskRow.appendChild(col1);

    // create the task assignee column
    var col2 = document.createElement("td");
    col2.setAttribute("scope", "col");
    col2.classList.add("assigneeCol");

    var col2span = document.createElement("span");
    col2span.classList.add("badge", "badge-secondary");
    col2span.innerHTML = taskList[i].assignee;
    col2.appendChild(col2span);

    // add to the row
    newTaskRow.appendChild(col2);

    // create the due date column
    var col3 = document.createElement("td");
    col3.setAttribute("scope", "col");
    col3.classList.add("dateCol");

    var col3span = document.createElement("span");
    col3span.classList.add("badge", "badge-secondary");
    col3span.innerHTML = taskList[i].duedate;
    col3.appendChild(col3span);

    // add to the row
    newTaskRow.appendChild(col3);

    // create the task status column
    var col4 = document.createElement("td");
    col4.setAttribute("scope", "col");
    col4.classList.add("statusCol");

    var col4span = document.createElement("span");
    col4span.classList.add("badge", "badge-secondary");
    col4span.innerHTML = taskList[i].status;
    col4.appendChild(col4span);

    // add to the row
    newTaskRow.appendChild(col4);

    // create the edit button column
    var col5 = document.createElement("td");
    col5.setAttribute("scope", "col");
    col5.classList.add("editCol");

    var col5span = document.createElement("span");
    col5span.classList.add(
      "badge",
      "badge-secondary",
      "dropdown-toggle",
      "mx-1"
    );

    col5span.setAttribute("data-toggle", "collapse");
    col5span.setAttribute("data-target", "#" + taskDetailId);
    col5span.innerHTML = "Details";
    col5.appendChild(col5span);

    var col5span2 = document.createElement("span");
    col5span2.classList.add("badge", "badge-info");
    col5span2.innerHTML = "Edit";
    col5.appendChild(col5span2);

    // add to the row
    newTaskRow.appendChild(col5);

    // add the new task row to the table
    taskTableBody.appendChild(newTaskRow);

    //create a new task detail row
    var newTaskDetailRow = document.createElement("tr");

    newTaskDetailRow.setAttribute("id", taskDetailId);
    newTaskDetailRow.classList.add("bg-light");
    newTaskDetailRow.classList.add("collapse");

    // create the blank column
    var col6 = document.createElement("td");
    col6.setAttribute("scope", "col");

    //add to the row
    newTaskDetailRow.appendChild(col6);

    // create the task detail column
    var col7 = document.createElement("td");
    col7.setAttribute("scope", "col");
    col7.setAttribute("colspan", "5");
    col7.classList.add("detailCol");
    col7.innerHTML = taskList[i].details;

    console.log(taskDetailId);

    // add to the row
    newTaskDetailRow.appendChild(col7);

    taskTableBody.appendChild(newTaskDetailRow);
  }
}

buildTaskTable();

// get the add task modal elements
let modalButton = document.getElementById("addTaskModalButton");
let modalTaskNameInput = document.getElementById("taskNameInput");
let modalTaskDetailInput = document.getElementById("detailInput");
let modalAssigneeInput = document.getElementById("assigneeSelect");
let modalDateInput = document.getElementById("dueDateInput");
let modalStatusInput = document.getElementById("statusSelect");

// add a new task and refresh the task table when the modal is submitted
modalButton.onclick = function () {
  taskList.push(
    createTask(
      modalTaskNameInput.value,
      modalTaskDetailInput.value,
      modalAssigneeInput.value,
      modalDateInput.value,
      modalStatusInput.value
    )
  );
  modalTaskNameInput.value = null;
  modalTaskDetailInput.value = null;
  modalAssigneeInput.value = null;
  modalDateInput.value = null;
  modalStatusInput.value = null;

  buildTaskTable();
};
