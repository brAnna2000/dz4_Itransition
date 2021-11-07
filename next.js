let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
console.log(JSON.parse(localStorage.getItem('bro')))
if (localStorage.getItem('bro') !== null){
    console.log(JSON.parse(localStorage.getItem('bro')));
    text1.textContent = "Sent by "+ JSON.parse(localStorage.getItem('bro')) + " at " + JSON.parse(localStorage.getItem('timeBro'));
}
else if (localStorage.getItem('sis') !== null){
    console.log(JSON.parse(localStorage.getItem('sis')))
    text1.textContent = "Sent by "+ JSON.parse(localStorage.getItem('sis')) + " at " + JSON.parse(localStorage.getItem('timeSis'));
}
[...document.querySelectorAll('button')].forEach(function(item) {
    item.addEventListener('click', function() {
      let b = JSON.parse(localStorage.getItem('values'));
      let time = new Date();
      if(item.innerHTML == 'bro'){
        localStorage.setItem('bro', JSON.stringify(b[b.length-1].first_name));
        localStorage.setItem('timeBro', JSON.stringify(time.getHours() + ':' + time.getMinutes()));
      }
      else{
        localStorage.setItem('sis', JSON.stringify(b[b.length-1].first_name));
        localStorage.setItem('timeSis', JSON.stringify(time.getHours() + ':' + time.getMinutes()));  
      }
    });
});
