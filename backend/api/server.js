const express = require("express");
const cors = require("cors");
const app = express();
const serverless = require("serverless-http");
const PORT = 8000;
const details=require('./details.json')

app.use(cors());

app.get("/details", (req, res) => {
  res.json(details);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});

module.exports=serverless(app);
