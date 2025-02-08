# Social Network API

## Description
A RESTful API for a social network application where users can create accounts, share thoughts, react to posts, and manage friend lists. Built with Node.js, Express.js, MongoDB, and Mongoose for handling unstructured data efficiently.

## Technologies Used
- **Node.js**
- **Express.js**
- **MongoDB**
- **Mongoose ODM**
- **TypeScript**
- **Nodemon** (for development)

## Installation
1. Clone the repository:
   ```sh
   git clone <https://github.com/Azugr/Module-17-Challenge>
   cd Social-Network
   ```
2. Initialize the project and install dependencies:
   ```sh
   npm init -y
   npm install express mongoose dotenv
   ```
3. Install development dependencies:
   ```sh
   npm i typescript @types/express @types/mongoose --save-dev
   ```
4. Install all packages:
   ```sh
   npm install
   ```
5. Build the project:
   ```sh
   npm run build
   ```
6. Start the application:
   ```sh
   npm start
   ```
7. Set up the database connection:
   - Create a `.env` file with the following:
     ```env
      MONGODB_URI=mongodb://127.0.0.1:27017/socialNetworkDB
      PORT=3001
     ```

## Usage
1. Start the production server:
   ```sh
   npm run start
   ```
3. Test API endpoints using **Insomnia** or **Postman**.

## API Endpoints
### **Users** `/api/users`
- `GET /api/users` → Get all users
- `GET /api/users/:id` → Get a single user by ID
- `POST /api/users` → Create a new user
- `PUT /api/users/:id` → Update a user
- `DELETE /api/users/:id` → Remove a user

### **Friends** `/api/users/:userId/friends/:friendId`
- `POST` → Add a friend
- `DELETE` → Remove a friend

### **Thoughts** `/api/thoughts`
- `GET /api/thoughts` → Get all thoughts
- `GET /api/thoughts/:id` → Get a single thought by ID
- `POST /api/thoughts` → Create a new thought
- `PUT /api/thoughts/:id` → Update a thought
- `DELETE /api/thoughts/:id` → Remove a thought

### **Reactions** `/api/thoughts/:thoughtId/reactions`
- `POST` → Create a reaction
- `DELETE /:reactionId` → Remove a reaction

## Walkthrough Video
[GitHub Repository](https://github.com/Azugr/Module-17-Challenge)

## License
This project is licensed under the **MIT License**.

## Author
[María Azucena García Rodríguez]

