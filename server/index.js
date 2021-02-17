const express = require('express')
const cors = require('cors');
const path = require('path');
const port = process.env.PORT || 3000;

//REDIS CONFIG
const redis = require("redis");
const client = redis.createClient({
  
});
//allows asynchronous methods when using redis
const { promisify } = require("util");
const getAsync = promisify(client.get).bind(client);

const app = express()
app.use(cors());
app.use(express.static(path.join(__dirname,'..', 'build')));

//ROUTES

app.get('/jobs', async(req, res) => {
  const jobs = await getAsync('github');
  const jobsJSON = JSON.parse(jobs)
  console.log(jobsJSON.length);
  return res.send(jobsJSON);
})


app.listen(port, () => {
console.log(`app listening at ${port}`)
});