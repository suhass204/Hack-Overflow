# SecureGram: AI-Powered Secure Messaging Platform


SecureGram is a secure and intelligent chat platform designed to provide safe communication while integrating AI-driven message filtering and administrative controls.

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
- Node.js
- MongoDB
- Python (for ML model)

### Setup
1. Clone the repository:
   ```sh
   git clone https://github.com/suhass204/Hack-Overflow.git
   cd Hack-Overflow
   ```
2. Install backend dependencies:
   ```sh
   npm install
   ```
3. Set up the ML service:
   - Ensure Python is installed.
   - Install necessary dependencies:
     ```sh
     pip install -r requirements.txt
     ```
   - Run the ML service:
     ```sh
     python ml_service.py
     ```
4. Start the backend server:
   ```sh
   node server.js
   ```
5. Open `index.html` in a browser to access the frontend.

## Usage
1. Users can register and log in to access SecureGram.
2. Chat in real time with AI filtering to prevent inappropriate messages.
3. Admins can view flagged users and take necessary actions.

## Contributing
Contributions are welcome! Feel free to submit a pull request or open an issue.

## Contact
For any inquiries, reach out at suhasgowda540@gmail.com

