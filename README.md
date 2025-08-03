## Event Management App

A responsive and interactive Event Management application built using **React**, **TypeScript**, **Material UI**, and **Tailwind CSS**.  
This application allows users to **create**, **view**, **edit**, and **delete** events, with persistent data storage using **localStorage**.

---

##  Features

- ✅ Create new events with:
  - Title
  - Description
  - Venue
  - Date
- ✅ View a list of all created events
  - Events are styled differently if the date is in the past
- ✅ Edit existing events with **validation**
  - Prevents scheduling two events at the same date and venue
- ✅ Delete events
- ✅ Persistent storage using localStorage (no backend)
- 🗓️ (Optional) Calendar view of all events

---

##  Tech Stack

| Technology     | Purpose                     |
|----------------|-----------------------------|
| React          | Frontend library            |
| TypeScript     | Type safety and tooling     |
| Material UI    | UI Components               |
| Tailwind CSS   | Utility-first styling       |
| react-hook-form| Form management             |
| localStorage   | In-browser data persistence |

---

##  Folder Structure

src/
│
├── components/
│ ├── CreateEvent.tsx # Event creation & update form
│ ├── EventCard.tsx # Individual event display
│ ├── EventList.tsx # Event list view
│ └── CalendarView.tsx # (Optional) calendar display
│
├── types/
│ └── Event.ts # Type definition for events
│
├── App.tsx # App routes and layout
└── index.tsx / main.tsx # React entry point


## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/event-management.git
cd event-management
2. Install Dependencies
bash
Copy
Edit
npm install
3. Start the Development Server
bash
Copy
Edit
npm start
The app will be available at:
👉 http://localhost:3000

***How It Works***
Events are stored in the browser using localStorage

When an event is added, updated, or deleted, the data is synchronized with localStorage

On reload, the app fetches data from localStorage and displays it

Events in the past are styled with a different color for better visibility

Update form includes validation to prevent duplicate events at the same time & venue

 ***Deployment***
You can deploy this app easily using:

▶️ Deploy to Render
Push the code to GitHub

Go to https://app.netlify.com

## Screenshots

