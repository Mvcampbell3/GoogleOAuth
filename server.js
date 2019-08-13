const express =  require("express");
const app =  express();
const path = require("path");
const routes = require("./routes");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static(path.join(__dirname, "public"), {extensions: ["html"]}));

app.use(routes)

app.listen(PORT, () => {
  console.log("Server is now live at http://localhost:3000");
})

