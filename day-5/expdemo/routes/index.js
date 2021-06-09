var express = require("express");
var mysql = require("mysql");
var router = express.Router();

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nodedemo",
});

connection.connect(function (err) {
  if (!err) {
    console.log("DB connected");
  } else {
    console.log(err);
  }
});
/* GET home page. */
router.get("/master", function (req, res, next) {
  res.render("master", { title: "Express" });
});

router.get("/", function (req, res, next) {
  res.render("home", { title: "Express" });
});

router.get("/home", function (req, res, next) {
  res.render("home", { title: "Express" });
});

router.get("/about", function (req, res, next) {
  res.render("about", { title: "Express" });
});

router.get("/admin_edit", function (req, res, next) {
  res.render("admin_edit", { title: "Express" });
});

router.get("/contact", function (req, res, next) {
  connection.query("select * from tbl_feedback ", function (err, db_rows) {
    if (err) {
      console.log(err);
    }
    console.log(db_rows);
    res.render("contact", { db_rows_array: db_rows });
  });
});

router.get("/admin", function (req, res, next) {
  connection.query("select * from tbl_feedback ", function (err, db_rows) {
    if (err) {
      console.log(err);
    }
    console.log(db_rows);
    res.render("admin", { db_rows_array: db_rows });
  });
});

router.get("/delete/:id", function (req, res, next) {
  var deleteid = req.params.id;
  console.log(deleteid);
  connection.query(
    "delete from tbl_feedback where id=? ",
    [deleteid],
    function (err, db_rows) {
      if (err) {
        console.log(err);
      }

      res.redirect("/admin");
    }
  );
});

router.get("/edit/:id", function (req, res, next) {
  var editid = req.params.id;
  console.log(editid);
  connection.query(
    "select * from tbl_feedback where id=? ",
    [editid],
    function (err, db_rows) {
      if (err) {
        console.log(err);
      }
      console.log("hello");
      res.render("admin_edit", { db_rows_array: db_rows });
    }
  );
});

router.post("/edit/:id", function (req, res, next) {
  var editid = req.params.id;
  var name = req.body.name;
  var email = req.body.email;
  var message = req.body.message;
  console.log("edit id here");
  connection.query(
    "update tbl_feedback set name= ?,email= ?,message= ? where id=? ",
    [name, email, message, editid],
    function (err, db_rows) {
      if (err) {
        console.log(err);
      }
      console.log("edit done");
      res.redirect("/admin");
    }
  );
});

router.post("/form-process", function (req, res, next) {
  const feedback = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };

  connection.query(
    "insert into tbl_feedback set ?",
    feedback,
    function (err, result) {
      if (err) {
        console.log(err);
      }

      res.redirect("/contact");
    }
  );
});

router.post("/admin-form-process", function (req, res, next) {
  console.log(req.body);

  const feedback = {
    name: req.body.name,
    email: req.body.email,
    message: req.body.message,
  };

  connection.query(
    "insert into tbl_feedback set ?",
    feedback,
    function (err, result) {
      if (err) {
        console.log(err);
      }

      res.redirect("/admin_edit");
    }
  );
});

module.exports = router;
