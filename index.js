//Express
const express = require('express');

//web-push
const webpush = require('web-push');

//body-parser
const bodyParser = require('body-parser');

//path
const path = require('path');

//using express 
const app = express();

//using bodyparser
app.use(bodyParser.json());

var cors = require('cors');

//enables cors
app.use(cors({
    ' Access-Control-Allow-Origin': '*',
    'allowedHeaders': ['sessionId', 'Content-Type'],
    'exposedHeaders': ['sessionId'],
    'origin': '*',
    'methods': 'GET,HEAD,PUT,PATCH,POST,DELETE',
    'preflightContinue': false
}));

//storing the keys in variables
const publicVapidKey = 'BLVrEJHUFPD2QDqLO5HDkNlT7BYTfBOgx7wNE40oxmxS29b8gCXiFGgZkUaxSJYkgs9Po2GKbeIYpa_2yLYUZTU';
const privateVapidKey = 'reYB6VjgDzc2eG9Ipiv6xGOAKP1ItzSq9nRexIP4v_g';

//setting vapid keys details
webpush.setVapidDetails('mailto:mercymeave@section.com', publicVapidKey, privateVapidKey);


//subscribe route
app.post('/subscribe', (req, res) => {
    //get push subscription object from the request
    const subscription = req.body;

    //send status 201 for the request
    res.status(201).json({})

    //create paylod: specified the detals of the push notification
    const payload = JSON.stringify({ title: 'Section.io Push Notification' });

    //pass the object into sendNotification fucntion and catch any error
    webpush.sendNotification(subscription, payload).catch(err => console.error(err));
})

//set the static path 
app.use(express.static(path.join(__dirname, "client")));

const port = 3000;
app.listen(port, () => {
    console.log(`server started on ${port}`)
});