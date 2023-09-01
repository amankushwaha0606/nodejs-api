
# Node.js Login and Signup API

A simple and secure Node.js API for user authentication using JSON Web Tokens (JWT).

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
  - [API Endpoints](#api-endpoints)
  - [Authentication](#authentication)
- [Contributing](#contributing)
- [License](#license)

## Introduction

This Node.js API provides the backend functionality for user authentication, including user registration (signup) and user login. It uses JSON Web Tokens (JWT) for secure authentication.

## Features

- User registration (signup) with password hashing
- User login with JWT authentication
- Middleware for route protection
- Secure password storage using bcrypt
- Custom error handling

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine
- MongoDB or another database system set up and configured
- Basic knowledge of Node.js, Express.js, and MongoDB

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/amankushwaha0606/nodejs-api.git
   cd nodejs-api
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Configuration

1. Create a `.env` file in the project root and add the following environment variables:

   ```env
   PORT=3000
   DB_URI=mongodb://localhost/auth-api
   JWT_SECRET=your-secret-key
   ```

   Replace `your-secret-key` with your own secret key for JWT token generation.

## Usage

### API Endpoints

- `POST /api/signup`: Register a new user.
- `POST /api/login`: Authenticate and log in a user.
- `GET /api/profile`: Get user profile data (requires authentication).

### Authentication

This API uses JWT (JSON Web Tokens) for authentication. To access protected routes, include the JWT token in the request headers as follows:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Replace `YOUR_JWT_TOKEN` with the actual JWT token obtained during login.

## Contributing

Contributions are welcome! Please feel free to fork the repository and submit pull requests to improve the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Related Repositories

- [Mini-Project](https://github.com/amankushwaha0606/parcel-delivery-system): Frontend code for the Mini-Project web application.

---
