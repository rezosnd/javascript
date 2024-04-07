// App.js
import React, { useState } from 'react';
import './App.css';
import TaskList from './TaskList';
import AddTask from './AddTask';

function App() {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const editTask = (taskId, updatedTask) => {
    const updatedTasks = tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (taskId) => {
    const updatedTasks = tasks.filter(task => task.id !== taskId);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>ToDo App</h1>
      <AddTask addTask={addTask} />
      <TaskList
        tasks={tasks}
        editTask={editTask}
        deleteTask={deleteTask}
      />
    </div>
  );
}

export default App;

// TaskList.js
import React from 'react';
import Task from './Task';

function TaskList({ tasks, editTask, deleteTask }) {
  return (
    <div className="task-list">
      <h2>Tasks</h2>
      {tasks.map(task => (
        <Task
          key={task.id}
          task={task}
          editTask={editTask}
          deleteTask={deleteTask}
        />
      ))}
    </div>
  );
}

export default TaskList;

// Task.js
import React from 'react';

function Task({ task, editTask, deleteTask }) {
  const handleEdit = () => {
    const updatedTaskName = prompt('Enter the updated task name:', task.name);
    if (updatedTaskName !== null) {
      editTask(task.id, { name: updatedTaskName });
    }
  };

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this task?')) {
      deleteTask(task.id);
    }
  };

  return (
    <div className="task">
      <div>
        <strong>{task.name}</strong>
        <p>{task.description}</p>
        <p>Priority: {task.priority}</p>
      </div>
      <div>
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
}

export default Task;

// AddTask.js
import React, { useState } from 'react';

function AddTask({ addTask }) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('Low');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    const newTask = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      description,
      priority,
    };
    addTask(newTask);
    setName('');
    setDescription('');
    setPriority('Low');
  };

  return (
    <form onSubmit={handleSubmit} className="add-task">
      <input
        type="text"
        placeholder="Task Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default AddTask;
