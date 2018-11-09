# liri-node-app
# LIRI-Bot

### Project Overview
This project was an assignment in the Northwestern Full Stack Coding Program. Using the command line and Node.js you can use this to console out either look for concerts for bands you search for or information about either a song or a movie. 

### Issues or other things to add
I had some issues getting the do-what-it-says command I want to come back to this app to fix this as well as add a help feature to the app, if a user inputs unknown outputs or types in help to console.log a small blirp of a guide for the user on how to use the app.

## Getting Started
You can fork this repository then download it into your computer. Once that is done you will need to create a .env file which contains the following information with your bandsintown, OMDB and spotify api credentials: 
```
# Spotify API Keys

SPOTIFY_ID=you_spotify_id
SPOTIFY_SECRET=your_spotify_secret

# Bands In Town API
BANDS_ID=bands_in_town_id

# OMDB API
OMDB_ID=OMDB_key
```

Once that file is created and your developer login keys entered (without quotation marks). Then open your command window and go into the folder. Then on the command line enter: npm install
This will install the npm packages required to run this application. Once those packages are added, it may take some time, then you can use the application.

On the command line type node liri.js then any of the following commands:
```
* concert-this
* spotify-this-song
* movie-this
* do-what-it-says
```

After the movie, band or song commands you can type the name of the band, movie or song (you do not need to capitalize the words or do anything special if there multiple words in your name). Your command line could look like this for example:
```
node liri.js spotify-this-song Fighting Gold
node liri.js concert-this Slayer
node liri.js movie-this Shrek 2
```

### Prerequisites
You will need to fork this repository and pull it to your local drive. Once this is done you will need to create a .env file with your OMDB api keys and spotify keys. You will also need to install the npm packages stated in the package.json file.

### Built With
* Javascript
* Node.js
* NPMs 
    1. Moment  https://www.npmjs.com/package/twitter
    1. Spotify https://www.npmjs.com/package/node-spotify-api
    1. Request https://www.npmjs.com/package/request
    1. dotenv  https://www.npmjs.com/package/dotenv

### Author
Hugo Villalobos - erithr/github. email: vshugo08@gmail.com

