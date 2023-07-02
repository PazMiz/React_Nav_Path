import React, { useEffect, useState } from 'react';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPhoto, setNewTaskPhoto] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://127.0.0.1:8000/tasks/');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      setErrorMessage('Error fetching tasks');
    }
  };

  const createTask = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('title', newTaskTitle);
      if (newTaskPhoto) {
        formData.append('image', newTaskPhoto);
      }

      const response = await fetch('http://127.0.0.1:8000/tasks/create/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const task = await response.json();
        setTasks([...tasks, task]);
        setNewTaskTitle('');
        setNewTaskPhoto(null);
        setSuccessMessage('Task created successfully');
      } else {
        setErrorMessage('Error creating task');
      }
    } catch (error) {
      setErrorMessage('Error creating task');
    }
  };

  const deleteTask = async (taskId) => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/tasks/delete/${taskId}/`, {
        method: 'DELETE',
      });

      if (response.ok) {
        setTasks(tasks.filter((task) => task.id !== taskId));
        setSuccessMessage('Task deleted successfully');
      } else {
        setErrorMessage('Error deleting task');
      }
    } catch (error) {
      setErrorMessage('Error deleting task');
    }
  };

  const updateTask = async (taskId, updatedTask) => {
    try {
      const formData = new FormData();
      formData.append('title', updatedTask.title);
      formData.append('completed', updatedTask.completed); // Append the completed value

      if (updatedTask.image instanceof File) {
        formData.append('image', updatedTask.image);
      }

      const response = await fetch(`http://127.0.0.1:8000/tasks/update/${taskId}/`, {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const updatedData = await response.json();
        setTasks(tasks.map((task) => (task.id === taskId ? updatedData : task)));
        setSuccessMessage('Task updated successfully');
      } else {
        setErrorMessage('Error updating task');
      }
    } catch (error) {
      setErrorMessage('Error updating task');
    }
  };

  return (
    <div className="task-list">
      <h2>Paz Task CRUD LIST</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <div>
              <img
                src={`http://127.0.0.1:8000${task.image}`}
                alt={task.title}
                style={{ width: '100px' }}
              />
              <h3>{task.title}</h3>
              <p>Completed: {task.completed ? 'Yes' : 'No'}</p>
            </div>
            <input
              type="file"
              accept="image/*"
              onChange={(e) => updateTask(task.id, { ...task, image: e.target.files[0] })}
            />
            <br />
            <button onClick={() => deleteTask(task.id)}>Delete</button>
            <button
              onClick={() => updateTask(task.id, { ...task, completed: !task.completed })}
            >
              {task.completed ? 'Mark as Incomplete' : 'Mark as Complete'}
            </button>
          </li>
        ))}
      </ul>

      {successMessage && <div style={{ color: 'green' }}>{successMessage}</div>}
      {errorMessage && <div style={{ color: 'red' }}>{errorMessage}</div>}

      <div className="task-form">
        <form onSubmit={createTask} encType="multipart/form-data">
          <input
            type="text"
            value={newTaskTitle}
            onChange={(e) => setNewTaskTitle(e.target.value)}
          />
          <input
            type="file"
            accept="image/*"
            onChange={(e) => setNewTaskPhoto(e.target.files[0])}
          />
          <hr />
          <button type="submit">Create Task</button>
          <hr />
          <h1>TicTacToe</h1>
        </form>
      </div>
    </div>
  );
};

export default TaskList;
