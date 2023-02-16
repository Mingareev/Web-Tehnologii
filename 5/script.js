alert("Массив с рандомной длиной, заполненный произвольными значениями от -100 до 100 и найденые в нём Макс. и Мин. значения с помощью функции");
function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
let arr = [];
let minEl = 100;
let maxEl = -100;
for (let i = 0; i <= randomInteger(10, 50); i++) {
	arr[i] = randomInteger(-100, 100);
	if (arr[i] < minEl) {
	    minEl=arr[i];
	    posMin=i;
	    }
    else if (arr[i] > maxEl) {
        maxEl=arr[i];
        posMax=i;
    }
}
$(document).ready(function(){
		let str = '<h1>Массив на '+arr.length+' элемента(ов)<br></h1><table border="1"><tr><th>Позиция</th><th>Значение</th></tr>';
        for (let i = 0; i< arr.length; i++  ) {
            if (arr[i]!==undefined) str +='<tr><th>'+ i+'</th><td>'+arr[i]+'</td></tr>';
        }
        str +=  '</table><br><h1>Макс. элемент = '+maxEl+' (Поз. '+posMax+')<br> Мин. элемент = '+minEl+' (Поз. '+posMin+ ')</h1>';
        out_arr.innerHTML = str;
        
});
console.log(arr);
console.log(minEl);
console.log(maxEl);

