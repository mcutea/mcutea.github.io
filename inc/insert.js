document.addEventListener("DOMContentLoaded", function(event) { 
	imgList = {
		"md43": "https://i.imgur.com/Byr01yh.jpg"
	}
	eqipTable = document.querySelectorAll('span[name=table1] tr');
	for(i = 2; i <= eqipTable.length; i++) {
		img = imgList[document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim()];
		if(img != undefined) {
			document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].onclick = function() {
				console.log(img);
			}
		}
	}
});
