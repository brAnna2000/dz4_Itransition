[...document.querySelectorAll('button')].forEach(function(item) {
    item.addEventListener('click', function() {
      let b = JSON.parse(localStorage.getItem('values'));
      let time = new Date();
      if(item.innerHTML == 'bro'){
        localStorage.setItem('bro', JSON.stringify(b[b.length-1].first_name));
        localStorage.setItem('time', JSON.stringify(time.getHours + ':' + time.getMinutes));
      }
      else{
        localStorage.setItem('sis', JSON.stringify(b[b.length-1].first_name));
        localStorage.setItem('time', JSON.stringify(time.getHours + ':' + time.getMinutes));  
      }
    });
});
