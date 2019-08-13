const router = require("express").Router();
const apiRoutes = require("./api");
const path = require("path");

router.use("/api", apiRoutes);

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"))
})

router.get("/googleda2f13262d109035.html", (req,res) => {
  res.sendFile(path.join(__dirname, "googleda2f13262d109035.html"))
})

module.exports = router;