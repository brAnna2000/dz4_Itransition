let author = document.getElementById('author');
let message = document.getElementById('message');
console.log(localStorage.getItem('broClick'));
if(localStorage.getItem('broClick')==1){
    author.textContent = localStorage.getItem('bro') + " " + localStorage.getItem('broSurname') + ' at ' + JSON.parse(localStorage.getItem('timeBro'));
    message.textContent = "Bro!"; 
}
else{
    author.textContent = localStorage.getItem('sis') + " " + localStorage.getItem('sisSurname') + ' at ' + JSON.parse(localStorage.getItem('timeSis'));
    message.textContent = "Bro!";
}
