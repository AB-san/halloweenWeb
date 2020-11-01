//const Movie = require('../Models/Movie');
/*
var async = require('async');
var fs = require('fs');
var pg = require('pg');
//const pool = require('../Util/database');
const config = {
    user: 'root',
    host: 'localhost',
    database: 'movies',
    port: 26257
  }
  const pool = new pg.Pool(config);
exports.postAddMovie = (req,res,next) => {
    const title = req.body.title;
    const director = req.body.director;
    const runtime = req.body.runtime;
    const description = req.body.description;
    const imageUrl = req.body.imageUrl; 
    console.log(req.body);
    pool.connect(function (err, client, done) {

        // Close communication with the database and exit.
        var finish = function () {
            done();
            process.exit();
        };
    console.log("Here");
        if (err) {
            console.error('could not connect to cockroachdb', err);
            finish();
        }
        async.waterfall([
            function (next) {
                console.log("Where");
                client.query('CREATE TABLE IF NOT EXISTS movies (id INT PRIMARY KEY, title STRING, director STRING, imageUrl STRING, description STRING, runtime INT);', next);
                console.log("there");
                
                var strang = 'INSERT INTO movies (id, title, director, imageUrl, description, runtime) VALUES (1, ' + title +', '+director+', '+imageUrl+', '+description+', '+runtime+');';
                console.log("everywhere");
                console.log(strang);
                client.query(strang, next);
                console.log("end");
            },
        ],
        function (err, results) {
            if (err) {
                console.error('Error inserting into and selecting from accounts: ', err);
                finish();
        }});
    });
    console.log("what is the problem?");
    res.render('admin/addMovie', {
        pageTitle: "Movies",
        path: '/movies'
    });  
    };


    //Movie.sync({force: true}).then(function() {
     //   return Movie.bulkCreate([{
       //     title: title,
       //     director: director,
        //    runtime: runtime,
        //    description: description,
        //    imageUrl: imageUrl
      //  }])
   // })
  //  .then(result => {
  //      console.log('Movie Added');
   //     res.render('/admin/addMovie', {
    //        pageTitle: "Movies",
    //        path: '/movies'
    //    });
   //     process.exit(0);
  //  })
  //  .catch(err => {
  //      console.log(err);
  //  });
//};
exports.getMovies = (req, res, next) => {
    Movie.findAll()
    .then(movies =>{
        res.render('admin/movies', {
            movies: movies,
            pageTitle: "Movies",
            path: '/movies'
        });
    })
    
};
exports.getAddMovie = (req, res, next) => {
        res.render('admin/addMovie', {
            pageTitle: "Movies",
            path: '/movies'
        });  
};*/