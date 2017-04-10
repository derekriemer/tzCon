/*
	*tzcon.js: A light wait javascript library for converting dates or times for online conferences to local time.
	* This library is licenced under the MIT license.
	* This file Copyright (c) 2017 Derek Riemer
	* THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
	* IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
	* FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
	* See the file LICENSE for more details.
	*/

// from:https://github.com/jserz/js_piece/blob/master/DOM/ChildNode/remove()/remove().md
(function (arr) {
  arr.forEach(function (item) {
    if (item.hasOwnProperty('remove')) {
      return;
    }
    Object.defineProperty(item, 'remove', {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function remove() {
        this.parentNode.removeChild(this);
      }
    });
  });
})([Element.prototype, CharacterData.prototype, DocumentType.prototype]);

function run(){
	"use strict"; //burn evil javascript, burn!
	var times,time,i;
	//Remove the warning about no javascript conversion, as we know this library is valid.
	alert("Internet explorer is fuckeing stupid" + document.readyState);
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
}

function load(){
	
	if(document.readyState === 'complete')
		run();
	else
		document.addEventListener("readystatechange", load);
}
document.addEventListener("readystatechange", load);
