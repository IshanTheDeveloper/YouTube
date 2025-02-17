# YouTube Clone

# Github Repository Link

--https://github.com/IshanTheDeveloper/YouTube

# Vercel Deployed Link

--https://youtube-pied-ten.vercel.app/

## Introduction

This is a YouTube Clone project built using React.js ,Express.js and MongoDb. It provides users with the ability to see videos based on categories, search based on title and video owner, and watch videos where you also get the functionality to add the comments with the existing video in the database, as well as manage their profiles and create channels.

## Features

- **Homepage**: Displays a list of video categories and trending videos.
- **Search Functionality**: Users can search for videos by title or category.
- **Video Player**: Allows users to watch videos in a dedicated player.
- **User Authentication**: Sign up and login functionalities using JWT Authentication
- **Channel Management**: Users can create and manage their own channels.
- **Category Filtering**: Browse videos based on categories such as Web Development, Gaming, Science, etc.
- **Profile Management**: View and manage user profile details.
- **Notifications**: A notification system for user activities.
- **Dark Mode Support**: Toggle between light and dark themes.

## Tech Stack

- **Frontend**: React.js, React Router, CSS , local Storage
- **State Management**: useState, useEffect
- **Routing**: React Router , useNavigation
- **API**: Fetching video data from a cloud server where data is stored in MongoDB Atlas

## Steps to run the project (If Cloning from Github)

1. Clone the repository:
   ```sh
   git clone https://github.com/your-username/youtube-clone.git
   ```
2. Navigate to the project directory:
   ```sh
   cd youtube-clone
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the Project:
   ```sh
   npm run dev
   ```
5. Start the development server:
   ```sh
   npm start
   ```

## Steps to run the project (If extracting from Zip file)

1. Extract the zip file to you system:

2. Install dependencies in root folder & NodeJs folder:
   ```sh
   npm install
   ```
3. Start the Project:
   ```sh
   npm run dev
   ```
4. Start the development server:
   ```sh
   npm start
   ```

## Project Structure

```
/youtube

/NodeJs
|   |-- Controller
|   |-- Model
|   |-- Route
|   |-- server.js

/src
|   |-- components
|   |   |-- Homepage
|   |   |-- BeforeSign Header & AfterHeader
|   |   |-- Static SideBar
|   |   |-- VideoPlayer & VideoDisplayer
|   |   |-- Login & Registration
|   |   |-- Filtered Page
|   |   |-- MyChannel
|   |   |-- CreateChannel
|   |   |-- All Category Page
|   |   |-- Categories (Web development, Gaming, Science,Movies etc.)
|   |-- App.js
|   |-- index.js
|   |-- styles
```

## API Endpoints

- `GET /videos` - Fetch all video data
- `GET /videos/:id` - Fetch a specific video
- `POST /users` - User registration

## Future Improvements

- Implement a backend with a database for storing user data.
- Add real-time comments and likes.
- Improve UI and animations.
- Enhance search with advanced filters.
- Implement a video upload feature.

## Contributors

- **[Your Name]** - Developer
- **Open for Contributions** - Feel free to submit pull requests!

## License

This project is licensed under the MIT License.
