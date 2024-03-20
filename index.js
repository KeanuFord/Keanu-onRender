const express = require("express");
const app = express()

const PORT = process.env.PORT || 3000;

app.get("*",(req,res)=>{
    res.send(`Yay! a ${req.method} request to ${req.url}`)
})

app.listen(PORT,()=>{
    console.log("running on port " + PORT)
})