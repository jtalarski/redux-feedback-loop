const express = require( 'express' );
const router = express.Router();
const pool = require( './pool' );

// router.get ('/', (req, res) => {
//     console.log('GET hit');
//     res.send('meow')
// })
// included for connection purposes only. no matching
// client side axios get
router.get( '/', ( req, res )=>{
    console.log( '/GET hit' );
    const queryText = `SELECT * FROM "feedback";`;
    pool.query( queryText ).then( ( results )=>{
        res.send( results.rows );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
})

// pushes new feedback submission into the DB
router.post( '/', ( req, res )=>{
    console.log( '/POST hit:', req.body );
    let newFeedback = req.body
    // requires back ticks
    let queryText = `INSERT INTO "feedback" ( "feeling", "understanding", "support", "comments" ) values ( $1, $2, $3, $4 )`;
    // sanitize input values
    pool.query( queryText, [ newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments ] ).then( ( results )=>{
        res.sendStatus( 201 );
    }).catch( ( err )=>{
        console.log( err );
        res.sendStatus( 500 );
    })
}) //end POST





module.exports = router
