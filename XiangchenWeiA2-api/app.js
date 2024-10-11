const express = require('express');
const cors = require('cors');
const dbcon = require('./crowdfunding_db');
const app = express();
const port = 8000;

const connection = dbcon.getconnection();

app.use(cors());

app.get('/fundraisers', function(req, res) {
  connection.query('select * from fundraiser left join category on fundraiser.CATEGORY_ID = category.CATEGORY_ID where active = 1', (err, records, fields) => {
    if (err) {
      console.log("Error while retrieve the data");
    } else {
      res.send(records)
    }
  })
})

app.get('/categories', function(req, res) {
  connection.query('select * from category', (err, records, fields) => {
    if (err) {
      console.log("Error while retrieve the data");
    } else {
      res.send(records)
    }
  })
})

app.get('/search', function(req, res) {

  let sql = 'select * from fundraiser left join category on fundraiser.CATEGORY_ID = category.CATEGORY_ID where active = 1'

  if (req.query.organizer) {
    sql += ` and ORGANIZER = '${req.query.organizer}'`
  }
  if (req.query.city) {
    sql += ` and CITY = '${req.query.city}'`
  }
  if (req.query.category) {
    sql += ` and fundraiser.CATEGORY_ID = '${req.query.category}'`
  }

  console.log(sql);

  connection.query(sql, (err, records, fields) => {
    if (err) {
      console.log("Error while retrieve the data");
    } else {
      res.send(records)
    }
  })
})

app.get('/:id', function(req, res) {
  connection.query('select * from fundraiser left join category on fundraiser.CATEGORY_ID = category.CATEGORY_ID where FUNDRAISER_ID = ' + req.params.id, (err, records, fields) => {
    if (err) {
      console.log("Error while retrieve the data");
    } else {
      res.send(records)
    }
  })
})

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
})
