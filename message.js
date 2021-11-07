let author = document.getElementById('author');
let message = document.getElementById('message');
if(localStorage.getItem('broClick')==1){
    author.textContent = JSON.parse(localStorage.getItem('bro')) + " " + JSON.parse(localStorage.getItem('broSurname')) + ' at ' + JSON.parse(localStorage.getItem('timeBro'));
    message.textContent = "Bro!"; 
}
else{
    author.textContent = JSON.parse(localStorage.getItem('sis')) + " " + JSON.parse(localStorage.getItem('sisSurname')) + ' at ' + JSON.parse(localStorage.getItem('timeSis'));
    message.textContent = "Bro!";
}