export interface EventItem {
  id: string;
  title: string;
  description: string;
  venue: string;  // previously added
  date: string;   // ISO date string
  location?: string; // optional, add if you want to keep 'location' separate from venue
  time?: string;     // optional, if you want to store time separately
}
