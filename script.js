// Get the modal, open button and close button
var modal = document.querySelector('.modal');
var openModalButton = document.querySelector('#openModal');
var closeModalButton = document.querySelector('.close-modal');

// When the user clicks on the button, open the modal 
openModalButton.addEventListener('click', function() {
    modal.style.display = 'block';
});

// When the user clicks on <span> (x), close the modal
closeModalButton.addEventListener('click', function() {
    modal.style.display = 'none';
});

// When the user clicks anywhere outside of the modal, close it
window.addEventListener('click', function(event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});