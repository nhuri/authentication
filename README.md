# Authentication Module

This project implements a **robust user authentication system** in Node.js, designed to be **reusable across multiple future projects**. The idea behind this module is to avoid re-implementing user authentication every time a new project requires it, providing a ready-to-use, high-quality solution.

## Features

- **User Registration & Login** – Create accounts and login securely.
- **JWT-Based Authentication** – Secure access to protected routes using JSON Web Tokens.
- **Password Management** – Includes password hashing, reset via email, and password update functionality.
- **Role-Based Access Control** – Restrict routes or actions based on user roles.
- **Logout** – Secure logout mechanism with cookie handling.
- **Reusable Module** – Can be integrated into any Node.js project requiring authentication.

## Technology Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT, bcrypt for password hashing
- **Email**: NodeMailer for password reset emails
- **Utilities**: Async error handling, environment variables with dotenv

## API Endpoints

- `POST /register` – Register a new user with `name`, `email`, `password`, and `role`.
- `POST /login` – Authenticate user and receive JWT token.
- `POST /logout` – Clear authentication cookie.
- `POST /forgotPassword` – Request a password reset email.
- `PATCH /resetPassword/:token` – Reset password using the emailed token.
- `GET /protectedRoute` – Example of a route protected by JWT authentication.

## Usage

1. Clone the repository:
   ```bash
   git clone https://github.com/nhuri/authentication.git
Install dependencies:

npm install
Configure environment variables in a .env file:

PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=90d
EMAIL_HOST=smtp.yourmail.com
EMAIL_PORT=587
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
Start the server:

npm start
Benefits
Time-Saving: Eliminates the need to reimplement authentication in future projects.

Secure: Implements best practices for password storage and JWT authentication.

Scalable: Easy to extend with additional roles, permissions, or authentication methods.

Flexible: Works as a standalone module or integrated into larger applications.

Testing
All endpoints were tested using Postman to ensure correct behavior and security, including registration, login, password reset, and role-based access.

This authentication module is a solid foundation for any Node.js project that requires secure user login, management, and access control. It is designed to save time and provide a reliable, reusable solution for future development.

markdown
Copy code
