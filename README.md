# EquipMart - Cricket Equipment Store

###

<div align="center">
  <img height="400" src="https://i.ibb.co.com/BBsRNHd/Screenshot-2025-01-08-at-2-39-46-PM.png"  />
</div>

###

EquipMart is a modern and responsive web application for managing and selling cricket equipment. The application is built using the latest web development technologies and offers features like user authentication, product management, and personalized access controls. 

## Features

- **User Authentication**: Firebase Authentication for secure user registration and login.
- **Product Management**: 
  - Add products via a form that uploads data to the server.
  - View all products in a tabular format.
  - Update products, restricted to the user who added them.
- **Dark and Light Mode**: Toggle between light and dark themes for better user experience.
- **My Equipment Page**: A dedicated page to view products added by the logged-in user.
- **Private Routes**: Secure routes to ensure features are accessible only to authorized users.
- **Responsive Design**: Built with Tailwind CSS and Daisy UI for seamless functionality across devices.

## Technologies Used

### Frontend
- **React**: Component-based architecture for building the UI.
- **React Router**: Client-side routing for seamless navigation.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Daisy UI**: Pre-designed UI components for rapid development.
- **React Icons**: For beautiful and intuitive icons.
- **Lottie React**: Animation integration for an interactive experience.
- **React Awesome Reveal**: Animations for a visually appealing interface.

### Backend
- **Node.js**: Runtime environment for server-side JavaScript.
- **Express.js**: Backend framework for building RESTful APIs.
- **MongoDB**: NoSQL database for storing and managing product data.

### Authentication
- **Firebase Authentication**: Secure user registration and login.

## Key Functionalities

1. **Product Addition**: 
   - Users can add products using a form.
   - Data is stored securely in a MongoDB database via Express.js.

2. **Product Viewing**:
   - View all products in a tabular format.
   - Products are fetched dynamically from the MongoDB database.

3. **Product Updates**:
   - Users can update only the products they added.
   - Update functionality is restricted based on user email for security.

4. **Dark and Light Mode Toggle**:
   - Enhances user experience with theme-switching capability.

5. **Personalized Product Management**:
   - `My Equipment` page shows products added by the logged-in user.

## Installation and Setup

### Prerequisites
- Node.js
- MongoDB
- Firebase project setup

### Steps to Run the Project

1. Clone client repository:
   git clone https://github.com/programming-hero-web-course2/b10-a10-client-side-Yead191

2. Clone server repository:
   git clone https://github.com/programming-hero-web-course2/b10-a10-server-side-Yead191


### Live Link
https://equi-sports-c93e1.web.app/
