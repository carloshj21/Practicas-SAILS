const async = require('async');
//const debug = require('debug');
//const error = debug('index:error');

function declaration(cb){
		cb(1000, 0);
}

function hour(err, time, timess, cb){
	t = time;
	setTimeout(function(){
		tim=Date.now();
		if(tim%2 == 0)
		{
			timess=tim;
		}
		else
		{
			timess="(:";
		}
		console.log(timess);
		return cb(null, t, timess);
	}, t);
	t=time+1000;
  cb();
}

async.waterfall([
	declaration,
  hour
], (err, t, timess, cb) => {
  if(err){
    error('Oh no!');
  }
  console.log("Hola");
});
