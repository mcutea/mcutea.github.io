var imgList = {"id":"image"}
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
		/*
		if(document.querySelectorAll('input')[0].value == '個人借用紀錄') {
			document.querySelectorAll('button')[0].style.display = 'none';
			if(document.querySelectorAll('input')[18].value == '') {
				document.querySelectorAll('button')[2].style.display = 'none';
				document.querySelectorAll('span[name=table1]')[0].style.display = 'none';
			} else {
				if(localStorage.canShowPrint) {
					var xhr = new XMLHttpRequest();
					xhr.addEventListener('load', function() {
						d1 = document.querySelectorAll('td')[6].innerText.trim();
						d2 = document.querySelectorAll('td')[7].innerText.trim();
						parsedDate = d1.substr(0,4)+'/'+d1.substr(4,2)+'/'+d1.substr(6,2);
						parsedDate += ' ~ ' + d2.substr(0,4)+'/'+d1.substr(4,2)+'/'+d1.substr(6,2);
						document.querySelectorAll('body')[0].insertAdjacentHTML('beforeend', this.responseText);
						document.querySelectorAll('#print_field_13')[0].innerText = document.querySelectorAll('input')[13].value;
						document.querySelectorAll('#print_field_14')[0].innerText = document.querySelectorAll('input')[14].value;
						document.querySelectorAll('#print_field_15')[0].innerText = document.querySelectorAll('input')[15].value;
						document.querySelectorAll('#print_field_16')[0].innerText = document.querySelectorAll('input')[16].value;
						document.querySelectorAll('#print_field_17')[0].innerText = document.querySelectorAll('input')[17].value.split(' ')[1];
						document.querySelectorAll('#print_field_18')[0].innerText = document.querySelectorAll('input')[18].value;
						document.querySelectorAll('#print_field_19')[0].innerText = document.querySelectorAll('input')[19].value;
						document.querySelectorAll('#print_field_date')[0].innerText = parsedDate;
						eqipTable2 = document.querySelectorAll('span[name=table1] tr');
						for(var j = 2; j <= eqipTable2.length; j++) {
							if(document.querySelectorAll('span[name=table1] tr:nth-child('+j+') td')[1].innerText.trim() != 'zhide') {
								table_html = '<tr><td>'+document.querySelectorAll('span[name=table1] tr:nth-child('+j+') td')[2].innerText.trim()+'</td><td>'+document.querySelectorAll('span[name=table1] tr:nth-child('+j+') td')[3].innerText.trim()+'</td><td>'+document.querySelectorAll('span[name=table1] tr:nth-child('+j+') td')[4].innerText.trim()+'</td><td style="text-align:right">'+document.querySelectorAll('span[name=table1] tr:nth-child('+j+') td')[5].innerText.trim()+'</td></tr>';
								document.querySelectorAll('#print_form_borrow tbody')[0].insertAdjacentHTML('beforeend', table_html);
							}
						}
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
			for(var i = 2; i <= eqipTable2.length; i++) {
				id = document.querySelectorAll('span[name=table2] tr:nth-child('+i+') td')[1].innerText.trim();
				if(id == 'zhide') document.querySelectorAll('span[name=table2] tr:nth-child('+i+')')[0].style.display = 'none';
			}
		}
		*/
	}
});
