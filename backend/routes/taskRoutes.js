// backend/routes/taskRoutes.js
import express from 'express';
import Task from '../models/Task.js'; // Assuming you have a Task model
const router = express.Router();

// GET all tasks
router.get('/', async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching tasks', error });
  }
});

// POST a new task
router.post('/', async (req, res) => {
  const { title, description, assignedTo, status } = req.body;
  try {
    const newTask = new Task({
      title,
      description,
      assignedTo,
      status: status || 'todo', // default status is 'todo'
    });
    await newTask.save();
    res.status(201).json(newTask); // Send the newly created task back
  } catch (error) {
    res.status(500).json({ message: 'Error adding task', error });
  }
});
router.patch('/:id', async (req, res) => {
    try {
      const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!task) {
        return res.status(404).json({ message: 'Task not found' });
      }
      res.json(task);
    } catch (error) {
      res.status(500).json({ message: 'Error updating task', error });
    }
  });
  router.get('/tasks', async (req, res) => {
    try {
      const tasks = await Task.find();  // Fetch tasks from the database
      res.json(tasks);  // Send the tasks as a JSON response
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  });

export default router;
