# Spotify Song Finder

## Description
Spotify Song Finder is a web application that allows users to search for songs or artists using Spotify's Web API. The application retrieves and displays the following details for each song:
- Song Name
- Artist(s)
- Album Name
- Release Date
- Album Art
- Link to listen on Spotify

The app dynamically displays the search results in a user-friendly and responsive design.

## Features
- Search for songs or artists.
- View song details, including album art and release date.
- Clickable links to play songs directly on Spotify.

## Installation and Setup
Follow the steps below to set up and run the application:

### Prerequisites
- [Node.js](https://nodejs.org/) (version 16 or later recommended)
- A Spotify Developer Account ([Register here](https://developer.spotify.com/))

### Steps

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd <repository-folder>
   ```

2. **Set Up Environment Variables**
   - Create a `.env` file in the project root directory.
   - Add your Spotify credentials to the `.env` file:
     ```env
     SPOTIFY_CLIENT_ID=your_client_id
     SPOTIFY_CLIENT_SECRET=your_client_secret
     ```
   Replace `your_client_id` and `your_client_secret` with the credentials obtained from the [Spotify Developer Dashboard](https://developer.spotify.com/dashboard/).

3. **Install Dependencies**
   Run the following command to install required packages:
   ```bash
   npm install
   ```

4. **Run the Application**
   Start the server with the following command:
   ```bash
   node server.js
   ```
   The server will start on `http://localhost:3000`.

5. **Open the Application**
   Open your web browser and navigate to `http://localhost:3000` to use the application.

## Project Structure
```
/project-directory
|-- .env
|-- server.js
|-- public/
|   |-- style.css
|-- views/
|   |-- index.html
|-- package.json
```

## Dependencies
The project uses the following Node.js packages:
- `express`: For setting up the server.
- `body-parser`: For parsing incoming request bodies.
- `spotify-web-api-node`: For integrating with Spotify's Web API.
- `dotenv`: For managing environment variables securely.

## License
This project is for educational purposes and is not licensed for commercial use.
