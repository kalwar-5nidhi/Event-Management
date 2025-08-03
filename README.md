## Event Management App

A responsive and interactive Event Management application built using **React**, **TypeScript**, **Material UI**, and **Tailwind CSS**.  
This application allows users to **create**, **view**, **edit**, and **delete** events, with persistent data storage using **localStorage**.

---

##  Features

- Create new events with:
  - Title
  - Description
  - Venue
  - Date
- View a list of all created events
  - Events are styled differently if the date is in the past (color changed)
- Edit existing events with **validation**
  - Prevents scheduling two events at the same date and venue
- Delete events
- Persistent storage using localStorage (no backend)


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
│ 
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
[http://localhost:3000](http://localhost:3000)

***How It Works***
Events are stored in the browser using localStorage
When an event is added, updated, or deleted, the data is synchronized with localStorage
On reload, the app fetches data from localStorage and displays it
Events in the past are styled with a different color for better visibility
Update form includes validation to prevent duplicate events at the same time & venue

## Deploy to Render
[View Live App on Render](https://dashboard.render.com/web/srv-d27ksnuuk2gs73eag8f0/deploys/dep-d27kso6uk2gs73eag8o0)
Push the code to GitHub

## Screenshots
## Homepage
<img width="1919" height="910" alt="Screenshot 2025-08-03 173752" src="https://github.com/user-attachments/assets/948a2286-bb1f-436d-a11d-418b6f93a634" />
## Createpage
<img width="1918" height="911" alt="Screenshot 2025-08-03 173441" src="https://github.com/user-attachments/assets/40853241-4b44-4816-996f-cea9a6836c56" />
## Eventpage
<img width="1916" height="907" alt="Screenshot 2025-08-03 173334" src="https://github.com/user-attachments/assets/d14fb846-c25c-49b4-8251-a012a146eb1d" />
## updatepage
<img width="1919" height="914" alt="Screenshot 2025-08-03 173512" src="https://github.com/user-attachments/assets/d48e1aca-4693-401b-b798-f9d5794bc163" />
## After Update
<img width="1919" height="904" alt="Screenshot 2025-08-03 173543" src="https://github.com/user-attachments/assets/b65d4350-2001-4089-8f79-c817a066dfab" />
## Local storage
<img width="1919" height="909" alt="Screenshot 2025-08-03 173733" src="https://github.com/user-attachments/assets/54a79aa6-8251-4be3-b71d-6e8eaf94c17a" />








