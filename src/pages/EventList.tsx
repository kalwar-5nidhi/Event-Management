// src/pages/EventList.tsx
import React from "react";
import { EventItem } from "../types/Event";
import EventCard from "../components/EventCard";
import Sidebar from "../components/Sidebar";

interface Props {
  events: EventItem[];
  onEdit: (event: EventItem) => void;
  onDelete: (id: string) => void;
}

const EventList: React.FC<Props> = ({ events, onEdit, onDelete }) => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 p-4">
        <h1 className="text-2xl font-bold mb-4">Events in Nepal</h1>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {events.map((event) => (
            <EventCard
              key={event.id}
              event={event}
              onEdit={onEdit}
              onDelete={onDelete}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventList;
