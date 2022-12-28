const PORT = 8000 //specify port for backend
//specicy port for backend resources
const axios = require('axios').default //getting data from node
const express = require('express') //express.js backend
const app = express() //express function and routes app.get / app.put / app.post
const cors = require('cors') //cross origin resource sharing / relax security feature from browser
app.use(cors())
require('dotenv').config()


//express route GET
app.get('/flights', (req, res)=> {
 const options = {
    url: `${process.env.URL}?page-size=20`, //template literal
    headers: {
        accept: 'application/json',
        'X-Cassandra-Token': process.env.KEY
    }
 }

 axios.request(options).then((response) => {
    console.log(response.data)
    res.json(response.data)
 }).catch((error) => {
   console.log(error)
   })
})

 app.listen(PORT, ()=> console.log('running on port' + PORT))