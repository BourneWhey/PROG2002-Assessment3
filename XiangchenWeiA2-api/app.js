const express = require('express');
const cors = require('cors');
const dbcon = require('./crowdfunding_db');
const app = express();
const port = 8000;

const connection = dbcon.getconnection();

app.use(cors());
app.use(express.json());

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

app.get('/fundraisers/:id', function(req, res) {
  connection.query('select * from fundraiser left join category on fundraiser.CATEGORY_ID = category.CATEGORY_ID where FUNDRAISER_ID = ' + req.params.id, (err, records, fields) => {
    if (err) {
      console.log("Error while retrieve the data");
    } else {
      res.send(records)
    }
  })
})

app.get("/fundraiser/donations/:fundraiserId", (req, res) => {
  connection.query('select * from donation where FUNDRAISER_ID = ' + req.params.fundraiserId, (err, records, fields) => {
    if (err) {
      console.log("Error while retrieve the data");
    } else {
      res.send(records)
    }
  })
});

app.post("/fundraiser/donations", (req, res) => {
  if (Number.isNaN(req.body.amount)) {
    res.status(400).send("Amount should be number.")
    return
  }

  if (req.body.amount < 5) {
    res.status(400).send("The amount should be greater than 5.")
    return
  }

  connection.query('insert into donation(DATE, AMOUNT, GIVER, FUNDRAISER_ID) values(?,?,?,?)',
    [new Date(), req.body.giver, req.body.amount, req.body.fundraiserId], (err, records, fields) => {
    if (err) {
      console.log("Error while retrieve the data", err);
    } else {
      res.send(records)
    }
  })
});

app.post("/fundraiser", (req, res) => {
  if (!req.body.organizer) {
    res.status(400).send("Organizer required.")
    return
  }

  if (!req.body.caption) {
    res.status(400).send("Caption required.")
    return
  }

  if (!req.body.targetFunding) {
    res.status(400).send("Target funding required.")
    return
  }

  if (!req.body.currentFunding) {
    res.status(400).send("Current funding required.")
    return
  }

  if (!req.body.city) {
    res.status(400).send("City required.")
    return
  }

  if (!req.body.categoryId) {
    res.status(400).send("CategoryId required.")
    return
  }

  if (Number.isNaN(req.body.targetFunding)) {
    res.status(400).send("Target funding should be number.")
    return
  }

  if (Number.isNaN(req.body.currentFunding)) {
    res.status(400).send("Current funding should be number.")
    return
  }

  connection.query('insert info fundraiser(ORGANIZER, CAPTION, TARGET_FUNDING, CURRENT_FUNDING, CITY, ACTIVE, CATEGORY_ID) values(?,?,?,?,?,?,?)',
    [req.body.organizer, req.body.caption, req.body.targetFunding, req.body.currentFunding, req.body.city, req.body.active, req.body.categoryId], (err, records, fields) => {
      if (err) {
        console.log("Error while create the fundraiser");
      } else {
        res.send(records)
      }
    })
});

app.put("/fundraiser/:fundraiserId", (req, res) => {
  if (!req.body.organizer) {
    res.status(400).send("Organizer required.")
    return
  }

  if (!req.body.caption) {
    res.status(400).send("Caption required.")
    return
  }

  if (!req.body.targetFunding) {
    res.status(400).send("Target funding required.")
    return
  }

  if (!req.body.currentFunding) {
    res.status(400).send("Current funding required.")
    return
  }

  if (!req.body.city) {
    res.status(400).send("City required.")
    return
  }

  if (!req.body.categoryId) {
    res.status(400).send("CategoryId required.")
    return
  }

  if (Number.isNaN(req.body.targetFunding)) {
    res.status(400).send("Target funding should be number.")
    return
  }

  if (Number.isNaN(req.body.currentFunding)) {
    res.status(400).send("Current funding should be number.")
    return
  }

  connection.query('update fundraiser set ORGANIZER = ?, CAPTION = ?, TARGET_FUNDING = ?, CURRENT_FUNDING = ?, CITY = ?, ACTIVE = ?, CATEGORY_ID = ? WHERE FUNDRAISER_ID = ?',
    [req.body.organizer, req.body.caption, req.body.targetFunding, req.body.currentFunding, req.body.city, req.body.active, req.body.categoryId, req.params.fundraiserId], (err, records, fields) => {
      if (err) {
        console.log("Error while update the fundraiser");
      } else {
        res.send(records)
      }
    })
});

app.delete("/fundraiser/:fundraiserId", (req, res) => {

  connection.query('delete from  fundraiser WHERE FUNDRAISER_ID = ?',
    [req.params.fundraiserId], (err, records, fields) => {
      if (err) {
        console.log("Error while delete the fundraiser");
      } else {
        res.send(records)
      }
    })
});

app.listen(port, function() {
  console.log(`App listening on port ${port}`);
})
