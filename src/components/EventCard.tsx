import React from 'react';
import { EventItem } from '../types/Event';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { isPast, format } from 'date-fns';

interface Props {
  event: EventItem;
  onEdit: (event: EventItem) => void;
  onDelete: (id: string) => void;
}

export default function EventCard({ event, onEdit, onDelete }: Props) {
  const past = isPast(new Date(event.date));

  return (
    <Card
      sx={{
        mb: 2,
        bgcolor: past ? '#f0f0f0' : '#e3f2fd',
      }}
    >
      <CardContent>
        <Typography variant="h6">{event.title}</Typography>
        <Typography color="textSecondary">{format(new Date(event.date), 'PPP')}</Typography>
        <Typography>Venue: {event.venue}</Typography>
        <Typography>{event.description}</Typography>
        <Box mt={1}>
          <Button size="small" onClick={() => onEdit(event)}>
            Edit
          </Button>
          <Button size="small" color="error" onClick={() => onDelete(event.id)}>
            Delete
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
}
