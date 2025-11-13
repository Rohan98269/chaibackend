require("dotenv").config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const jsonn ={
"employee":{"name":"John", "age":30, "city":"New York"}
}

app.get('/', (req, res) => {
  res.send('Hello World???..!')
})
 app.get('/login',(req,res)=>{
    res.send("<h1>Welcome to our page</h1>")
 })

 app.get('/jsonn',(req,res)=>{
    res.send(jsonn)
 })

app.listen(port, () => {
  console.log(`Example apppp listening on port ${port}`)
})
