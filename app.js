const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const connectToMongo = require("./database/db");
const app = express();
connectToMongo();
const appPort = process.env.PORT || 2000;


const server = app.listen(appPort, () => {
    console.log(`backend server is up on ${appPort}`)
})

//unexpected error handling
process.on("uncaughtException", (err) => {
  console.log(`Logged Error from index js: ${err.stack}`);
  server.close(() => process.exit(1));
})




//with use of this our appliction will be abel to accept json inputs
app.use(express.json({limit : 52428800})); //this is 50mb in bytes
app.get("*",(req,res) => {
  res.sendFile(path.resolve(__dirname,'client','build v2','index.html'));
})

if (process.env.NDOE_ENV == "production")
{
  app.use(express.static("client/build v2"));
  const path = require("path");
  app.get("*",(req,res) => {
    res.sendFile(path.resolve(__dirname,'client','build v2','index.html'));
  })
}

  app.use("/api/auth", require("./router/auth"));
  app.use("/api/products", require("./router/product_route"));

