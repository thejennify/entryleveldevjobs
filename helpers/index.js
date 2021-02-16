const getGithubJobs = require('./apis/github-jobs');

const CronJob = require('cron').CronJob;
const cronTime = '30 1 * * * *'; //calls the api every 1h30m;
/*
constructor(cronTime, onTick, onComplete, start, timezone, context, runOnInit, unrefTimeout)
*/
const job = new CronJob(`${cronTime}`, getGithubJobs , null, true, 'America/Los_Angeles');
job.start();

