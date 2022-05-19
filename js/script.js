alert('Данная страница имеет шуточную основу, любые совпадения и намёки лишь плод вашего воображения');
function ReadAnswer() {
	var input1=document.getElementById('input1');
	var inputValue1=input1.value;
	var input2=document.getElementById('input2');
	var inputValue2=input2.value;
	if (inputValue1 == 40 & inputValue2 == "Нет") {
		alert ("Молодец, запускаю функцию показа секретной информации");
		show()
	} else
	alert ('Тест Завален, в кампашку не возьмем')
	}
function show() {
	var el=document.getElementById('divS');
	if(el.style.display=="none"){
	el.style.display="block";
	} else alert ('че то нито со считыванием') 
	}