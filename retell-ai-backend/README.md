# Retell AI Backend

## Overview
The Retell AI backend is a Node.js application built with Express and Mongoose. It serves as the server-side component of the Retell AI application, handling various functionalities such as user management, payment reminders, and customer queries.

## Project Structure
```
retell-ai-backend
├── src
│   ├── app.js
│   ├── controllers
│   │   ├── paymentRemindersController.js
│   │   ├── newUsersController.js
│   │   └── customerQueriesController.js
│   ├── models
│   │   ├── Payment.js
│   │   ├── User.js
│   │   └── Query.js
│   ├── routes
│   │   ├── paymentReminders.js
│   │   ├── newUsers.js
│   │   └── customerQueries.js
│   ├── services
│   │   ├── retellVoiceAgent.js
│   │   ├── retellChatAgent.js
│   │   └── outboundAIWorkflow.js
│   └── utils
│       └── db.js
├── .env
├── .gitignore
├── package.json
└── README.md
```

## Setup Instructions

1. **Clone the repository**
   ```
   git clone <repository-url>
   cd retell-ai-backend
   ```

2. **Install dependencies**
   ```
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory and add the necessary environment variables, such as:
   ```
   DATABASE_URL=<your-database-url>
   ```

4. **Run the application**
   ```
   npm start
   ```

## Usage
- The backend exposes various endpoints for managing users, payment reminders, and customer queries.
- Refer to the individual controller files for specific endpoint details and usage.

## Contributing
Contributions are welcome! Please submit a pull request or open an issue for any enhancements or bug fixes.

## License
This project is licensed under the MIT License.