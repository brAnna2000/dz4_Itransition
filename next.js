let text1 = document.getElementById('text1');
let text2 = document.getElementById('text2');
console.log(JSON.parse(localStorage.getItem('bro')))
if (localStorage.getItem('bro') !== null){
    
    text1.textContent = JSON.parse(localStorage.getItem('bro'));
}
if (localStorage.getItem('sis') !== null){
    text2.textContent = JSON.parse(localStorage.getItem('sis'));
}
[...document.querySelectorAll('button')].forEach(function(item) {
    item.addEventListener('click', function() {
      let b = JSON.parse(localStorage.getItem('values'));
      let time = new Date();
      if(item.innerHTML == 'bro'){
        localStorage.setItem('bro', JSON.stringify(b[b.length-1].first_name));
        localStorage.setItem('time', JSON.stringify(time.getHours() + ':' + time.getMinutes()));
      }
      else{
        localStorage.setItem('sis', JSON.stringify(b[b.length-1].first_name));
        localStorage.setItem('time', JSON.stringify(time.getHours() + ':' + time.getMinutes()));  
      }
    });
});
