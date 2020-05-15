document.addEventListener("DOMContentLoaded", function(event) {
	if(typeof loaded == "undefined") {
		loaded = true;
		document.querySelectorAll('body')[0].insertAdjacentHTML('beforeend', '<style>#eqipimage{display:none;background:#FFF;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;text-align:center}#eqipimage:target{display:block}#eqipimage img{max-width:90%;max-height:80%;margin-top:2%}</style><div id="eqipimage"><a href="#!" id="close" style="font-size:40px;cursor:pointer;position:fixed;right:30px;top:0;text-decoration:none;color:black">&times;</a><img></div>');
		imgList = {
			"md43": "https://i.imgur.com/Byr01yh.jpg"
		}
		eqipTable = document.querySelectorAll('span[name=table1] tr');
		for(i = 2; i <= eqipTable.length; i++) {
			img = imgList[document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim()];
			if(img != undefined) {
				document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].onclick = function() {
					location.href = '#eqipimage';
					document.querySelectorAll('#eqipimage img')[0].src = img;
				}
			}
		}
	}
});
