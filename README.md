# Mini Task Manager

This is a simple full-stack task management application I've built to preview CRUD operations, API design, validation, error handling, and better or standard project structure.

## Links

Project Walkthrough: https://drive.google.com/file/d/1I8yfzRIBJOq_gRlnBaoUnBZc-KlD-OF5/view?usp=sharing

## Features

This application has following features:

* Add a task
* View all tasks
* Mark a task as completed
* Delete a task
* Input validation using Zod
* Centralized error handling
* Responsive UI using TailwindCSS

---

## Tech Stack

I've tried to make it simple by using least possible libraries so attention and focus goes to the standard CRUD skeleton.

### Frontend

* Next.js (App Router)
* TypeScript
* TailwindCSS

### Backend

* Node.js
* Express
* TypeScript
* MongoDB
* Mongoose
* Zod

---

## Project Structure

```text
mini-task-manager
│
├── frontend
│   ├── src
│   │   ├── app
│   │   ├── components
│   │   ├── lib
│   │   └── types
│
├── backend
│   ├── src
│   │   ├── config
│   │   ├── controllers
│   │   ├── middleware
│   │   ├── models
│   │   ├── routes
│   │   ├── validators
│   │   ├── app.ts
│   │   └── server.ts
│
└── README.md
```

---

## Architecture Overview

The application follows a simple client-server architecture.

### Frontend

The frontend is built with Next.js and works with express js backend

Core features:

* Display tasks
* Handle basic user operations on app
* Call backend APIs
* Rendering loading and empty states for better user experience

### Backend

The backend follows separation of concerns:

* Routes → define API endpoints
* Controllers → contain business logic
* Models → interact with MongoDB
* Validators → validate incoming requests
* Middleware → handle errors centrally

---

## Error Handling

For clean and consistent logic I've added centralized Express error middleware using `next(error)`.


---

## Setup Instructions

### Clone Repository

```bash
git clone <repository-url>
cd mini-task-manager
```

---

### Backend Setup

```bash
cd backend
npm install
```

Create a `.env` file:

```env
PORT=8000
MONGO_URI=your_mongodb_connection_string
```

Start backend:

```bash
npm run dev
```

---

### Frontend Setup

```bash
cd frontend
npm install
```

Start frontend:

```bash
npm run dev
```

Frontend runs on:

```text
http://localhost:3000
```

Backend runs on:

```text
http://localhost:5001
```

---

## Design/Architectural Decisions

### Why Zod?

Provides type-safe request validation with clear error messages.

### Why Centralized Error Handling?

Reduces duplicated error handling code and keeps controllers logic separate.

### Why Component-Based UI?

Following standard approach: It improves readability, reusability, and maintainability.

---

## Future Improvements

If this project were expanded further, potential improvements could include:

* Task editing before completition
* Filtering by status, date, priority
* Search functionality
* Pagination for optimized database calls and better UX
* User friendly animations for UI updates
* Adding test cases, CI/CD, containerizing the application, using redis for caching, etc.

---
