const express = require('express')
const bodyParser = require('body-parser');
const axios = require('axios');

let app = express();

app.use(express.static(__dirname + '/../dist'));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//More Places
app.get('/properties', (req, res) => {
  axios.get(`http://54.215.232.135/properties/`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/lists', (req, res) => {
  axios.get(`http://54.215.232.135/lists/`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

//Gallery
app.get('/stay', (req, res) => {
  axios.get(`http://3.101.80.128/stay/`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/stay/ratings', (req, res) => {
  axios.get(`http://3.101.80.128/stay/ratings`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

app.get('/stay/pictures', (req, res) => {
  axios.get(`http://3.101.80.128/stay/pictures`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
});

//Calendar
app.get('/rentalpricing', (req, res) => {
  axios.get(`http://34.211.141.231/rentalpricing`)
    .then((response) => {
      res.status(200).send(response.data);
    })
    .catch((error) => {
      res.status(400).send(error);
    });
})

const port = 3000;
app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
})