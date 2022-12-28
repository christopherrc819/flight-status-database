const PORT = 8000 
const axios = require('axios').default 
const express = require('express') 
const app = express() 
const cors = require('cors') 
app.use(cors())
require('dotenv').config()


//express route GET
app.get('/flights', (req, res)=> {
 const options = {
    url: `${process.env.URL}?page-size=20`, 
    //template literal
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