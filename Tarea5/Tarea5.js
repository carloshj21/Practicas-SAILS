//Tarea 5 - Hernández Juárez Carlos

const Promise = require('bluebird');

//Functions
function declaration(cb){
	cb(null, [0, 1]);
}

function fibonacci([ant2, ant1], cb){
	num3 = ant2+ant1;
	return cb(null, [ant1, num3]);
}

function declaration2(cb){
	cb(null, [1000, 0]);
}

function unix([time, timess], cb){
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
		return cb(null, [t, timess]);
	}, t);
	t=time+1000;
}

//Fibonacci
let a = Promise.promisify(declaration),
	b = Promise.promisify(fibonacci);

let p0 = a()
	.then((nums) => {
		return b(nums);
	}).then((nums2) => {
		return b(nums2);
	}).then((nums3) => {
		return b(nums3);
	}).then((nums4) => {
		return b(nums4);
	}).then((nums5) => {
		return b(nums5);
	}).then((nums6) => {
		return b(nums6);
	}).then((nums7) => {
		return b(nums7);
	}).then((nums8) => {
		return b(nums8);
	}).then((nums9) =>{
		console.log(nums9[1]);
		console.log('---------------');
	}).catch((err) => {
		console.log("Error");
	});

//Hour UNIX
let c = Promise.promisify(declaration2),
		d = Promise.promisify(unix);

let p1 = c()
	.then((tims) =>{
		return d(tims);
	}).then((tims2) =>{
		return d(tims2);
	}).then((tims3) =>{
		return d(tims3);
	}).then((tims4) =>{
		return d(tims4);
	}).then((tims5) =>{
		return d(tims5);
	}).then((tims6) =>{
		return d(tims6);
	}).then((tims7) =>{
		return d(tims7);
	}).then((tims8) =>{
		return d(tims8);
	}).catch((err) => {
		console.log("Error");
	});
