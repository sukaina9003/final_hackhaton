import React from 'react';
import { Droppable, Draggable } from '@hello-pangea/dnd';
import { Card, CardContent, Typography } from '@mui/material';

function TaskColumn({ status, title, tasks }) {
  return (
    <Droppable droppableId={status}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.droppableProps}
          style={{
            width: '300px',
            minHeight: '400px',
            border: '1px solid lightgray',
            borderRadius: '8px',
            padding: '8px',
          }}
        >
          <Typography variant="h6" gutterBottom>{title}</Typography>
          {tasks.map((task, index) => (
            <Draggable
              key={task._id} // Make sure you use a unique key
              draggableId={task._id} // This is required for drag-and-drop functionality
              index={index}
            >
              {(provided) => (
                <Card
                  ref={provided.innerRef}
                  {...provided.draggableProps}
                  {...provided.dragHandleProps}
                  sx={{ marginBottom: '10px' }}
                >
                  <CardContent>
                    <Typography variant="body2">{task.title}</Typography>
                  </CardContent>
                </Card>
              )}
            </Draggable>
          ))}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );
}

export default TaskColumn;
