/** @format */

let btn = document.querySelector('#botton');
function appStart() {
	let result = document.querySelector('#result-in-para');
	try {
		let inptVal = document.querySelector('#input-value').value;
		if (inptVal == '') {
			result.classList.add('danger');
			throw 'the input is empty';
		}
		if (isNaN(inptVal)) {
			result.classList.add('danger');
			throw 'is not a number ';
		}
		let x = Number(inptVal);
		if (x < 1) {
			result.classList.add('alert');
			throw ' too small';
		} else if (x > 10) {
			result.classList.add('alert');
			throw 'too big';
		} else {
			result.textContent = 'welcome dear';
			result.classList.add('succesed');
		}
	} catch (error) {
		result.classList.replace('succesed', 'danger');
		result.textContent = error;
		setTimeout(() => {
			result.classList.remove('succesed');
			result.classList.remove('danger');
			result.classList.remove('alert');
			result.textContent = 'result will appear here';
		}, 5000);
	}
}
btn.addEventListener('click', appStart);
alert('please enter value between 1 to 10');
