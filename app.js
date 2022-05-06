const express = require('express')
const routes = require("./routes")
const db = require("./db");
const app = express()
const models = require("./models")

app.use(express.json())

app.use("/api", routes)


app.use("/", (req, res) => {
    res.status(404).send("404 not found bro.")
})

app.use((err, req, res, next) => {
    console.log("ERROR");
    console.log(err);
    res.status(500).send(err.message);
  });



db.sync({force: false}).then(()=> {
  app.listen(4000, () => console.log(`Server levantado, escuchando en puerto 4000`)) 
})
.catch(err => console.error(err));
