document.addEventListener("DOMContentLoaded", function(event) { 
	document.write('<style>#eqipimage{display:none;background:#FFF;position:fixed;top:0;left:0;width:100%;height:100%;}#eqipimage:target{display:block}</style><div id="eqipimage"></div>');
	imgList = {
		"md43": "https://i.imgur.com/Byr01yh.jpg"
	}
	eqipTable = document.querySelectorAll('span[name=table1] tr');
	for(i = 2; i <= eqipTable.length; i++) {
		img = imgList[document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim()];
		if(img != undefined) {
			document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].onclick = function() {
				location.href = '#eqipimage';
				// set image to box
			}
		}
	}
});
