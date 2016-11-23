
function pow(a, b){
	var res = 1;
	for (var i = 0; i < b; i++) {
		res *= a;
	}
	console.log(res);
}

var num = prompt('Введіть число', '');
var power = prompt('Введіть степінь', '');

pow(num, power);



function access(){
	var arr = [];
	for (var i = 0; i < 5; i++) {
		var temp = prompt("Введіть ім'я", '');
		arr.push(temp);
	}	
	var name = prompt("Введіть ім'я користувача", '');
	for (var i = 0; i < arr.length; i++) {
		if (arr[i] == name){
			alert(name + ", ви успішно ввійшли");
			return;
		}					
	}
	alert("невірно")
}

access();