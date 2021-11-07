let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');

if (localStorage.getItem('bro') !== null){
    text1.textContent = "Sent by "+ JSON.parse(localStorage.getItem('bro')) + " at " + JSON.parse(localStorage.getItem('timeBro'));
}
if (localStorage.getItem('sis') !== null){
    text2.textContent = "Sent by "+ JSON.parse(localStorage.getItem('sis')) + " at " + JSON.parse(localStorage.getItem('timeSis'));
}
[...document.querySelectorAll('button')].forEach(function(item) {
    item.addEventListener('click', function() {
      let b = JSON.parse(localStorage.getItem('values'));
      let name = b[b.length - 1].first_name;
      let surname = b[b.length - 1].last_name;
      let time = new Date();
      console.log(name, email);
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
