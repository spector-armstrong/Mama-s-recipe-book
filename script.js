document.getElementById("add-recipe-btn").addEventListener('click', function () {
    document.getElementById('modal-backdrop').style.display = 'block';
});


document.getElementById('close-modal').addEventListener('click', function() {
    document.getElementById('modal-backdrop').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('modal-backdrop')) {
        document.getElementById('modal-backdrop').style.display = 'none';
}});