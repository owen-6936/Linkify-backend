# Contributing to Linkify Backend

We welcome contributions to the Linkify Backend project! Whether you're fixing bugs, adding new features, or improving documentation, your help is appreciated.
Please follow the guidelines below to ensure a smooth contribution process.

## Getting Started

To get started with contributing to the Linkify Backend, follow these steps:

1. **Fork the Repository:**
   Click the "Fork" button at the top right of the repository page to create a copy of the repository under your GitHub account.
2. **Clone the Forked Repository:**

   ```bash
   git clone https://github.com/yourusername/Linkify-backend.git
   ```

3. **Navigate to the Project Directory:**

   ```bash
   cd Linkify-backend
   ```

4. **Install Dependencies:**

   ```bash
   npm install
   ```

5. **Create a `.env` File:**
   Create a `.env` file in the root directory and add your database credentials:

   ```env
   DB_HOST=localhost
   DB_USER=root
   DB_PASS=password
   DB_NAME=linkify
   ```

6. **Set Up the Database:**
   Create a MySQL database named `linkify` and run the following SQL command to create the necessary table:

   ```sql
   CREATE TABLE links (
       id INT AUTO_INCREMENT PRIMARY KEY,
       long_url VARCHAR(2048) NOT NULL,
       short_code VARCHAR(255) NOT NULL UNIQUE,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
   );
   ```

7. **Start the Server:**

   ```bash
   npm start
   ```

## Making Changes

1. **Create a New Branch:**

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. **Make Your Changes:**
   Implement your feature or fix the bug. Ensure your code follows the existing style and conventions.
3. **Commit Your Changes:**

   ```bash
   git add .
   git commit -m "Add your commit message here"
   ```

4. **Push Your Changes:**

   ```bash
   git push origin feature/your-feature-name
   ```

5. **Create a Pull Request:**
   Go to the original repository and create a pull request from your feature branch.

6. **Respond to Feedback:**
   Be open to feedback and make any requested changes to your pull request.

7. **Reporting Issues:**
   If you encounter any bugs or have suggestions for improvements, please open an issue in the [Issues](https://github.com/owen-6936/Linkify-backend/issues) section of the repository.

## Code of Conduct

Please adhere to the [Code of Conduct](CODE_OF_CONDUCT.md) in all your interactions with the project.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

- **Node.js** (version 14 or higher)
- **npm** (Node Package Manager)
- **MySQL** (running locally or accessible)
- **Git** (for version control)
- **GitHub Account** (to fork and create pull requests)

### Running the Application

```bash
npm start
```

This will start the server on the default port (usually 3000). You can access the API endpoints using a tool like Postman or via your web browser.
