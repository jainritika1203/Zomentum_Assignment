# Zomentum_Assignment
Online movie booking API - (Backend)
## REST interface for a Movie Theatre Ticket Booking System using Nodejs and Mongodb
### Endpoints in the REST interface
* **`GET http://localhost:3000/show`**: An endpoint to display all movie bookings in the database.
* **`GET http://localhost:3000/book`**: An endpoint to book a movie. (to add/insert entry in the database).
    - *title* - Name of the movie.
    - *username* - Name of the user who is booking the ticket.
    - *phonenumber* - Phone Number of the user.
    - *timing* - The timing of the show.
* **`PATCH http://localhost:3000/update/:postId`**: An endpoint to update the timings of the ticket.
    - *timing* - The new timing of the show.
    - *postId* - Ticket ID of the ticket to be updated.
* **`GET http://localhost:3000/findbytime`**: An endpoint to view all the tickets for a particular time.
    - *timing* - The particular time for which tickets will be displayed.
* **`DELETE http://localhost:3000/delete/:postId`**: An endpoint to delete a particular ticket.
    - *postId* - Ticket ID of the ticket to be deleted.
* **`GET http://localhost:3000/user/:postId`**: An endpoint to view the user’s details based on the ticket id.
    - *postId* - Ticket ID to view user's details.
### Other Functionalites
* A *cron-job* is created which deletes a ticket if there is a diff of 8 hours between the ticket timing and current.
  - *Note* : The time is stored in form of date in each insertion automatically and this is further used to get the difference.
time and it runs every minute.
### Depedencies to be installed either individually or simply run the command - *npm install*
* **express**: *npm install express*
* **nodemon**: *npm install nodemon*
* **mongoose**: *npm install mongoose*
* **node-cron**: *npm install node-cron*
* **mongodb**: *npm install mongodb*
* **body-parser**: *npm install body-parser*
### Steps to run the interface
* Make sure in the scripts of package.json the following is written - *"start": "nodemon app.js"*
* Open the terminal and run the command - *npm start*
* Open another terminal and run mongodb - *mongo*
* Now you can test the endpoints
