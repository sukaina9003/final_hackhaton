// src/components/TaskCard.jsx
import React from 'react';
import { Draggable } from '@hello-pangea/dnd';
import { Card, CardContent, IconButton, Typography, Box } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

function TaskCard({ task, index }) {
  return (
    <Draggable draggableId={task.id} index={index}>
      {(provided) => (
        <Card
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          sx={{ mb: 1 }}
        >
          <CardContent>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography variant="subtitle1">{task.title}</Typography>
              <Box>
                <IconButton size="small" onClick={() => /* open edit */ null}>
                  <EditIcon fontSize="small" />
                </IconButton>
                <IconButton size="small" onClick={() => /* delete */ null}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </Box>
            </Box>
            <Typography variant="body2">Assigned to: {task.assignedTo}</Typography>
          </CardContent>
        </Card>
      )}
    </Draggable>
  );
}

// ← Add this line:
export default TaskCard;
