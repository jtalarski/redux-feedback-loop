const express = require('express');
const router = express.Router();
const pool = require('./pool');
const bodyParser = require('body-parser');

router.get('/', (req, res) => {
    console.log('/Get it');
    res.send('meow');
})
//   let newFeedback = req.body;
//     let sqlText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments") VALUES ($1, $2, $3, $4);`
//     pool.query(sqlText, [newFeedback.feeling, newFeedback.understanding, newFeedback.support, newFeedback.comments ])
// }).then((result) => {
//     console.log('Added feedback', newFeedback);
//     res.sendStatus(201);
// }).catch((error) => {
//     console.log('Error adding feedback', error);
//     res.sendStatus(500);
// })



module.exports = router;