// ===== Select elements =====
const taskInput = document.getElementById('task-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

// ===== Function to create a task =====
function createTask(taskText) {
  const li = document.createElement('li');

  // Checkbox
  const checkbox = document.createElement('input');
  checkbox.type = 'checkbox';

  // Task text
  const span = document.createElement('span');
  span.className = 'todo-text';
  span.textContent = taskText;

  // Delete button
  const deleteBtn = document.createElement('button');
  deleteBtn.className = 'delete-btn';
  deleteBtn.textContent = '✖';

  // Append elements
  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);

  // ===== Event Listeners =====
  checkbox.addEventListener('change', () => {
    span.classList.toggle('completed');
  });

  deleteBtn.addEventListener('click', () => {
    li.remove();
  });
}

// ===== Add Task =====
addBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if(taskText !== '') {
    createTask(taskText);
    taskInput.value = '';
    taskInput.focus();
  }
});

// Add task on Enter key
taskInput.addEventListener('keypress', (e) => {
  if(e.key === 'Enter') addBtn.click();
});


