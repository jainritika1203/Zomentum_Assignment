const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cron = require('node-cron')
const ticketpost = require('./model/ticket');


app.use(bodyParser.json());

//cron job
cron.schedule("* * * * *", async () => {
     try {
          const deletedTickets = await ticketpost.deleteMany({ showtime: { $lt: new Date() - (8 * 60 * 60 * 1000) } });
          console.log(deletedTickets);
     } catch (err) {
          res.json({ message: err });
     }
});
// Import routes

const ticketroutes = require('./route/ticketposts');


app.use('/', ticketroutes);

// connect to DB

mongoose.connect("mongodb://localhost/moviebooking", { useNewUrlParser: true }, () =>
     console.log('connected to DB')
);


//starts listening to the server
app.listen(3000);
