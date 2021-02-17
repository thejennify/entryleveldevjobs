const axios = require('axios'),
      redis = require("redis"),
      client = redis.createClient(process.env.REDISCLOUD_URL, {no_ready_check: true}),
      { promisify } = require("util"), //Node Redis currently doesn't natively support promises, using promisify to wrap the methods.
      setAsync = promisify(client.set).bind(client);
      //getAsync('github').then(console.log).catch(console.error);

const url = 'https://jobs.github.com/positions.json';

 const getGithubJobs = async () => {
    let resultCount = 1
    let pageNumber = 0
    const jobs = [];

    //fetch all pages 
    while(resultCount > 0) {
        let totalResult; 
        await axios.get(`${url}?page=${pageNumber}`)
        .then( res => { 
            const jobListings = res.data
            console.log(jobListings.length)
            jobs.push(...jobListings);
            totalResult = jobListings.length;
        })
        .catch( error => {
        console.log(error.message)
        })
        pageNumber++;
        resultCount = totalResult;
    }
    console.log(`${jobs.length} total jobs retrieved`);

    //filter out senior jobs
    const entryLevelJobs = jobs.filter( job => {
        const jobTitle = job.title.toLowerCase();
        if (
            jobTitle.includes('senior') ||
            jobTitle.includes('manager') || 
            jobTitle.includes('sr.') || 
            jobTitle.includes('principal') || 
            jobTitle.includes('lead') || 
            jobTitle.includes('architect')
        ){
            return false;
        }  
        return true  
    });
    console.log(`reduced to: ${entryLevelJobs.length}`)

    /* Saves the data retrieved from the API in redis, success variable returns the status. */
    const success = await setAsync('github', JSON.stringify(entryLevelJobs))
    .catch(error => console.log(error.message))
    console.log(`success: ${success}`);
}
getGithubJobs()

module.exports = getGithubJobs;