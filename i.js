var imgList = {"ma01":"93d23f3a4b3f145d504d4d5048630e0b0f0c080b0606080d0b0606600d0e0d0f090f0b090e08080e090c600e070911554f58","ma03":"93d23f3a4b3f215d504d4d5048630e0b0f0c080a0e0c0a080d0908604f0e120d0d11554f58","mb04":"93d23f3a4b3f1e5d504d4d5048630e0b0f070a0f090c08080e090c607b6c7c600f0e0a0f11554f58","mb06":"93d23f3a4b3f1e5d504d4d5048630e0a0f090b080f070f0e0e09076076727e780f0b0a0c11554f58","mb07":"93d23f3a4b3f1e5d504d4d5048630e0a0f090b080e0f08080d090b6076727e780f0b0a0d11554f58","mb10":"93d23f3a4b3f1e5d504d4d5048630e0a0f090b080e0b060709070c6076727e780f0b0a0911554f58","mb12":"93d23f3a4b3f1e5d504d4d5048630e0b0f070c0b070f0809060f0e607b6c7c600f0e0e0611554f58","mb13":"93d23f3a4b3f225d504d4d5048630e0d0d0d060e090c0e0b0d0f0660727d0e0d11756f78","mb14":"93d23f3a4b3f225d504d4d5048630e0d0a0d0c060d0c0a0e08080b60727d0e0c11756f78","mb15":"93d23f3a4b3f1d5d504d4d5048630e0b0f070c0b09080b0f070608607b6c7c600f0e0e080e11554f58","mb18":"93d23f3a4b3f1e5d504d4d5048630e0b0e0d0e0b0f0a0c090f0c0e607b6c7c600f0d0f0811554f58","mb21":"93d23f3a4b3f1e5d504d4d5048630e0a0f090b080d0e0e0d07080e6076727e780f0b0a0811554f58","mb22":"93d23f3a4b3f015d504d4d5048630e0b080a090b0b060f0e080f0f600e0b090e0f0a0907600e0d0b0f0c0e0b0c09060c0d0d0e070f600b090d0c0e0f0f080a605111554f58","mb23":"93d23f3a4b3f005d504d4d5048630e0b08090709090e0f0e0b0707600e0b09070909070e600e0d0b0906090f070c0a0c0d0b0d0f0f600e0b0e0d0b060d0b0c0b605111554f58","mb24":"93d23f3a4b3f1e5d504d4d5048630e0a0e090c0b07080e09090e0c607b6c7c0f0d0e0c0b11756f78","mc03":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0e080a0f09070a0f60727c0f0c11756f78","mc04":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0e070d060c0e090d60727c0f0b11756f78","mc05":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0e070e0c0a08070860727c0f0a11756f78","mc06":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0e070b0d080c070e60727c0f0911756f78","mc07":"93d23f3a4b3f1e5d504d4d5048630e0d060e090f09080b0609080c606f0e0f0e0f0c0f0811756f78","mc08":"93d23f3a4b3f175d504d4d5048630e0d0a0d0c070f0a0e060f0709600d0f0f090e0f0e090e0e0b0b0c0b0d11554f58","mc09":"93d23f3a4b3f1e5d504d4d5048630e0b0f070b0d080e0b0c0e0609607b6c7c600f0e0b0d11554f58","mc13":"93d23f3a4b3f1e5d504d4d5048630e0a0e090c0b07090e0906080f607b6c7c0f0d0e0c0a11756f78","mc14":"93d23f3a4b3f175d504d4d5048630e0b0a080b07060b0d09090e0a60d8b8b7dabab6d9acb2d9b198d88abb11756f78","mc16":"93d23f3a4b3f015d504d4d5048630e0b080e0d0b0907060d060c0a600e0b0f0b0a0e070f600e0e060b0a060c080c080d0d080a080860060b0a0e0806060909605011554f58","mc17":"93d23f3a4b3f015d504d4d5048630e0b080d0a0b0e0c060609060d600e0b0e070d0b0a0c600e0d0f070e080e080c0d0a0c090b0b0b600e0c0b0c0a0d0a080e605111554f58","md00":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0e060e06060a0a0c60727b0e0f11756f78","md01":"93d23f3a4b3f225d504d4d5048630e0d0d0d070a090b0a07070e0660525b0f0e11554f58","md02":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0e070b07060f0a0c60727b0f0d11756f78","md03":"93d23f3a4b3f1e5d504d4d5048630e0d0a0d0c070f060d070f0a0a607b6c7c0f09070c0e11756f78","md08":"93d23f3a4b3f005d504d4d5048630e0b090a06090709070a07070f600e0c0b0b0b0e0e0b600e0e0a0d0a070e0b0c0e0b0d07070f07600e070d060f06090c0f06605111554f58","md09":"93d23f3a4b3f215d504d4d5048630e0d0d0c0a0c0d0e0d0b0c0f0c60525b0f060e11554f58","md10":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0e060e0b0a060b0b60727b0f0611756f78","md13":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0e060d060b070e0660727b0e0d11756f78","md15":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0e060b0a0f0a0c0860727b0e0a11756f78","md16":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0c0e0b0806090e0a60525b0e0911554f58","md17":"93d23f3a4b3f0d5d504d4d5048630e0d0a0d0c080a0e0c0f0c0f0a605c575d5e574c124b574a525d120e0e0f0a07070c080f08120611554f58","md19":"93d23f3a4b3f155d504d4d5048630e0d0d0b0b09070e0f060a0d0e600d0f0f080f090d0e0e070d060a0c06090f11554f58","md20":"93d23f3a4b3f1e5d504d4d5048630e0a0e0d0e0e0d0e06080d090b600c0f0a060f0d070b11554f58","md21":"93d23f3a4b3f1f5d504d4d5048630e0d0b0d07090607070608070960daa3a9d8b6b80e11554f58","md23":"93d23f3a4b3f1e5d504d4d5048630e0a0e0d0e0e0b090b080d0e0c6076727e780f090c0b11554f58","md25":"93d23f3a4b3f165d504d4d5048630e0d0b0d0709060b060709060d600d0f0f090e0f0e070c0e0e0d090c090d11554f58","md26":"93d23f3a4b3f1e5d504d4d5048630e0a0e0d0e0e090c08080e090b6076727e780f090c0611554f58","md30":"93d23f3a4b3f1e5d504d4d5048630e0a0e0d0e0e080d0f06070c0a6076727e780f090c0a11554f58","md31":"93d23f3a4b3f1c5d504d4d5048630e0a0e0d0e0e080b0f0e08080a6076727e780f090c09410d11554f58","md32":"93d23f3a4b3f1e5d504d4d5048630e0a0e0d0e0e080b0907090d0f6076727e780f090c0811554f58","md33":"93d23f3a4b3f1e5d504d4d5048630e0a0e0d0e0e080a0d0a0f0e0d6076727e780f090c0711554f58","md34":"93d23f3a4b3f1e5d504d4d5048630e0a0e0d0e0e0809070c0d06096076727e780f090b0e11554f58","md35":"93d23f3a4b3f1c5d504d4d5048630e0a0e0d0e0e08070b06090d086076727e780f090b0f410d11554f58","md36":"93d23f3a4b3f1e5d504d4d5048630e0a0e0d0e0e070f080c0c0f0d6076727e780f090b0d11554f58","md37":"93d23f3a4b3f1e5d504d4d5048630e0d060e090f0a0d070e0f070f606f0e0f0e0f0c0f0d11756f78","md38":"93d23f3a4b3f1e5d504d4d5048630e0d060e090f0a0c0906070e0b606f0e0f0e0f0c0f0911756f78","md39":"93d23f3a4b3f225d504d4d5048630e0d0d0c0a0e07090f0c0b0b0b60727b0f0b11756f78","md40":"93d23f3a4b3f215d504d4d5048630e0b0e07080f0809080d0e0c0c600e0f0b0f0811554f58","md41":"93d23f3a4b3f025d504d4d5048630e0b080e0d0b0909080f08060e600e0b0f0f06060606600e0e060b0a060c080b0f0a090f060e0f600b080f0f0e0d0a09605111554f58","md42":"93d23f3a4b3f005d504d4d5048630e0b080d0a0b0e060d09060a08600e0b0e0c0809080b600e0d0f070e0808060a0d0a0c0a070d0d600e0909080d0f08090b0d605111554f58","md43":"93d23f3a4b3f015d504d4d5048630e0b0809070909090f090b0a0f600e0b080607060c07600e0d0a0d0c0d0b0c090e0b0a0b0a0e0b600b080c0d07060d080d605111554f58"};
var showimg = function(id) {
	location.href ='#eqipimage';
	document.querySelectorAll('#eqipimage img')[0].src = '';
	img = new Image();
	imgele = document.querySelectorAll('#eqipimage img')[0];
	imgele.removeAttribute('width')
	imgele.removeAttribute('height');
	imgele.src = 'http://emaker.mcut.edu.tw/servlet/jform?step=2&file=borrow.dat&enc='+imgList[id];
	img.onload = function() {
		outele = document.querySelectorAll('#eqipimage')[0];
		if(this.height < this.width) imgele.width = outele.offsetWidth*0.8;
		else imgele.height = outele.offsetHeight*0.8;
	}
	img.src = 'http://emaker.mcut.edu.tw/servlet/jform?step=2&file=borrow.dat&enc='+imgList[id];
}
document.addEventListener("DOMContentLoaded", function(event) {
	if(typeof loaded == "undefined") {
		if(document.querySelectorAll('input')[0].value == '器材借用申請') {
			document.querySelectorAll('#field6')[0].setAttribute('maxlength',8);
			document.querySelectorAll('#field7')[0].setAttribute('maxlength',8);
			document.querySelectorAll('#field8')[0].setAttribute('placeholder','請填寫活動場地');
			loaded = true;
			location.href = '#!';
			document.querySelectorAll('body')[0].insertAdjacentHTML('beforeend', '<style>#eqipimage{display:none;background:#FFF;position:fixed;top:0;left:0;width:100%;height:100%;z-index:1000;text-align:center}#eqipimage:target{display:block}#eqipimage img{max-width:70%!important;max-height:70%!important;margin-top:5%}</style><div id="eqipimage"><a href="#!" id="close" style="font-size:40px;cursor:pointer;position:fixed;right:10px;top:0;text-decoration:none;color:black">&times;</a><img></div>');
			eqipTable = document.querySelectorAll('span[name=table1] tr');
			var id;
			for(var i = 2; i <= eqipTable.length; i++) {
				id = document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim();
				if(imgList[id] != undefined) document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].setAttribute('onclick','showimg("'+id+'")');
				else {
					document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].removeAttribute('onclick')
					document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].removeAttribute('style')
				}
				if(id == 'zhide') {
					document.querySelectorAll('span[name=table1] tr:nth-child('+i+')')[0].style.display = 'none';
					document.querySelectorAll('span[name=table1] tr:nth-child('+i+') option')[1].setAttribute('selected','selected');
				}
			}
		}
		if(document.querySelectorAll('input')[0].value == '個人借用紀錄') {
			document.querySelectorAll('button')[0].style.display = 'none';
			if(document.querySelectorAll('input')[18].value == '') {
				document.querySelectorAll('button')[2].style.display = 'none';
				document.querySelectorAll('span[name=table1]')[0].style.display = 'none';
			} else {
				if(localStorage.canShowPrint) {
					var xhr = new XMLHttpRequest();
					xhr.addEventListener('load', function() {
						document.querySelectorAll('body')[0].insertAdjacentHTML('beforeend', this.responseText);
						document.querySelectorAll('#print_field_13')[0].innerText = document.querySelectorAll('input')[13].value;
						document.querySelectorAll('#print_field_14')[0].innerText = document.querySelectorAll('input')[14].value;
						document.querySelectorAll('#print_field_15')[0].innerText = document.querySelectorAll('input')[15].value;
						document.querySelectorAll('#print_field_16')[0].innerText = document.querySelectorAll('input')[16].value;
						document.querySelectorAll('#print_field_17')[0].innerText = document.querySelectorAll('input')[17].value;
						document.querySelectorAll('#print_field_18')[0].innerText = document.querySelectorAll('input')[18].value;
						document.querySelectorAll('#print_field_19')[0].innerText = document.querySelectorAll('input')[19].value;
						document.querySelectorAll('#print_field_time')[0].innerText = document.querySelectorAll('td')[6].innerText.trim() + '~' + document.querySelectorAll('td')[7].innerText.trim();
					});
					xhr.open('GET', 'https://mcutea.github.io/print.html');
					xhr.send(null);
				}
			}
			eqipTable = document.querySelectorAll('span[name=table1] tr');
			var id;
			for(var i = 2; i <= eqipTable.length; i++) {
				id = document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[1].innerText.trim();
				if(id == 'zhide') document.querySelectorAll('span[name=table1] tr:nth-child('+i+')')[0].style.display = 'none';
			}
		}
		if(document.querySelectorAll('input')[0].value == '課外組管理員') {
			eqipTable = document.querySelectorAll('span[name=table1] tr');
			var id;
			for(var i = 2; i <= eqipTable.length; i++) {
				id = document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim();
				if(id == 'zhide') document.querySelectorAll('span[name=table1] tr:nth-child('+i+')')[0].style.display = 'none';
			}
			eqipTable2 = document.querySelectorAll('span[name=table2] tr');
			for(var i = 2; i <= eqipTable.length; i++) {
				id = document.querySelectorAll('span[name=table2] tr:nth-child('+i+') td')[1].innerText.trim();
				if(id == 'zhide') document.querySelectorAll('span[name=table2] tr:nth-child('+i+')')[0].style.display = 'none';
			}
		}
	}
});
