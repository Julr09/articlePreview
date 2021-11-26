'use strict';

const button = document.getElementsByClassName('button');

for (let i = 0; i < button.length; i++) {
	button[i].addEventListener('click', () => {
		const active = document.getElementById("active");
		active.classList.toggle('show');
	})
}
