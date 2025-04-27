// backend/models/Task.js

import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  assignedTo: { type: String, required: true },
  status: { type: String, default: 'todo' }, // Default value for status
});

const Task = mongoose.model('Task', taskSchema);

export default Task; // Make sure to use export default here
