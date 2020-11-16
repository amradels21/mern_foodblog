const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');

require('dotenv').config();

const app = express();

const port = process.env.PORT || 8080;


app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

//Connect to Mongo
mongoose
    .connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true
    });


const connection = mongoose.connection;
connection.once("open", () => 
    console.log("Mongodb connected ..") 
    );


// Use Routes
const articlesRouter = require('./routes/articles');
app.use('/articles', articlesRouter);




//Static file declaration
app.use(express.static(path.join(__dirname, 'client/build')));

//production mode
if(process.env.NODE_ENV === 'production') 
{  
    app.use(express.static(path.join(__dirname, 'client/build')));  
// 
 app.get('*', (req, res) => {   
      res.sendFile(path.join(__dirname = 'client/build/index.html')); 
     })
}
//build mode
app.get('*', (req, res) => {  res.sendFile(path.join(__dirname+'/client/public/index.html'));})

//start server
app.listen(port, () => console.log(`Server started at port ${port}`));
