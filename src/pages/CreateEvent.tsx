import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { EventItem } from "../types/Event";
import { TextField, Button, Box } from "@mui/material";

interface Props {
  onSave: (event: EventItem) => void;
  editEvent: EventItem | null;
}

const CreateEvent: React.FC<Props> = ({ onSave, editEvent }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [venue, setVenue] = useState("");
  const [date, setDate] = useState("");
  
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    if (editEvent) {
      setTitle(editEvent.title);
      setDescription(editEvent.description);
      setVenue(editEvent.venue);
      setDate(editEvent.date);
    }
  }, [editEvent]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !description || !venue || !date) {
      alert("Please fill all fields");
      return;
    }
    onSave({
      id: editEvent?.id || Date.now().toString(),
      title,
      description,
      venue,
      date,
    });
    navigate("/events");
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 400, mx: "auto", mt: 4 }}>
      <TextField
        label="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Venue"
        value={venue}
        onChange={(e) => setVenue(e.target.value)}
        required
        fullWidth
        margin="normal"
      />
      <TextField
        label="Date"
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
        fullWidth
        margin="normal"
        InputLabelProps={{ shrink: true }}
      />
      <Button type="submit" variant="contained" sx={{ mt: 2 }}>
        {editEvent ? "Update Event" : "Create Event"}
      </Button>
    </Box>
  );
};

export default CreateEvent;
