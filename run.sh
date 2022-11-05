#!/bin/sh
if [ $1 = "-cputemp" ]
then
	cd cpuTemp
	yarn
	node index.js
