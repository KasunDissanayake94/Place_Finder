const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
var Client = require('node-rest-client').Client;

var client = new Client();
var app = express();

app.use(cors());
app.use(bodyparser.urlencoded({extend:false }));
app.use(bodyparser.json());



app.post('/getLocations',(req,res)=>{
    const typeWord = req.body.city;
    client.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query='+typeWord+'top+sights&key=AIzaSyCJ7ZBl1oEACX3aheQ-ty5py2tBTfrq0E0',function (data, response) {
        res.json({msg:"true",data:data});
    });

});
app.listen(3001,()=>{
    console.log("Listing to port 3001");
});