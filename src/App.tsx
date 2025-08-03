import { Box } from "@mui/material";
import { Route, Routes, useNavigate } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import EventList from "./pages/EventList";
import CreateEvent from "./pages/CreateEvent";
import Sidebar from "./components/Sidebar";
import { useEffect, useState } from "react";
import { EventItem } from "./types/Event";

const App = () => {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [editEvent, setEditEvent] = useState<EventItem | null>(null);
  const navigate = useNavigate();

  // Load from localStorage on startup
  useEffect(() => {
    const storedEvents = localStorage.getItem("events");
    if (storedEvents) {
      setEvents(JSON.parse(storedEvents));
    }
  }, []);

  // Save to localStorage whenever events change
  useEffect(() => {
    localStorage.setItem("events", JSON.stringify(events));
  }, [events]);

  const saveEvent = (event: EventItem) => {
    if (editEvent) {
      // update existing
      const updated = events.map((e) => (e.id === event.id ? event : e));
      setEvents(updated);
      setEditEvent(null);
    } else {
      // create new
      setEvents([...events, { ...event, id: Date.now().toString() }]);
    }
    navigate("/events");
  };

  const deleteEvent = (id: string) => {
    setEvents(events.filter((event) => event.id !== id));
  };

  const startEdit = (event: EventItem) => {
    setEditEvent(event);
    navigate(`/edit/${event.id}`);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route
            path="/events"
            element={
              <EventList events={events} onEdit={startEdit} onDelete={deleteEvent} />
            }
          />
          <Route
            path="/create"
            element={<CreateEvent onSave={saveEvent} editEvent={null} />}
          />
          <Route
            path="/edit/:id"
            element={<CreateEvent onSave={saveEvent} editEvent={editEvent} />}
          />
        </Routes>
      </Box>
    </Box>
  );
};

export default App;
