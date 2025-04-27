import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios'; // Make sure you have axios installed
import { v4 as uuidv4 } from 'uuid'; // Optional, if you still want to use uuid for task id generation

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks from the database on initial load
  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const res = await axios.get('http://localhost:5000/api/tasks'); // Adjust the URL for your backend
        setTasks(res.data);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  // Create a new task (default status: "todo")
  const addTask = async ({ title, description, assignedTo }) => {
    const newTask = {
      title,
      description,
      assignedTo,
      status: 'todo',
    };

    try {
      const res = await axios.post('http://localhost:5000/api/tasks', newTask); // Adjust the URL for your backend
      setTasks((prev) => [...prev, res.data]); // Add the new task to the state
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Update any field(s) of a task by id
  const updateTask = async (id, updates) => {
    try {
      const res = await axios.patch(`http://localhost:5000/api/tasks/${id}`, updates); // Adjust the URL for your backend
      setTasks((prev) =>
        prev.map((task) =>
          task._id === id ? { ...task, ...res.data } : task
        )
      );
    } catch (error) {
      console.error('Error updating task:', error);
    }
  };

  // Remove a task by id
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/tasks/${id}`); // Adjust the URL for your backend
      setTasks((prev) => prev.filter((task) => task._id !== id)); // Remove the task from state
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Move a task to a different column/status (e.g., "todo", "in-progress", "done")
  const moveTask = async (id, newStatus) => {
    try {
      await updateTask(id, { status: newStatus }); // Update the task's status in the database
    } catch (error) {
      console.error('Error moving task:', error);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask, moveTask }}>
      {children}
    </TaskContext.Provider>
  );
}

// Custom hook for easy consumption
export function useTasks() {
  const context = useContext(TaskContext);
  if (!context) {
    throw new Error('useTasks must be used within a TaskProvider');
  }
  return context;
}
