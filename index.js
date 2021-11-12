require("dotenv").config();
const express = require("express");
const mongo = require("./mongo");
const entriesRoutes = require("./route/entries.route");
const PORT = 5000;
const app= express();
const cors = require("cors");

(async()=>{

    try{
        app.use(cors())        
    //MongoBD connect
   await mongo.connect()
  
  app.use(express.json())
  
  

  app.use((req, res, next)=>{
      console.log(" common middleware Called!")
      next();
  })

  app.use("/entries",entriesRoutes);
  
  
  app.listen(process.env.PORT||PORT,()=>{console.log(`server is running at post:${PORT}`)});
  }
  catch(err){
    console.log("Error starting Server",err)
  }
  })()
