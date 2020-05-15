console.log('Hello!');
imgList = {
  "T01": "https://i.imgur.com/Byr01yh.jpg"
}
eqipTable = document.querySelectorAll('span[name=table1] tr');
for(i = 2; i <= eqipTable.length; i++) {
  console.log(imgList[document.querySelectorAll('span[name=table1] tr:nth-child('+i+') td')[0].innerText.trim()]);
}
