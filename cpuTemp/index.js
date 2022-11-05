/*
*
* Copyright (c) 2022 Hugo Chen, All Rights Reserved.
* 
* According to the license, you can redistribute this project.
*
* Remember to add the author information when you redistribute this project.
*
*/

const si = require('systeminformation');
const prompt = require('prompt-sync')();

const getCpuTimes = Number(prompt('請輸入欲測量的時間（以秒為單位，每 1 秒測量一次）：'));

if(typeof getCpuTimes !== 'number' || !Number.isInteger(getCpuTimes)){
	console.log('錯誤的輸入格式'); 
	return; 
}

let avg = [];

async function sleep(ms = 0){
	return new Promise(r => setTimeout(r, ms));
}

async function run(){
	for(var i = 0; i < getCpuTimes; i++){
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
	
	for(let i = 0; i < getCpuTimes; i++){
		avgSum += avg[i];
	}

	let avgResult = avgSum / getCpuTimes;

	console.log('Average:', avgResult);
}

run();
