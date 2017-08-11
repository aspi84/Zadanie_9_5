var buttonClass = document.getElementsByClassName('button');
console.log(buttonClass);

for (i = 0; i < buttonClass.length; i++) {
	var text = buttonClass[i].innerText;
 console.log(text);
}