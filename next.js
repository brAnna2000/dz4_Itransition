[...document.querySelectorAll('button')].forEach(function(item) {
    item.addEventListener('click', function() {
      let b = JSON.parse(localStorage.getItem('values'));
      if(item.innerHTML == 'bro'){
        localStorage.setItem('bro', JSON.stringify(b[b.length-1].first_name))
      }
      else{
        localStorage.setItem('sis', JSON.stringify(b[b.length-1].first_name))  
      }
    });
});
