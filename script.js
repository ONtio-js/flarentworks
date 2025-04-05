// Get the modal
const modal = document.getElementById('myModal');

// Show modal when the page loads
window.onload = function () {
	modal.style.display = 'block';
};

// Get the <span> element that closes the modal
const closeBtn = document.getElementsByClassName('close-button')[0];

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function () {
	modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = 'none';
	}
};
