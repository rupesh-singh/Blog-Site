var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var config = require('./config/database');


//var index = require('./routes/user');
//var tasks = require('./routes/tasks');

//View Engine
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'ejs');
//app.engine('html', require('ejs').renderFile);


// Connect To Database
mongoose.connect(config.database);

// On Connection
mongoose.connection.on('connected', () => {
  console.log('Connected to database '+config.database);
});

// On Error
mongoose.connection.on('error', (err) => {
  console.log('Database error: '+err);
});

const app = express();


//routing
//Test=require('./routes/test');
User=require('./routes/user');
Blog=require('./routes/tasks');
// Port Number
const port = 3000;

// CORS Middleware
var cors = require('cors');
app.use(cors());

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

// Body Parser Middleware
app.use(bodyParser.json());


//using respective files in routes
//app.use('/test',Test);
app.use('/users',User);
app.use('/blog',Blog);

// Index Route
app.get('/', (req, res) => {
  res.send('Invalid Endpoint');
});

// Start Server
server=app.listen(port, () => {
  console.log('Server started on port '+port);
});






















