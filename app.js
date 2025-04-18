const express = require('express');
const bodyParser = require('body-parser');
const app = express();

let tasks = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index', { tasks });
});

app.post('/add', (req, res) => {
  const task = req.body.task;
  if (task) tasks.push(task);
  res.redirect('/');
});

app.post('/delete', (req, res) => {
  const index = req.body.index;
  if (index !== undefined) tasks.splice(index, 1);
  res.redirect('/');
});

app.listen(3000, () => console.log('ToDo app listening on port 3000'));

