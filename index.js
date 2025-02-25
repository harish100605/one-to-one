const express = require ('express');
const mongoose = require ('mongoose');
const app = express();
const url = "mongodb://localhost:27017/nodeDB2";
mongoose.connect( url, {useNewUrlParser:'true'});
const con = mongoose.connection;

app.use(express.json());

const studentrouter = require("./routes/studentRoutes")
app.use('/students',studentrouter);

try{
    con.on('open',() => {
        console.log("database connected");
    })
}
catch(error){
    console.log("error :"+error);
}

const port = 2000;
app.listen(port,() => {
    console.log("server connected to the port "+port);
})
