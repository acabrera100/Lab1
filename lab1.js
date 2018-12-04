const express = require("express");
const app = express();
const port = 3000;

app.get("/math/add", (req, res) => {
  const query = req.query;
  console.log("the page is here");
  let obj = {
    input: req.query,
    sumString: `${req.query.a} + ${req.query.b}`,
    sum: parseInt(req.query.a) + parseInt(req.query.b)
  };

  res.json(obj);
});

app.get("/math/divide", (req, res) => {
  const query = req.query;
  console.log("the page is here");
  let obj = {
    input: req.query,
    DivString: `${req.query.a} / ${req.query.b}`,
    Divide: parseInt(req.query.a) / parseInt(req.query.b)
  };

  res.json(obj);
});

app.get("/math/multiply", (req, res) => {
  const query = req.query;
  console.log("the page is here");
  let obj = {
    input: req.query,
    multString: `${req.query.a} * ${req.query.b}`,
    multiply: parseInt(req.query.a) * parseInt(req.query.b)
  };

  res.json(obj);
});

// app.get("/math/sub", (req, res) => {
//   const query = req.query;
//   console.log("the page is here");
// let obj={
//   input:
//     req.query,
//   subtractString:`${req.query.a} - ${req.query.b}`,
//   subtract: parseInt(req.query.a) - parseInt(req.query.b)
// }
//
//   res.json(obj);
// });
app.get("/math/sub", (req, res) => {
  const query = req.query;
  console.log("the page is here");
  let reducing = Object.values(req.query).reduce(function(acc, element) {
    return (acc = parseInt(acc) - parseInt(element));
  });
  let obj = {
    input: req.query,
    subtractString: Object.values(req.query).join(" - "),
    subtract: reducing
  };
  res.json(obj);
});
app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});
