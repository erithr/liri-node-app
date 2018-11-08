//assumes user setup has ben completed (api keys etc)
const env = require("dotenv").config();
const fs = require("fs");
const keys = require("./keys");
const Spotify = require('node-spotify-api');
const spotify = new Spotify(keys.spotify);
const request = require('request');
const omdb = "f7f10822";

// const bandsintown = require('bandsintown')(APP_ID);
//get user input
const input = process.argv[2];
const ask = process.argv[3];

console.log("check below");
//make a decision based on the command
switch (input){
    case "concert-this":
        concertThis();
        break;
    case "spotify-this-song":
    spotifyThisSong();
    break;
    case "movie-this":
        movieThis();
        break;
    case "do-what-it-says":
    doWhatItSays();
    break;
    default: 
    console.log("I don't understand, ask Foogle-Bot");
    break;

}



const doWhatItSays = function(){

    fs.readFile('random.txt', 'utf8', function(err, data){
        if(err) throw err;
        const dataArr = data.split(',');

        if (dataArr.length == 2){
            pick(dataArr[0], dataArr[1]);
        }else if (dataArr.length == 1){
            pick(dataArr[0]);
        }
    });
}

function concertThis(){
//     console.log("Concert This");
//     bandsintown
//   .getArtistEventList('Skrillex')
//   .then(function(events) {
//     // return array of events
//   });
    
}

function movieThis(){
    request('http://www.omdbapi.com/?t='+ ask +'&apikey='+ omdb +'&', function (error, response, body) {
        if (!error && response.statusCode ===200){
            const jsonData = JSON.parse(body);

            console.log('Title ' + jsonData.Title);
            console.log('Year ' + jsonData.Year);
            console.log('IMDB Rating: ' + jsonData.imdbRating);
            console.log('Rotten Tomato Rating: ' + jsonData.Ratings[1].Value);
            console.log('Country '+ jsonData.Country);
            console.log('Langauge' + jsonData.Language);
            console.log('Plot ' + jsonData.Plot);
            console.log('Actors' + jsonData.Actors);
            
            // * Title of the movie.
            // * Year the movie came out.
            // * IMDB Rating of the movie.
            // * Rotten Tomatoes Rating of the movie.
            // * Country where the movie was produced.
            // * Language of the movie.
            // * Plot of the movie.
            // * Actors in the movie.

        }
       
      });
}
// console.log(JSON.stringify(result, null, 2));
const getNames = function(artist){
    return artist.name;
}

function spotifyThisSong(){
    console.log("Spotify This:"+ process.argv[3]);
    spotify.search({ type: 'track', query: ask }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        const songs = data.tracks.items;
        for(var i=0; i<songs.length; i++){
            console.log(i);
            console.log('artist(s): ' + songs[i].artists.map(getNames));
            console.log('song name: ' + songs[i].name);
            console.log('preview song: ' + songs[i].preview_url);
            console.log('--------------------------------');
        }
      });
}
// const artist = Response.tracks.items[0].name;

// console.log(artist);


