var db = require("../app_api/models");

module.exports = function(app) {
  app.get("/api/employees", function(req, res) {
    // Here we add an "include" property to our options in our findAll query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Employee.findAll().then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  app.get("/api/employees/:id", function(req, res) {
    // Here we add an "include" property to our options in our findOne query
    // We set the value to an array of the models we want to include in a left outer join
    // In this case, just db.Post
    db.Employee.findOne({
      where: {
        id: req.params.id
      }    
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    }).catch(function(err) {
      console.log(err);
  });
});

  app.post("/api/employees", function(req, res) {
    db.Employee.create(req.body).then(function(dbEmployee) {
      res.json(dbEmployee);
    });
  });

  app.delete("/api/employees/:id", function(req, res) {
    db.Employee.destroy({
      where: {
        id: req.params.id
      }
    }).then(function(dbEmployee) {
      res.json(dbEmployee);
    }).catch(function(err) {
      console.log(err);
  });
});
  // PUT route for updating posts
  app.put("/api/employees", function(req, res) {
    db.Employee.update(req.body,
      {
        where: {
          id: req.body.id
        }
      })
    .then(function(dbEmployee) {
      res.json(dbEmployee);
    }).catch(function(err) {
      console.log(err);
  });
});

};
