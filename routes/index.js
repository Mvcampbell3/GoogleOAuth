const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

app.use("/api", apiRoutes);

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

module.exports = router;