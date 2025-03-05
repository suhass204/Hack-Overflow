# SecureGram: AI-Powered Secure Messaging Platform

SecureGram is a secure and intelligent chat platform designed for safe communication. It integrates AI-driven message filtering, machine learning (ML)-based detection, and administrative controls to identify and prevent drug-related messages in real time.

## Features
- **Secure Chatting**: Real-time messaging with an intuitive UI.
- **AI-Based Message Filtering**: Detects and flags inappropriate messages before sending.
- **Admin Panel**: Allows admins to monitor flagged users and take action.
- **User Authentication**: Secure registration and login system.

## Tech Stack
### Frontend:
- HTML, CSS, JavaScript (Vite for structured frontend)

### Backend:
- Node.js, Express.js
- MongoDB (Database)

### Machine Learning Integration:
- NLTK-based AI model for message filtering

## Installation

### Prerequisites
Ensure you have the following installed:
- Node.js
- MongoDB
- Python (for ML model)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/Vidyashree-H-Shetty/SecureGram.git
   cd SecureGram
   ```

2. Install backend dependencies:
   ```sh
   npm install
   ```

3. Set up the ML service:
   - Ensure Python is installed.
   - Install necessary dependencies:
     ```sh
     pip install nltk pandas flask
     ```
   - Run the ML service:
     ```sh
     python backend/python/ml_checker.py
     ```

4. Start the backend server:
   ```sh
   node backend/index.js
   ```

5. Start the chat server:
   ```sh
   node chat/server.js
   ```

6. Start the frontend server:
   ```sh
   cd frontend
   npm run dev
   ```

## Usage
- Users can register and log in to access SecureGram.
- Chat in real time with AI filtering to prevent inappropriate messages.
- Admins can view flagged users and take necessary actions.

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## Contact
For any inquiries, reach out at **xyz7@gmail.com**

