let kue = require('kue');

let REDIS_ADDR = process.env.REDIS_ADDR || '127.0.0.1:6379';

let queue = kue.createQueue({
  redis: `redis://${REDIS_ADDR}`
});


queue.process('email', function(job, done){
  email(job.data.to, done);
});

function email(address, done) {
  console.log('sending email to:', address)
  done();
}
