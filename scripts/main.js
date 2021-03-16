//CAMBIO DE IMAGEN

let myImage = document.querySelector('img');

myImage.onclick = function() {
	let mySrc = myImage.getAttribute('src');
	if(mySrc === 'imagenes/ojo-2.png') {

		myImage.setAttribute('src', 'imagenes/ojo-3.png');

	} else if (mySrc === 'imagenes/ojo-3.png')  {

		myImage.setAttribute('src', 'imagenes/ojo-4.png');

	} else if (mySrc === 'imagenes/ojo-4.png')  {

		myImage.setAttribute('src', 'imagenes/ojo-5.png');

	} else if (mySrc === 'imagenes/ojo-5.png')  {

		myImage.setAttribute('src', 'imagenes/ojo-6.png');

	} else if (mySrc === 'imagenes/ojo-6.png')  {

		myImage.setAttribute('src', 'imagenes/ojo-7.png');

	} else if (mySrc === 'imagenes/ojo-7.png')  {

		myImage.setAttribute('src', 'imagenes/ojo-2.png');

	}
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');


//NOMBRE
function setUserName() {
	let myName = prompt('Please enter your name');
	localStorage.setItem('name', myName);
	myHeading.textContent = 'Bienvenidx, ' + myName;
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Bienvenidx, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

function setUserName() {
	let myName = prompt('Por favor, ingrese su nombre:  ');
	if(!myName) {
		setUserName();
	} else {
		localStorage.setItem('name', myName);
		myHeading.textContent = `Bienvenidx, ${myName}`;
	}
}
	
