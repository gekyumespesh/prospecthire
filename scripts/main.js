const myHeading = document.querySelector("h1");
myHeading.textContent = "Hello world!";

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
	// body...
	const myName = prompt("Please enter your name. ");
	localStorage.setItem("name", myName);
	myHeading.textContent = 'Mozilla is cool, ${myName}';

	if (!localStorage.getItem("name")) 
	{
		setUserName();
	}
	 else {
	 	const storedName = localStorage.getItem("name");
	 	myHeading.textContent = 'Mozilla is cool, ${storedName}';}

	 	myButton.onclick = () => {
	 		setUserName();
	 	};


}