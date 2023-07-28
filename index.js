const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.send({ message: 'Hello world' });
  res.emit;
});

app.get('/users', (req, res) => {
  res.send('Users Page');
});

app.get('/data', (req, res) => {
  res.send();
  console.log({ message: 'hello world' });
});
app.post('/data', (req, res) => {
  const dogs = req.baseUrl;
  const data = req.body;
  console.log(data);
  res.send(res.json({ message: 'data received' }));
  res.send('hello world');
  console.log('data received');
});

app.get('/landingpage', (req, res) => {
  res.send('landing Page hit');
  console.log('landing page hit');
});

app.get('/landingpage/:name/:age', (req, res) => {
  const age = req.params.age;
  const name = req.params.name;
  console.log(req.originalUrl);

  res.send(
    `Welcome to my landing page ` + name + ' and you are ' + age + ' years old'
  );
  console.log('endpoint hit');
});

app.listen(3000, () => console.log('Server Started'));
