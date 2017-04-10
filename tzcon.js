/*
	*tzcon.js: A light wait javascript library for converting dates or times for online conferences to local time.
	* This library is licenced under the MIT license.
	* This file Copyright (c) 2017 Derek Riemer
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	* See the file LICENSE for more details.
	*/

window.addEventListener("load", function(){
	"use strict"; //burn evil javascript, burn!
	var times,time,i;
	//Remove the warning about no javascript conversion, as we know this library is valid.
	document.querySelector(".tzutcwarning").remove();
	//This library doesn't support anything fancy with mutations adding times.
	//I have no need, but PR welcome for this.
	times = document.querySelectorAll(".tzcon");
	for(i=0; i<times.length; i++){
		time = times[i];
		var dateStr = time.innerText.trim();
		if(!dateStr.search(/\d{4}/))
			dateStr += " -0000";
		var date = new Date(dateStr);
		if(date.getYear() === NaN)
			time.innerText = "invalid date";
		else
			time.innerText = date.toLocaleString();
	}
});