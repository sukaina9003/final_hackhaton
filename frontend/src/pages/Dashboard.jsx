import React, { useState } from 'react';
import { DragDropContext } from '@hello-pangea/dnd';
import { Box, Card, CardContent, Button, Typography, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // 👈 Import navigate
import { useTasks } from '../context/TaskContext';
import TaskColumn from '../components/TaskColumn';
import TaskFormDialog from '../components/TaskFormDialog';

export default function Dashboard() {
  const { tasks, addTask, moveTask, updateTask, deleteTask } = useTasks();
  const [dialogOpen, setDialogOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [taskToEdit, setTaskToEdit] = useState(null);
  const navigate = useNavigate(); // 👈 Initialize navigate

  const onDragEnd = (result) => {
    const { source, destination, draggableId } = result;
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;
    moveTask(draggableId, destination.droppableId);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  const filteredTasks = Array.isArray(tasks)
    ? tasks.filter(
        (task) =>
          task.title.toLowerCase().includes(searchQuery) ||
          task.assignedTo.toLowerCase().includes(searchQuery)
      )
    : [];

  const handleEditTask = (task) => {
    setTaskToEdit(task);
    setDialogOpen(true);
  };

  const handleDeleteTask = (taskId) => {
    deleteTask(taskId);
  };

  const handleLogout = () => {
    navigate('/'); // 👈 Redirect to landing page
  };

  if (tasks.length === 0) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '80vh',
          px: 2,
          mt: 8,
        }}
      >
        <Card sx={{ maxWidth: 600, width: '100%', p: 3, boxShadow: 4 }}>
          <CardContent>
            <Typography variant="h5" align="center" gutterBottom fontWeight="bold">
              Your Task Board is Empty
            </Typography>
            <Typography variant="body2" align="center" color="text.secondary" mb={4}>
              Start by adding your first task below.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, justifyContent: 'center', mb: 4 }}>
              {[1, 2, 3].map((i) => (
                <Card key={i} sx={{ width: 100, height: 100, p: 1, display: 'flex', justifyContent: 'center', alignItems: 'center', boxShadow: 2 }}>
                  <Typography variant="subtitle2" color="text.secondary">
                    Card {i}
                  </Typography>
                </Card>
              ))}
            </Box>
            <Box sx={{ textAlign: 'center' }}>
              <Button variant="contained" size="large" onClick={() => setDialogOpen(true)}>
                Add Task
              </Button>
            </Box>
          </CardContent>
        </Card>

        <TaskFormDialog
          open={dialogOpen}
          onClose={() => setDialogOpen(false)}
          initialData={{ title: '', description: '', assignedTo: '' }}
          onSave={(data) => {
            addTask(data);
            setDialogOpen(false);
          }}
        />
      </Box>
    );
  }

  return (
    <>
      <TaskFormDialog
        open={dialogOpen}
        onClose={() => setDialogOpen(false)}
        initialData={taskToEdit || { title: '', description: '', assignedTo: '' }}
        onSave={(data) => {
          if (taskToEdit) {
            updateTask(taskToEdit.id, data);
          } else {
            addTask(data);
          }
          setDialogOpen(false);
          setTaskToEdit(null);
        }}
      />

      {/* Header Section */}
      <Box sx={{ mb: 4, px: 4, mt: 8 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 2,
            position: 'relative',
          }}
        >
          {/* Logout Button top right */}
          <Button
            variant="outlined"
            color="error"
            size="small"
            sx={{ position: 'absolute', top: 0, right: 0 }}
            onClick={handleLogout}
          >
            Logout
          </Button>

          <Typography variant="h4" fontWeight="bold">
            My Task Board
          </Typography>

          <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
            <TextField
              variant="outlined"
              size="small"
              placeholder="Search by task or assignee"
              value={searchQuery}
              onChange={handleSearchChange}
              sx={{ width: 250 }}
            />
            <Button variant="contained" size="large" onClick={() => setDialogOpen(true)}>
              New Task
            </Button>
          </Box>
        </Box>
      </Box>

      {/* Drag and Drop Section */}
      <DragDropContext onDragEnd={onDragEnd}>
        <Box
          sx={{
            display: 'flex',
            gap: 4,
            px: 4,
            pb: 6,
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          <TaskColumn
            status="todo"
            title="To Do"
            tasks={filteredTasks.filter((t) => t.status === 'todo')}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
          <TaskColumn
            status="in-progress"
            title="In Progress"
            tasks={filteredTasks.filter((t) => t.status === 'in-progress')}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
          <TaskColumn
            status="done"
            title="Done"
            tasks={filteredTasks.filter((t) => t.status === 'done')}
            onEdit={handleEditTask}
            onDelete={handleDeleteTask}
          />
        </Box>
      </DragDropContext>
    </>
  );
}
