let kue = require('kue');

let REDIS_ADDR = process.env.REDIS_ADDR || '127.0.0.1:6379';

let queue = kue.createQueue({
  redis: `redis://${REDIS_ADDR}`
});


let job = queue
.create('email', {to: 'queue@example.com'})
.save(function(err) {
  if (!err) {
    console.log(job.id);
  }
  process.exit(0)
});
