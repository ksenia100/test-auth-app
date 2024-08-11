# React TypeScript Firebase Authentication Project

## Overview

This project is a React application built with TypeScript and Tailwind CSS, featuring Firebase Authentication for user registration, login, and admin panel functionalities. The frontend includes forms for user registration and login, along with an admin panel for viewing and updating user details.

## Features

- **Registration Form**: Allows users to create an account.
- **Login Form**: Enables users to log in to their account.
- **Admin Panel**: Displays user profile details and allows updating of email and password.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- Firebase Authentication

## Registration Form

### Requirements

- **Email Field**: Standard email validation.
- **Password Field**:
  - Minimum length: 6 characters
  - Maximum length: 20 characters
  - Must contain at least one lowercase letter, one uppercase letter, one number, and one special character.
  - Special character cannot be at the beginning or end of the password.

### Functionality

- A link to switch to the **Login Form**.
- A submit button that:
  - Checks the validation of the inputs.
  - Sends a registration request to Firebase Authentication.
  - Redirects to the Login Form upon successful registration.

## Login Form

### Requirements

- **Email Field**: Standard email validation.
- **Password Field**: Regular password input.

### Functionality

- A link to switch to the **Registration Form**.
- A submit button that:
  - Checks the validation of the inputs.
  - Sends a login request to Firebase Authentication.
  - Redirects to the Admin Panel if the user exists.
  - Displays the server response message if the user is not found.

## Admin Panel

### Functionality

- Sends a request to Firebase Authentication to retrieve user data.
- Displays user details including:
  - Profile image
  - Email
  - Password
- Allows users to update their email and password.

### Installation

Clone the repository and install the dependencies:
```bash
git clone https://github.com/ksenia100/test-auth-app.git
cd formula-input
npm install
```

To start the development server, run:
```bash
npm start
```

This will start the application on http://localhost:3000/.