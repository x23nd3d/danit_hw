document.getElementById('element').addEventListener('click', function(el) {
	el.preventDefault();
	createBack();
	showback();
});

function createBack() {
	let back = document.createElement('div');
	back.id = 'background'
	back.style.width = '100vw';
	back.style.height = '100vh';
	back.style.position = 'fixed';
	back.style.top = '0';
	back.style.left = '0';
	back.style.opacity = '0';
	back.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
	back.style.transition = '1s';
	document.body.appendChild(back)
//		.addEventListener('click', function(el) {
//		this.style.display = 'none';
//		this.remove();
//	});
}

function showback() {
	let bg = document.getElementById('background');
	bg.style.opacity = 1;
}