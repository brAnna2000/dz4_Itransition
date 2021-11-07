let author = document.getElementById('author');
let message = document.getElementById('message');
let exit = document.querySelector('.exit');
exit.addEventListener('click', function() {
    window.location.href = 'index.html';
    localStorage.setItem('broClick',0);
    localStorage.setItem('sisClick',0);
});

if(localStorage.getItem('broClick')==1){
    author.textContent = localStorage.getItem('bro') + " " + localStorage.getItem('broSurname') + ' at ' + JSON.parse(localStorage.getItem('timeBro'));
    message.textContent = "Bro!"; 
}
else if(localStorage.getItem('sisClick')==1){
    author.textContent = localStorage.getItem('sis') + " " + localStorage.getItem('sisSurname') + ' at ' + JSON.parse(localStorage.getItem('timeSis'));
    message.textContent = "Sis!";
}
