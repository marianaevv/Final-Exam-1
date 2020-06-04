const express = require( 'express' );
const bodyParser = require( 'body-parser' );
const mongoose = require( 'mongoose' );
const jsonParser = bodyParser.json();
const { DATABASE_URL, PORT } = require( './config' );

const app = express();


app.get(' /api/add-movie-actor/:movie_ID',(req,res)=>{
    let id = req.params.id;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    if(!id){
        res.statusMessage ="Please send the id";
        return res.status(406).end();
    }
    if (id != movieID){
        res.statusMessage = "id and movie_ID do not match";
    }
    if(!firstName || !lastName){
        res.statusMessage ="“You need to send both firstName and lastName of the actor to add to the movie list”. ;       "
    }
    Actors
        .getAutorByName(firstName)
        .then(actor =>{
            let actorEncontrado = actor;
        })
        .catch(err =>{
            res.statusMessage ="The actor does not exist" ; 
            return res.status(404);
        });
    Movies
    .getMovieByID(id)
    .then(movie => {
        let movieEncontrada = movie;
    })
    .catch(err =>{
        res.statusMessage ="The actor does not exist" ; 
        return res.status(404);
    })

    Movies
    .addActorToMovieList(actorEncontrado) 
        .then(result =>{
                return res.status(201).json(result); 
        })
})


app.listen( PORT, () => {
    console.log( "This server is running on port 8080" );
    new Promise( ( resolve, reject ) => {
        const settings = {
            useNewUrlParser: true, 
            useUnifiedTopology: true, 
            useCreateIndex: true
        };
        mongoose.connect( DATABASE_URL, settings, ( err ) => {
            if( err ){
                return reject( err );
            }
            else{
                console.log( "Database connected successfully." );
                return resolve();
            }
        })
    })
    .catch( err => {
        console.log( err );
    });
});