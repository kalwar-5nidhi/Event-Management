import { EventItem } from '../types/Event';

const STORAGE_KEY = 'events';

export const saveEvents = (events: EventItem[]) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
};

export const loadEvents = (): EventItem[] => {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
};
