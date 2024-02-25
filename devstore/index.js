const express = require('express');
const path = require('path');
const session = require('express-session');
const methodOverride = require('method-override');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'));
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Routes
app.get('/', (req, res) => {
  res.render('index', { /* Add any data you want to pass to the template */ });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// Nodemon configuration
if (process.env.NODE_ENV === 'development') {
  const nodemon = require('nodemon');
  nodemon({
    script: 'index.js',
    ext: 'js ejs',
    ignore: ['public/']
  });

  nodemon.on('start', () => {
    console.log('App has started');
  }).on('quit', () => {
    console.log('App has quit');
    process.exit();
  }).on('restart', (files) => {
    console.log('App restarted due to:', files);
  });
}
