const express = require("express")

const app = express()

app.get('/', (req, res)=>{
    res.send("I am running")
})

const PORT = 5000
app.listen(PORT, (req, res)=>{
    console.log(`Server running at ${PORT}`)
})