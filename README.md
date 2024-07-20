# Leads Tracker App

The Leads Tracker App is a web application designed to help you manage and track leads or URLs of interest using Firebase Realtime Database for storage and retrieval.

## Live Demo

Visit the live demo of the Leads Tracker App: [https://leads-tracker-app-waji.netlify.app](https://leads-tracker-app-waji.netlify.app)

## Table of Contents

- [Technologies Used](#technologies-used)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [JavaScript](#javascript)
- [HTML](#html)
- [CSS](#css)
- [Firebase](#firebase)
- [Contributing](#contributing)
- [License](#license)

## Technologies Used

- **Firebase**: Backend database to store leads in real-time.
- **HTML/CSS/JavaScript**: Frontend technologies for user interface and interaction.
- **Firebase SDK**: Specifically using Firebase SDK for JavaScript (`firebase-app` and `firebase-database`).

## Features

- **Add Leads**: Enter URLs into an input field and save them to Firebase.
- **Delete Leads**: Double-click on a lead to delete it (feature placeholder).
- **Display Leads**: Display a list of leads with clickable links.

## Installation

To get a copy of the project up and running on your local machine, follow these steps:

### Prerequisites

- Node.js installed on your machine (for serving files locally, if needed).
- A Firebase project with Realtime Database enabled.

### Clone the Repository

1. Clone the repository:

### Set Up Firebase

1. Create a Firebase project at [Firebase Console](https://console.firebase.google.com/).
2. Add your Firebase configuration (`firebaseConfig`) to `index.html` or a separate configuration file.

### Usage

1. Open `index.html` in your web browser.
2. Enter URLs into the input field and click "Add" to save them to Firebase.
3. Double-click on a lead to delete it (feature placeholder).
4. Leads are displayed in a list with clickable links.

## JavaScript

The JavaScript code (`script.js`) handles the interaction between the user interface and Firebase Realtime Database:

- **Firebase Initialization**: Initializes Firebase using `initializeApp` with `firebaseConfig`.
- **Database References**: Uses `getDatabase` and `ref` to create a reference to the "leads" node in the database.
- **Event Listeners**: Includes event listeners for adding leads (`inputBtn` click), deleting all leads (`deleteBtn` double-click), and updating the UI based on database changes (`onValue` listener).
- **Rendering**: Implements a `render` function to dynamically update the HTML (`ulEl`) with lead URLs fetched from Firebase.

## HTML

The HTML file (`index.html`) provides the structure and layout for the Leads Tracker App:

- **Input Field**: Allows users to input lead URLs.
- **Buttons**: Includes buttons for adding leads (`inputBtn`) and deleting all leads (`deleteBtn`).
- **List (`ulEl`)**: Displays lead URLs as clickable links (`<a>` tags) within list items (`<li>`).

## CSS

The CSS file (`styles.css`) styles the HTML elements to enhance the visual appearance and user experience of the app:

- **Layout**: Defines the overall layout and positioning of elements.
- **Styling**: Applies styles such as fonts, colors, margins, and padding to enhance readability and aesthetics.

## Firebase

Firebase Realtime Database (`firebase-database.js`) is used to store and retrieve leads URLs in real-time:

- **Data Storage**: Stores lead URLs under the "leads" node.
- **Real-time Updates**: Listens for changes (`onValue` listener) in the "leads" node and updates the UI (`render` function) accordingly.
- **Data Manipulation**: Allows adding new leads (`push` operation) and deleting all leads (`remove` operation) from the database.

## Contributing

Contributions are welcome! Please fork the repository and submit pull requests with any enhancements or bug fixes.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgments

- Inspired by [Firebase documentation](https://firebase.google.com/docs).
