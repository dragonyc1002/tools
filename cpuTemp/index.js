/*
*
* Copyright (c) 2022 Hugo Chen, All Rights Reserved.
* 
* You can use this file by following the license.
*
* This file is under BSD-3-Clause License.
*
*/

const si = require('systeminformation');

let avg = [];

async function sleep(ms = 0){
	return new Promise(r => setTimeout(r, ms));
}

async function run(){
	for(let i = 0; i < 10; i++){
		si.cpuTemperature()
			.then(data => console.log(data.main))
			
		si.cpuTemperature()
			.then(data => avg.push(data.main))
		
		await sleep(1000);
	}
	getAvg();
}

function getAvg(){
	let avgSum = 0;
	
	for(let i = 0; i < 10; i++){
		avgSum += avg[i];
	}

	let avgResult = avgSum / 10;

	console.log('Avarage:', avgResult);
}

run();
