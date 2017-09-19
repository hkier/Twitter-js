const express = require( 'express' );
const app = express();

app.get('/', function(req,res,next){
    console.log('/ get request was heard')
    res.send('I hear you!')
})

app.listen(3000, function(res,req){
    console.log('listening on port 3000')
})