
const express = require("express"); // required for easy server
const path = require("path"); // the path allows us to find the right path to the file to return
const bodyParser = require('body-parser');
const async = require("async");
const fs = require('fs');
const pg = require('pg');
const app = express(); // Makes things easy
//const sequelize = require('./Util/database');
// TODO: add models
const Movie = require('./Models/Movie');
// Establish Routes
const adminRoutes = require('./Routes/admin');
const userRoutes = require('./Routes/user');
const roughRoute = require('./Routes/rough');
//const visitorRoutes = require('./Routes/visitor');

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

//const { Sequelize } = require("sequelize/types");

// Check Routes
//app.use('/admin', adminRoutes);
//app.use('/user', userRoutes);
//app.use('/visitor', visitorRoutes);
app.use('/rough', roughRoute);
app.use('/', (req, res, next) => {
  res.render('admin/index', {
      pageTitle: "Movies",
      path: '/movies'
  });
});
//****************************************************** */
//app.use('/activities',(req, res, next) => {
 //   res.sendFile(path.join(__dirname,'views', 'HalloweenWeb.html'));
  //  });
//****************************************************** */
    

app.listen(3000);