# Bookworm (Book App v1.0)

![bookwormDemo](https://user-images.githubusercontent.com/93556334/220473537-84c7829c-0f4f-48cd-b520-483fe73cffd3.gif)


This is the first version (MVP) of a full-stack web application built with the MERN stack (MongoDB, Express, React, and Node.js) that allows users to search for and save books using Google's Book API.

## Features

 - Search for books by title or author using Google's Book API
- View recoommended books results
- Save books to a "Libary" (reading list) which is saved on MongoDB database
- View saved books and remove them from the list/database

## Future Updates

In the next version of this app, I plan on adding the following fatures
:

 - User logins to ensure that each user can only view and modify their own saved books
 - Improved search functionality, including filtering by category and sorting by relevance or rating
 - Pagination for search results and saved books to improve performance and user experience
 - Book recommendations based on a user's preference
 - Option to add notes or reviews for saved books


## Technologies

- Google Books API: a RESTful API used to search for books and retrieve book details
 - MongoDB
 - Express
 - React
 - Node.js

 ## Getting Started

To run this app locally, you'll need to have MongoDB, Node.js, and npm installed on your machine. You will also need to obtain a Google Books API key. More information on how can be found on [Google Books API's Guide](https://developers.google.com/books/docs/overview).

Clone this repository to your local machine

Navigate to the project directory in your terminal and run npm install to install the required dependencies

Create a .env file in the project root directory and add your MongoDB connection string as MONGODB_URI and API key as API_KEY

Run npm run dev to start the server and npm start client concurrently
