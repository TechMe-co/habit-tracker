# Habit Tracker

A Habit Tracker is a web application that allows users to manage their habits by adding, deleting, and viewing their progress. Users can sign up, log in, and manage their habits in a user-friendly interface.

## Features

- **User Authentication**: Users can register and log in using Firebase Authentication.
- **Habit Management**: Users can add new habits, update existing habits, or delete habits they no longer wish to track.
- **Real-time Database**: All data is stored in Firestore, providing real-time updates and synchronization across devices.
- **Responsive Design**: The application is designed to work well on both desktop and mobile devices.

## Tech Stack

- **Frontend**: React.js
- **Backend**: Firebase (Firestore for database, Authentication for user management)
- **Development Environment**: Vite as the build tool

## Installation

Follow these steps to run the Habit Tracker application locally:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/your-username/habit-tracker.git
   cd habit-tracker
2. **Install dependencies:** Make sure you have Node.js installed. Then, run:
    ```bash
    npm install
3. **Set up Firebase:**
    - Go to the Firebase Console and create a new project.
    - Enable Firestore and Authentication (use Email/Password method).
    - Create a .env file in the root of your project and add your Firebase configuration values:
    ```bash
        VITE_API_KEY=your_api_key
        VITE_AUTH_DOMAIN=your_project_id.firebaseapp.com
        VITE_PROJECT_ID=your_project_id
        VITE_STORAGE_BUCKET=your_project_id.appspot.com
        VITE_MESSAGING_SENDER_ID=your_sender_id
        VITE_APP_ID=your_app_id
4. **Run the application:**
    ```bash
    npm run dev
     <!-- Open your browser and visit http://localhost:3000 to see the application. -->

## Usage
- Register: Click on the register button to create a new account.
- Login: After registration, you can log in with your credentials.
- Manage Habits:
    - **Once logged in, you can add habits, view all your habits, and delete them as needed.**

## Contributing
If you'd like to contribute to this project, please fork the repository and submit a pull request with your changes.

## License
This project is is license-free.

## Contact
For any questions or feedback, reach out to prettysmiler6@gmail.com.