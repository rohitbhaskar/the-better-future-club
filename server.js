const express = require('express');
const cors = require('cors')

const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

//allow OPTIONS on all resources
app.options('*', cors())

// mock data
const mockData = require('./mock-data.json');

const users = [];

const heroes = [
  { id: 11, name: 'Dr Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/application/dist/angular-nodejs-example/"));

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.post('/api/user', (req, res) => {
  const user = req.body.user;
  users.push(user);
  res.json("user addedd");
});

app.get('/api/tasks', cors(), (req, res) => {
  res.json(mockData.mockTaskData);
});

// app.get('/api/tasks/:user', cors(), (req, res) => {
//   res.json(mockData.mockTaskData.filter(tasks => tasks.allocatedTo == req.params.user));
// });

app.get('/api/tasks/:id', cors(), (req, res) => {
  res.json(mockData.mockTaskData.find(task => task.id == parseInt(req.params.id)));
});

app.put('/api/heroes', cors(), (req, res) => {
  let heroToUpdate = heroes.find(hero => hero.id == parseInt(req.body.id));
  heroToUpdate.name = req.body.name;
})

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/application/dist/angular-nodejs-example/index.html")
});

app.listen(port, () => {
    console.log(`Server listening on the port::${port}`);
});
