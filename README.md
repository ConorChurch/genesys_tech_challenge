# genesys_tech_challenge

This project is for the genesys tech challenge for the Frontend Software Engineer position.
The aim is to redesign the home page of the "Hacker News" website (https://news.ycombinator.com/)

## Setup for the application to run

First you will need npm installed on your machine to run the application.

Once npm is installed you will need to run these commands in the root directory "./" of the project:

`npm install express`
`npm install cors`
`npm install axios`

Then from within the "./client/" directory you will need to install axios again:

`npm install axios`

Then you will need to run the following commands. You will need two terminal windows open (one for the proxy server and the other for the client).

### `npm start` in both "./" and "./client/"

Runs the client and the proxy server to handle the requests.
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The application should open in browser and the latest news stories should be displayed to you.


### `npm test` from within the "./client/" directory

Launches the test runner in the interactive watch mode.

### `npm test -- --coverage` from within the "./client/" directory

Displays the coverage of the tests.