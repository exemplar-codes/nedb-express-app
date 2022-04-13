const express = require("express");
const app = express();

app.use(express.json());

const port = process.env.PORT || 3000;

const { testdb, insertData, getAllData, deleteData } = require("./db_saver");

testdb();

app.get("/", (req, res) => {
  res.sendFile("./public/index.html", { root: __dirname });
});

app.get("/api-page", (req, res) => {
  res.sendFile("./public/api_list.html", { root: __dirname });
});

app.get("/api-data", (req, res) => {
  getAllData((err, data) => {
    res.send(data);
  });
});

app.post("/api", (req, res) => {
  insertData(req.body); // save to DB
  res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
