const express = require("express");
const cors = require("cors");
const app = express();

const PORT = "2461";

app.use(cors());
app.use(express.static("src"));

app.get("/", function(req, res) {
    res.send({"name": "Lucas Vander"});
})

app.get("/submit", function(req, res) {
    res.sendFile('/home/feelset/feelset-new/client/src/submissions.js');
})

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
})