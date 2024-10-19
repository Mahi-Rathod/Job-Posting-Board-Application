# Job Posting Board

This is a **Job Posting Board** application built using React (Vite) on the frontend, Express.js for the backend API, and MongoDB for data storage. The platform allows job seekers to browse job listings and employers to post and manage job opportunities.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Environment Variables](#environment-variables)
- [API Endpoints](#api-endpoints)
- [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

---

## Features

- **Job Seekers**:
  - Browse available job listings.
  - Filter jobs by category, location, and company.
  - View detailed job descriptions.

- **Employers**:
  - Post new job opportunities.
  - Manage existing job postings (edit, delete).
  - Track applicant views.

- **Authentication**:
  - OTP-based sign-up and login (no passwords).

---

## Tech Stack

### Frontend
- **React.js** (with Vite for fast development)
- **React Router** for routing
- **Axios** for API requests

### Backend
- **Node.js** (Express.js for server-side API)
- **MongoDB** (Database for storing jobs, users, etc.)
- **Mongoose** (ODM for MongoDB)

---

## Installation

### Prerequisites
Make sure you have the following installed on your machine:
- **Node.js** (v14 or higher)
- **MongoDB** (Ensure you have MongoDB running locally or use a cloud provider like MongoDB Atlas)

---

### Backend Setup (Express)

1. Clone the repository:
   ```
   git clone https://github.com/your-username/job-posting-board.git
   cd job-posting-board
   ```
   
2. Navigate to the backend directory:
   ```
   cd backend
   ```
3. Install the dependencies:
   ```
   npm install
   ```

4. Set up environment variables by creating a .env file in the backend directory:
  ``` touch .env```

5. Add the following environment variables:

    - PORT
    - CORS_ORIGIN
    - MONGODB_URI
    - ACCESS_TOKEN_SECRET
    - ACCESS_TOKEN_EXPIRY
    - REFRESH_TOKEN_SECRET
    - REFRESH_TOKEN_EXPIRY
    - EMAIL_USER
    - EMAIL_PASS

6. Start the server:
  `npm run dev`

### Frontend Setup (React with Vite)

1. Navigate to the frontend directory:
  ```
  cd ../frontend
  ```

2. Install the dependencies:
  `npm install`

3. Set up environment variables by creating a .env file in the frontend directory:
  `touch .env`

4. Add the following variables for the frontend:
   `VITE_API_URL=http://localhost:5000/api`

5. Start the frontend development server:
  `npm run dev`

### Screenshots 
### SignUP
![SignUP Page](./Screenshots/s1.png)

### Varify OTP
![Varify OTP](./Screenshots/s2.png)

### Home Page
![Home Page](./Screenshots/s3.png)

### Arrange Interview
![Arrange Interview](./Screenshots/s4.png)
