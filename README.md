# URL Shortener

A URL shortener application that allows users to generate short URLs for any long URL and view analytics, such as total clicks. Built using Node.js, Express.js, MongoDB Atlas, and deployed on Render.

[Project Link](https://short-url-ayeo.onrender.com/signup)

## Features

- **JWT Authentication**: Users can register and log in to access the URL shortening functionality.
- **URL Generation**: Users can generate short URLs for long URLs.
- **Analytics**: View total clicks and other analytics for each shortened URL.
- **User-Specific URLs**: Each user can only see and manage their own generated URLs.

## Project Structure

This project follows the **MVC (Model-View-Controller)** pattern, promoting clean and organized code:

- **Model**: Defines MongoDB schemas and handles database operations.
- **View**: Uses EJS for server-side rendering, providing dynamic content.
- **Controller**: Handles requests and manages application logic.

## Technologies Used

- **Node.js**: JavaScript runtime for server-side code.
- **Express.js**: Framework for building server-side applications.
- **MongoDB Atlas**: Cloud database for storing user and URL data.
- **Render**: Hosting platform for deployment.
- **EJS**: Template engine for server-side rendering.
- **JWT (JSON Web Token)**: Stateless authentication for secure user access.

Deployment : [Project Link](https://short-url-ayeo.onrender.com/signup)
This project is deployed on Render.

Usage: 
Register or log in to your account.
Paste any long URL into the input field and generate a short URL.
View analytics, including total clicks, for each shortened URL.
