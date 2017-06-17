const async = require('async');

function declaration(cb){
	cb(null, 0, 1);
}

/*function declaration2(cb){
	cb(null, 1000, 0);
*/

function fibonacci3(ant2, ant1, cb){
	num3 = ant2+ant1;
	return cb(null, ant1, num3);
}

function hour(time, timess, cb){
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
}

async.waterfall([
	declaration,
	fibonacci3,
	fibonacci3,
	fibonacci3,
	fibonacci3,
	fibonacci3,
	fibonacci3,
	fibonacci3,
	fibonacci3,
	//declaration2,
	//hour,
	], (err, cb) => {
		if(err){
			console.log("Error");
		}
		else{
			console.log(num3);
			console.log('-------------------');
		}
});
