//assumes user setup has ben completed (api keys etc)
const env = require("dotenv").config();
const fs = require("fs");
const keys = require("./keys");
const Spotify = require('node-spotify-api');
const moment = require('moment');
const spotify = new Spotify(keys.spotify);
const request = require('request');
const omdb = "f7f10822";
const bandsintown = keys.bandsintown;

// const bandsintown = require('bandsintown')(APP_ID);
//get user input
const input = process.argv[2];

const ask = process.argv.slice(3).join(" ");

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
    
function doWhatItSays(){

    fs.readFile('random.txt', 'utf8', function(err,data){
        if(err) throw err;
        const dataArr = data.split(',');
        console.log(dataArr);
        
        if (dataArr.length == 2){
            input = dataArr[0];
            ask = dataArr[1];
            spotifyThisSong(input, ask);
        }else if(dataArr.length == 1){
            input= dataArr[0];
            spotifyThisSong(input);
        }
    });
} 
    

function concertThis(){
    request('https://rest.bandsintown.com/artists/'+ ask +'/events?app_id="'+ bandsintown +'"', function (error, response, body) {
        if (!error && response.statusCode ===200){

            let jsonData = JSON.parse(body);
            for(var i=0; i<jsonData.length; i++){
            console.log('Name of Venue '+ jsonData[i].venue.name);
            console.log('Venue Loation '+ jsonData[i].venue.city);
            console.log('Date of Event '+ moment(jsonData[i].datetime).format('MM/DD/YYYY'));
            console.log("----------------------------------------------------------")
            }
        }
      });
}

function movieThis(){
    request('http://www.omdbapi.com/?t='+ ask +'&apikey='+ omdb +'&', function (error, response, body) {
        if (!error && response.statusCode ===200){
            let jsonData = JSON.parse(body);
            
            console.log('Title ' + jsonData.Title);
            console.log('Year ' + jsonData.Year);
            console.log('IMDB Rating: ' + jsonData.imdbRating);
            console.log('Rotten Tomato Rating: ' + jsonData.Ratings[1].Value);
            console.log('Country of Production '+ jsonData.Country);
            console.log('Langauge ' + jsonData.Language);
            console.log('Plot ' + jsonData.Plot);
            console.log('Actors ' + jsonData.Actors);
            
        }
       
      });
}
// console.log(JSON.stringify(result, null, 2));

function spotifyThisSong(){
    console.log("Spotify This:"+ process.argv[3]);
    spotify.search({ type: 'track', query: ask }, function(err, data) {
        if (err) {
            return console.log('Error occurred: ' + err);
        }
        
        const getNames = function(artist){
            return artist.name;
        }

        const songs = data.tracks.items;
        for(var i=0; i<songs.length; i++){
            console.log(i);
            console.log('artist(s): ' + songs[i].artists.map(getNames));
            console.log('song name: ' + songs[i].name);
            console.log('preview song: ' + songs[i].preview_url);
            console.log('Album Name: ' +songs[i].album.name);
            console.log('--------------------------------');
        }
      });
}

