var imgList = {"A01":"KmAsVez.jpg","A02":"xZyyEwW.jpg","A03":"v1jaUt4.png","A04":"C5Rvk4S.png","A05":"e8xjYx4.png","A06":"7krlQGq.png","A07":"2PvvMEKh.png","A08":"sJM4kLL.png","A09":"aZ5v6Em.png","A10":"JoO25MV.jpg","A11":"x3HuSj2.png","A12":"yDfVbux.jpg","A13":"4NQRPDFh.jpg","A14":"W8vGiyZ.png","A15":"ONSYmOi.png","A16":"me7ym0U.png","A17":"zeRaypM.png","B01":"x0FBm3I.jpg","B02":"fZmurQV.jpg","B03":"FucGNn9.jpg","B04":"lsQWCdH.png","B05":"td9W0vD.jpg","B06":"J43J5aQ.jpg","B07":"bMebY8N.jpg","B08":"qtKaejY.jpg","B09":"5P7awa3.jpg","B10":"XcW3xnW.jpg","C01":"hCgP48eh.png","C02":"YHhSqIW.jpg","C03":"ambwzb7h.jpg","C04":"qOaZt0z.png","C05":"kZfo8Ox.png","D01":"dXK2Sf5h.jpg","D02":"cquBncI.jpg","D03":"uBDToWM.jpg","D04":"auxbELf.jpg","D05":"nAjYk7W.jpg","D06":"pq7uQU5.jpg","E01":"3fPEba6.jpg","E02":"YGumo7c.jpg","E03":"V1aR9EO.jpg","E04":"hssjwT3.jpg","E05":"O5RKfK0.jpg","E06":"FhYslqe.jpg","E07":"UqU9sHI.jpg","E09":"BMA0Gwi.jpg","E10":"d7PLmrG.jpg","E11":"BMSPFOx.jpg","E12":"OOYndR7.jpg","E13":"xQG2KQz.jpg","E14":"ZaGuIDV.jpg","E15":"1mYGRBC.jpg","E16":"DEIia1R.jpg","E17":"I3b6p3o.jpg","E18":"Ydrg1Q7.jpg","E19":"etfgrE7.jpg","E20":"4JWaIXT.jpg","E21":"4HOBibR.jpg","E22":"U1hFgTC.jpg","E23":"1YFkGlO.jpg","E24":"OLExBu2.jpg","F01":"Xtrbo7z.png","F02":"nvz5YZY.png","F03":"0kK1RXc.png","F04":"3HmaDYt.jpg","F05":"XQZRBwq.png","F08":"rZ4tmLL.jpg","F09":"WNXu73B.png","F12":"JT0XoeBh.jpg","F13":"ozRfPUM.png"}
var showimg = function(id) {
	location.href ='#eqipimage';
	document.querySelectorAll('#eqipimage img')[0].src = '';
	img = new Image();
	imgele = document.querySelectorAll('#eqipimage img')[0];
	imgele.removeAttribute('width')
	imgele.removeAttribute('height');
	imgele.src = 'https://i.imgur.com/'+imgList[id];
	img.onload = function() {
		outele = document.querySelectorAll('#eqipimage')[0];
		if(this.height < this.width) imgele.width = outele.offsetWidth*0.8;
		else imgele.height = outele.offsetHeight*0.8;
	}
	img.src = 'https://i.imgur.com/'+imgList[id];
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
			var sel = document.querySelectorAll('select[name=field2]')[0];
			var opts = sel.options;
			for (var opt, j = 0; opt = opts[j]; j++) {
				if (opt.value == '課外活動組') {
					if(document.querySelectorAll('#field1')[0].value == 'clubadmin') sel.selectedIndex = j;
					else opt.remove();
					break;
				}
			}
			eqipTable = document.querySelectorAll('span[name=table1] tr');
			var id;
			for(var i = 2; i <= eqipTable.length; i++) {
				id = document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim();
				if(imgList[id] != undefined) document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].setAttribute('onclick','showimg("'+id+'")');
				else {
					document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].removeAttribute('onclick')
					document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td:nth-child(3) span')[0].removeAttribute('style')
				}
			}
		}
	}
});
