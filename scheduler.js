const cron = require('node-cron');

function schedulePredictionJob(callback, cronPattern = '0 * * * *') {
  // Runs every hour by default, adjust as needed
  cron.schedule(cronPattern, callback);
}

module.exports = { schedulePredictionJob };