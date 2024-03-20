const express = require("express");
const app = express()

const PORT = process.env.PORT || 3000;

app.get("*",(req,res)=>{
    res.send(`Keanu says: Yay! a ${req.method} request to ${req.url}`)
    res.send(`Look! A second message!`)
})

app.listen(PORT,()=>{
    console.log("running on port " + PORT)
})