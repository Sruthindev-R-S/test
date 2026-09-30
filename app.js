const express = require('express')
const app=express()

app.post("/", async (req,res)=>{
    const url= req.body
    const resp = await fetch(url, { method: "GET" })
    res.send(await resp.text())
}

)
app.listen(3000)
