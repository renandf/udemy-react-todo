var moment = require('moment');

console.log(moment().format());

// January 1st 1970 @ 12:00am -> 0
// January 1st 1970 @ 12:01am -> -60

var now = moment();

console.log('Current timestamp', now.unix());

var timestamp = 1466311520;
var currentMoment = moment.unix(timestamp);
console.log('current moment', currentMoment.format('MMM D, Y @ H:mm'));

// January 3rd, 2016
console.log('current moment', currentMoment.format('MMMM Do, Y @ H:mm a'));
