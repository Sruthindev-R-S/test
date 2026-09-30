const express = require('express')
const app=express()

app.post("/",(req,res)=>{
    const url= req.body
    const resp = fetch(url)
    res.send(resp)
}

)
app.listen(3000)
