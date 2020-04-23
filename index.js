const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const members = require('./Members');
const logger = require('./middleware/logger');
const app = express();
const PORT = process.env.PORT || 5000

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });\

 //init middlewareb
//  app.use(logger)

//HANDLE BARS MIDDLEWARE
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

 //Body Parses
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Home Page route
app.get('/', (req, res) => res.render('index', {
    title: 'Member App',
    members
}));

// app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./routes/api/members'))
app.listen(PORT, () => console.log(`Server started on port: ${PORT}`));
