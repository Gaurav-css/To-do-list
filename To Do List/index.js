document.addEventListener('DOMContentLoaded', function() {
    const taskInput = document.getElementById('task-input');
    const taskDatetime = document.getElementById('task-datetime');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');
  
   
    addTaskBtn.addEventListener('click', addTask);
  
    function addTask() {
      const taskText = taskInput.value.trim();
      const taskTime = taskDatetime.value;
  
      if (!taskText || !taskTime) {
        alert('Please enter a task and set the date & time.');
        return;
      }
  
      const li = document.createElement('li');
  
      const taskDetails = document.createElement('div');
      taskDetails.classList.add('task-details');
      taskDetails.innerHTML = `<strong>${taskText}</strong><small>Due: ${taskTime}</small>`;
      li.appendChild(taskDetails);
  
 
      const taskActions = document.createElement('div');
      taskActions.classList.add('task-actions');
  
      const completeBtn = document.createElement('button');
      completeBtn.classList.add('complete');
      completeBtn.textContent = 'Complete';
      completeBtn.addEventListener('click', () => {
        li.classList.toggle('completed');
      });
  
      const editBtn = document.createElement('button');
      editBtn.classList.add('edit');
      editBtn.textContent = 'Edit';
      editBtn.addEventListener('click', () => editTask(li, taskDetails, taskText, taskTime));
  
      const deleteBtn = document.createElement('button');
      deleteBtn.classList.add('delete');
      deleteBtn.textContent = 'Delete';
      deleteBtn.addEventListener('click', () => {
        taskList.removeChild(li);
      });
  
      taskActions.appendChild(completeBtn);
      taskActions.appendChild(editBtn);
      taskActions.appendChild(deleteBtn);
  
      li.appendChild(taskActions);
  
      taskList.appendChild(li);
  
      taskInput.value = '';
      taskDatetime.value = '';
    }
  
 
    function editTask(li, taskDetails, oldTaskText, oldTaskTime) {
      const newTaskText = prompt('Edit Task:', oldTaskText);
      const newTaskTime = prompt('Edit Date & Time:', oldTaskTime);
  
      if (newTaskText && newTaskTime) {
        taskDetails.innerHTML = `<strong>${newTaskText}</strong><small>Due: ${newTaskTime}</small>`;
      }
    }
  });
  