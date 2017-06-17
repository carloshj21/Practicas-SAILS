//Tarea 5 - Hernández Juárez Carlos

const Promise = require('bluebird');
//Functions
function declaration(cb){
	cb(0, 1);
}
function fibonacci3(ant2, ant1, cb){
	num3 = ant2+ant1;
	return cb(ant1, num3);
}
function declaration2(cb){
	cb(1000, 0);
}
function hour(time, timess, cb){
	t = time;
	setTimeout(function(){
		tim=Date.now();
		if(tim%2 == 0){
			timess=tim;
		}
		else{
			timess="(:";
		}
		console.log(timess);
		return cb(t, timess);
	}, t);
	t=time+1000;
}
//Bluebird
let a = Promise.promisify(declaration),
	b = Promise.promisify(fibonacci3);
	//c = Promise.promisify(declaration2);
  //d = Promise.promisify(hour);

  let p = a()
  	.then((ant2, ant1) => {
      return b(ant2, ant1);
  	})
    .then((ant1, num3) => {
      console.log(num3);
			console.log('---------------');
    })
  	.catch((err) => {
  		console.log("Error");
  	});
