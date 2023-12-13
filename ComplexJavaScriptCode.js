/*
Filename: ComplexJavaScriptCode.js

This code demonstrates a complex and sophisticated implementation of a web application that allows users to manage their tasks, deadlines, and priorities.

Disclaimer: This code serves only as an example and is not meant to represent a complete and production-ready application. It assumes the availability of a compatible HTML and CSS structure.

*/

// Task Class represents a single task
class Task {
  constructor(title, description, priority) {
    this.id = Math.random();
    this.title = title;
    this.description = description;
    this.priority = priority;
  }
}

// TaskManager Class manages tasks
class TaskManager {
  constructor() {
    this.tasks = [];
  }
  
  addTask(task) {
    this.tasks.push(task);
  }
  
  deleteTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
  
  getTasks() {
    return this.tasks;
  }
}

// Initialize TaskManager
const taskManager = new TaskManager();

// Add sample tasks
taskManager.addTask(new Task('Complete Project', 'Finish the web application by tomorrow', 'High'));
taskManager.addTask(new Task('Prepare Presentation', 'Create slides for the upcoming meeting', 'Medium'));
taskManager.addTask(new Task('Buy Groceries', 'Get ingredients for the dinner party', 'Low'));

// Get all tasks
console.log(taskManager.getTasks());

// HTML DOM Interaction
const taskListElement = document.querySelector('#taskList');

// Function to render tasks in the task list
function renderTasks() {
  while (taskListElement.firstChild) {
    taskListElement.firstChild.remove();
  }
  
  taskManager.getTasks().forEach(task => {
    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    
    const taskTitleElement = document.createElement('h2');
    taskTitleElement.textContent = task.title;
    
    const taskDescriptionElement = document.createElement('p');
    taskDescriptionElement.textContent = task.description;
    
    const taskPriorityElement = document.createElement('span');
    taskPriorityElement.textContent = 'Priority: ' + task.priority;
    
    const deleteButtonElement = document.createElement('button');
    deleteButtonElement.textContent = 'Delete';
    deleteButtonElement.addEventListener('click', function() {
      taskManager.deleteTask(task.id);
      renderTasks();
    });
    
    taskElement.append(taskTitleElement, taskDescriptionElement, taskPriorityElement, deleteButtonElement);
    taskListElement.appendChild(taskElement);
  });
}

// Render the initial tasks
renderTasks();