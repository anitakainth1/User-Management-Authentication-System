# User Management Authentication System

A full-stack MERN Authentication System that allows users to register, log in, and access protected profile pages using JWT authentication and bcrypt password encryption.

## Features

* User Registration and Login
* Secure Password Hashing using bcrypt
* JWT-based Authentication
* Protected Routes
* User Profile Management
* Responsive User Interface
* Error Handling and Validation

## Tech Stack

### Frontend

* React.js
* Vite
* HTML5
* CSS3
* JavaScript

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* JWT (JSON Web Token)
* bcrypt

## Project Structure

```text
frontend/
backend/
```

## Installation

### Clone the Repository

```bash
git clone https://github.com/anitakainth1/User-Management-Authentication-System.git
```

### Install Dependencies

For Backend:

```bash
cd backend
npm install
```

For Frontend:

```bash
cd frontend
npm install
```

### Environment Variables

Create a `.env` file inside the backend folder and add:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

### Run the Application

Backend:

```bash
npm run dev
```

Frontend:

```bash
npm run dev
```

## Screenshots

<img width="777" height="788" alt="image" src="https://github.com/user-attachments/assets/a7b97914-0bb1-4e94-90a5-e675493d3c3f" />
<img width="612" height="447" alt="image" src="https://github.com/user-attachments/assets/873698d5-8c3f-449b-9f5f-b03eb9a50735" />
<img width="643" height="755" alt="image" src="https://github.com/user-attachments/assets/9643b487-a293-49a9-830f-6a4126119973" />

 ## Database Records

The application stores user information securely in MongoDB. Each registered user is saved in the `users` collection along with encrypted passwords and authentication details.
The screenshot below shows the user records stored in the database after successful registration.
<img width="795" height="477" alt="image" src="https://github.com/user-attachments/assets/3a7f68d4-5000-4182-b337-2253bcdcc052" />





## Future Enhancements

* Email Verification
* Forgot Password Functionality
* Role-Based Authentication
* Google Authentication
* Two-Factor Authentication


