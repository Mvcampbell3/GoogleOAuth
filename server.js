const express =  require("express");
const app =  express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use(express.static("public"), {extensions: ["html"]});

app.listen(PORT, () => {
  console.log("Server is now live at http://localhost:3000");
})

