# React User Dashboard & Messaging UI

A simple, modular React application that displays user profiles, login statuses, and interactive messaging components. This project focuses on understanding how to pass data between components using **Props** and handling **Conditional Rendering**.

## 🚀 Features
- **Dynamic Profiles:** Displays multiple user profiles (Name, Email, Status) using a reusable `Profile` component.
- **Conditional Rendering:** 
  - Shows "Online/Offline" status based on boolean values.
  - Displays user info or a "Please Login" message depending on the authentication state.
- **Reusable Components:** Features a custom `Button` component used across different sections like Header and Messages.
- **Prop Management:** Demonstrates passing objects and functions as props to child components.

## 🛠️ Technologies Used
- **React.js** (Functional Components)
- **CSS** (Inline styling)
- **JavaScript (ES6+)**

## 📂 Project Structure
```text
src/
├── components/
│   ├── Button.js    # Reusable button with custom logic/styles
│   ├── Header.js    # Top section with a welcome message
│   ├── Login.js     # Conditional login view
│   ├── Message.js   # Content area with action buttons
│   ├── Profile.js   # Displays individual user data
│   └── Status.js    # Visual indicator for online/offline status
├── App.js           # Main container & data management
└── index.js         # Entry point
