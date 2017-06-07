const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

// var logger = function(req, res, next){
// 	console.log('logging...');
// 	next();
// };
// app.use(logger);

// Body Parser Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Set Static path
// This will allow us to use local html/css/js as the page
app.use(express.static(path.join(__dirname, 'public')))


// View Engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'))


// Similar to API call
var person = [{
	name: 'Mikey',
	age: 29
},{
	name: 'Laura',
	age: 30
}]
app.get('/getpeople.json', function(req, res){
  res.json(person)
})
// 

app.get('/', function (req, res) {
  // res.send('Hello World! ')
  res.render('index')
});

app.listen(3000, function () {
  console.log('Server started on port 3000.')
});

