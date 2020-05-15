document.addEventListener("DOMContentLoaded", function(event) {
	if(typeof loaded == "undefined") {
		loaded = true;
		location.href = '#!';
		document.querySelectorAll('body')[0].insertAdjacentHTML('beforeend', '<style>#eqipimage{display:none;background:#FFF;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;text-align:center}#eqipimage:target{display:block}#eqipimage img{max-width:90%;max-height:80%;margin-top:2%}</style><div id="eqipimage"><a href="#!" id="close" style="font-size:40px;cursor:pointer;position:fixed;right:10px;top:0;text-decoration:none;color:black">&times;</a><img></div>');
		imgList = {
			"md43": "https://i.imgur.com/Byr01yh.jpg",
			"md42": "http://emaker.mcut.edu.tw/servlet/jform?step=2&file=borrow.dat&enc=93d23f3a4b3f005d504d4d5048630e0b080d0a0b0e060d09060a08600e0b0e0c0809080b600e0d0f070e0808060a0d0a0c0a070d0d600e0909080d0f08090b0d605111554f58"
		}
		eqipTable = document.querySelectorAll('span[name=table1] tr');
		for(i = 2; i <= eqipTable.length; i++) {
			if(imgList[document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim()] != undefined) {
				document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].onclick = function() {
					location.href = '#eqipimage';
					console.log('aaa',imgList[document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim()]);
					document.querySelectorAll('#eqipimage img')[0].src = imgList[document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim()];
					if(document.querySelectorAll('#eqipimage')[0].offsetHeight / document.querySelectorAll('#eqipimage img')[0].height < document.querySelectorAll('#eqipimage')[0].offsetWidth / document.querySelectorAll('#eqipimage img')[0].width) document.querySelectorAll('#eqipimage img')[0].height = document.querySelectorAll('#eqipimage')[0].offsetHeight;
					else document.querySelectorAll('#eqipimage img')[0].width = document.querySelectorAll('#eqipimage')[0].offsetWidth
				}
			}
		}
	}
});
