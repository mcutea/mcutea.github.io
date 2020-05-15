var imgList = {
	"md43": "https://i.imgur.com/Byr01yh.jpg",
	"md42": "http://emaker.mcut.edu.tw/servlet/jform?step=2&file=borrow.dat&enc=93d23f3a4b3f005d504d4d5048630e0b080d0a0b0e060d09060a08600e0b0e0c0809080b600e0d0f070e0808060a0d0a0c0a070d0d600e0909080d0f08090b0d605111554f58"
}
var showimg = function(id) {
	location.href ='#eqipimage';
	document.querySelectorAll('#eqipimage img')[0].src = '';
	img = new Image();
	img.onload = function() {
		imgele = document.querySelectorAll('#eqipimage img')[0];
		outele = document.querySelectorAll('#eqipimage')[0];
		mgele.src = imgList[id];
		imgele.removeAttribute('width')
		imgele.removeAttribute('height');
		if(this.height < this.width) imgele.width = outele.offsetWidth;
		else imgele.height = outele.offsetHeight;
	}
	img.src = imgList[id];
}
document.addEventListener("DOMContentLoaded", function(event) {
	if(typeof loaded == "undefined") {
		loaded = true;
		location.href = '#!';
		document.querySelectorAll('body')[0].insertAdjacentHTML('beforeend', '<style>#eqipimage{display:none;background:#FFF;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;text-align:center}#eqipimage:target{display:block}#eqipimage img{max-width:90%;max-height:80%;margin-top:2%}</style><div id="eqipimage"><a href="#!" id="close" style="font-size:40px;cursor:pointer;position:fixed;right:10px;top:0;text-decoration:none;color:black">&times;</a><img></div>');
		eqipTable = document.querySelectorAll('span[name=table1] tr');
		var id;
		for(var i = 2; i <= eqipTable.length; i++) {
			id = document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim();
			if(imgList[id] != undefined) {
				document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].setAttribute('onclick','showimg("'+id+'")');
			}
		}
	}
});
