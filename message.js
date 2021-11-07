let author = document.getElementById('author');
let message = document.getElementById('message');
let exit = document.getElementsByClassName('.exit');
exit[0].addEventListener('click', function() {
    window.location.href = 'index.html';
});

if(localStorage.getItem('broClick')==1){
    author.textContent = localStorage.getItem('bro') + " " + localStorage.getItem('broSurname') + ' at ' + JSON.parse(localStorage.getItem('timeBro'));
    message.textContent = "Bro!"; 
}
else{
    author.textContent = localStorage.getItem('sis') + " " + localStorage.getItem('sisSurname') + ' at ' + JSON.parse(localStorage.getItem('timeSis'));
    message.textContent = "Bro!";
}
