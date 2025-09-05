# Linkify Backend

## Overview

This is the robust backend for the Linkify URL shortening service, developed as a key component of my full-stack development portfolio. The backend is responsible for all the core logic, including API request handling, database management, and URL redirection.

## Features

- **URL Shortening API:** An endpoint to accept a long URL and return a unique, short version.

- **Efficient Redirection:** A redirection service that takes a short code and redirects users to the original long URL.

- **MySQL Integration:** Persists all original and shortened URLs in a relational database for reliable storage.

- **Environment Variables:** Securely manages sensitive data like database credentials using a `.env` file.

## Technology Stack

- **Node.js:** The JavaScript runtime environment for building the server.

- **Express.js:** A fast and minimalist web framework for handling routes and requests.

- **MySQL:** The relational database for storing link data.

- **dotenv:** A module to load environment variables from a `.env` file.

## Getting Started

Follow these steps to set up and run the Linkify backend locally for development.

### Prerequisites

- **Node.js** (LTS version recommended)

- **npm** (Node Package Manager)

- **MySQL** (running locally or accessible)

### Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/Linkify-backend.git
   ```

2. **Navigate to the Project Directory:**

   ```bash
   cd Linkify-backend
   ```

3. **Install Dependencies:**

   ```bash
   npm install
   ```

4. **Create a `.env` File:**
   Create a `.env` file in the root directory and add your database credentials:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=password
   DB_NAME=linkify
   ```

5. **Set Up the Database:**
   Create a MySQL database named `linkify` and run the following SQL command to create the necessary table:

   ```sql
   CREATE TABLE links (
       id INT AUTO_INCREMENT PRIMARY KEY,
       long_url VARCHAR(2048) NOT NULL,
       short_code VARCHAR(255) NOT NULL UNIQUE,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

6. **Start the Server:**

   ```bash
   npm start
   ```

The server will start on `http://localhost:3000`.

### Environment Variables

Make sure to configure the following environment variables in your `.env` file:

- `DB_HOST`: The hostname of your MySQL server (e.g., `localhost`).
- `DB_USER`: Your MySQL username.
- `DB_PASS`: Your MySQL password.
- `DB_NAME`: The name of the database to use (e.g., `linkify`).
- `PORT`: The port number on which the server will run (default is `3000`).

## Usage

To use the Linkify API, send HTTP requests to the appropriate endpoints.

### Testing the API

You can test the API endpoints using tools like Postman or cURL.

### API Endpoints

- **POST /api/shorten**
  - Request Body: `{ "longUrl": "https://example.com" }`
  - Response: `{ "shortUrl": "http://localhost:3000/abc123" }`

- **GET /:shortCode**
  - Redirects to the original long URL associated with the `shortCode`.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. Make sure to follow best practices and include tests for any new features.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contact

For inquiries, please reach out to [erhaborowen3@gmail.com](mailto:erhaborowen3@gmail.com).
Feel free to connect with me on [LinkedIn](https://www.linkedin.com/in/owen-erhabor-80958b262) or check out my other projects on [GitHub](https://github.com/owen-6936).
Thank you for using Linkify!

## Acknowledgments

- Inspired by various URL shortening services and web development best practices.
- Thanks to the open-source community for the tools and libraries that made this project possible.
- Special thanks to my mentors and peers for their support and feedback during development.

## Resources

- [Express.js](https://expressjs.com/)
- [MySQL](https://www.mysql.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [Node.js](https://nodejs.org/)
- [MIT License](https://opensource.org/licenses/MIT)
- [Postman](https://www.postman.com/)
- [cURL](https://curl.se/)
- [GitHub](https://github.com/owen-6936)
- [LinkedIn](https://www.linkedin.com/in/owen-erhabor-80958b262)
- [Email](mailto:erhaborowen3@gmail.com)
- [Linkify Frontend Repository](https://github.com/owen-6936/Linkify-frontend)
- [Linkify Live Demo](https://owen-6936.github.io/Linkify-frontend/)
