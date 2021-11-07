let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
let exit = document.querySelector('.exit');
exit.addEventListener('click', function() {
    window.location.href = 'index.html';
});

text1.addEventListener('click', function() {
    localStorage.setItem('broClick',1); 
    if(localStorage.getItem('bro') == null){
       localStorage.setItem('bro','Fedya'); 
       localStorage.setItem('broSurname','Great');
       let date = new Date(2021,01,01,11,54);
       localStorage.setItem('timeBro',date.getHours()+ ':' + date.getMinutes()); 
    }
    else{
        text1=text1;
    }
    window.location.href = 'message.html';
});
text2.addEventListener('click', function() {
    localStorage.setItem('sisClick',1);
    if(localStorage.getItem('sis') == null){
       localStorage.setItem('sis','Masha'); 
       localStorage.setItem('sisSurname','Beauty');
       let date = new Date(2021,01,01,20,00);
       localStorage.setItem('timeBro',date.getHours()+ ':' + date.getMinutes()); 
    }
    else{
        text1=text1;
    }
    window.location.href = 'message.html';
});

if (localStorage.getItem('bro') !== null){
    text1.textContent = "Sent by "+ localStorage.getItem('bro') + " at " + JSON.parse(localStorage.getItem('timeBro'));
}
if (localStorage.getItem('sis') !== null){
    text2.textContent = "Sent by "+ localStorage.getItem('sis') + " at " + JSON.parse(localStorage.getItem('timeSis'));
}
[...document.querySelectorAll('button')].forEach(function(item) {
    item.addEventListener('click', function() {
      let b = JSON.parse(localStorage.getItem('values'));
      let name = b[b.length - 1].first_name;
      let surname = b[b.length - 1].last_name;
      let time = new Date();
      if(item.innerHTML == 'Bro!'){
        localStorage.setItem('bro', name);
        localStorage.setItem('broSurname', surname);
        localStorage.setItem('timeBro', JSON.stringify(time.getHours() + ':' + time.getMinutes()));
        
      }
      else{
        localStorage.setItem('sis', name);
        localStorage.setItem('sisSurname', surname);
        localStorage.setItem('timeSis', JSON.stringify(time.getHours() + ':' + time.getMinutes()));  
      }
    });
});
