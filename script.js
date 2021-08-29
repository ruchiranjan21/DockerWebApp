function lw(){

var xhr= new XMLHttpRequest();

var i = document.getElementById("in1").value

xhr.open("GET", "http://192.168.43.106/cgi-bin/py.py?x=" + i, true);

xhr.send();

xhr.onload = function(){

	var output =xhr.responseText;
	document.getElementById("d1").innerHTML = output;

		}
	}


