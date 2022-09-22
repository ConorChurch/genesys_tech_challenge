/* 
This file is to create a proxy server to deal with a HTTP CORS error.
It should allow communication to to the desired APIs from my local host
*/

var express = require('express');
var cors = require('cors');
const axios = require('axios');
var app = express();
app.use(express.json())
app.use(cors());

// This function retrieves all the latest storie IDs.
// It passes them into createArrayOfObjects function to return an array of all the story objects
async function getLatestStories(){
    return await axios.get("https://hacker-news.firebaseio.com/v0/newstories.json?print=pretty")
        .then(response => {
           return createArrayOfObjects(response.data)
            .then( response => {
                //console.log(response)
                return response;
            })  
        })
        .catch(error => {
            console.log(error)
        })
}

// This function creates an array of news objects
// it takes the id of each of the top stories and
// calls another function to return the object from the API of that story
function createArrayOfObjects(response){
    const arrayOfObjects = [];
    for(var i = 0; i < 30; i++){
        arrayOfObjects.push(getIndividualStory(response[i])
                .then( response => {
                    //console.log(response)
                    return response
                }))
    }
    return Promise.all(arrayOfObjects);
}

// This function fetches the story details using the story id given
// in the previous axios call for each individual story id given,
async function getIndividualStory(id){
   return await axios.get("https://hacker-news.firebaseio.com/v0/item/"+id+".json?print=pretty")
        .then(response => {
            //console.log(response.data)
            return response.data;
        })
        .catch(error => {
            console.log(error)
        })
}

// Below is the route which receives the requests from the frontend
// and directs the call to the appropriate axios functions
app.get('/getNewsStories', async (req,res) => {
    const NewsStories = await getLatestStories();
    res.json(NewsStories)
})

// Start the server listening on port 4000
app.listen(4000, function() {
    console.log("Server running");
})