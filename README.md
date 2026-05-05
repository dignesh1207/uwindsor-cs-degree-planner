# UWindsor Degree Planner

A full-stack web app for University of Windsor Computer Science students to plan their degree, browse the course catalog, and view professor ratings.

---

## Tech Stack

**Frontend**
- React 19 (Vite)
- React Context API for auth state

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT authentication
- bcryptjs for password hashing

---

## Project Structure

```
uwindsor-degree-planner/
├── frontend/               # React app (Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.jsx
│   │   │   ├── Onboarding.jsx
│   │   │   ├── Planner.jsx
│   │   │   ├── InfoTile.jsx
│   │   │   └── LoginModal.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── data/
│       └── courses.js      # Course catalog (used for seeding)
│
├── backend/                # Express API
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── userController.js
│   │   └── courseController.js
│   ├── middleware/
│   │   └── auth.js         # JWT middleware
│   ├── models/
│   │   ├── User.js
│   │   └── Course.js
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── userRoutes.js
│   │   └── courseRoutes.js
│   ├── config/
│   │   └── db.js
│   └── server.js
```

---

## Getting Started

### 1. Backend

```bash
cd backend
npm install
```

Create a `.env` file inside `backend/`:

```
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=any_random_secret_string
```

Then start the server:

```bash
npm run dev
```

Backend runs on `http://localhost:5000`

---

### 2. Frontend

```bash
cd frontend
npm install
npm run dev
```

Frontend runs on `http://localhost:5173`

---

## API Endpoints

| Method | Route | Auth | Description |
|--------|-------|------|-------------|
| POST | `/api/auth/register` | No | Register a new user |
| POST | `/api/auth/login` | No | Login and receive JWT |
| GET | `/api/user/profile` | Yes | Get logged-in user profile |
| GET | `/api/courses` | No | Get all courses |
| POST | `/api/courses/seed` | Yes | Seed the course catalog |
| GET | `/api/health` | No | Health check |

---

## Features

- Onboarding form to select school, program, and course load
- Semester-based course planner (full-time: 5 courses, part-time: 3 courses)
- Course info tile with professor name and rating display
- Login and Sign Up modal with JWT auth
- Token stored in localStorage and sent automatically on all protected requests
- Prerequisite logic in `frontend/logic/planner.js` (foundation for future enforcement)

---

## Planned Features

- Multi-semester degree plan (full 4-year view)
- Prerequisite validation when adding courses
- Credit tracking and graduation audit
- Real professor ratings integration
