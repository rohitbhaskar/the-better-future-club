const express = require('express');
const cors = require('cors')

const app = express(),
      bodyParser = require("body-parser");
      port = 3080;

//allow OPTIONS on all resources
app.options('*', cors())

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

app.get('/api/heroes', cors(), (req, res) => {
  res.json(heroes);
});

app.get('/api/heroes/:id', cors(), (req, res) => {
  res.json(heroes.find(hero => hero.id == parseInt(req.params.id)));
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
