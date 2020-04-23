const moment = require('moment-timezone');

const logger = (req, res, next) => {
  console.log(`${req.protocol}://${req.get('host')}${req.originalUrl} : ${moment().format()} OF TZ ${moment.tz()}`)
  next();
}
module.exports = logger;
