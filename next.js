[...document.querySelectorAll('button')].forEach(function(item) {
    item.addEventListener('click', function() {
      console.log(item.innerHTML);
      let b = JSON.parse(localStorage.getItem('values'));
      if(item.innerHTML == 'bro'){
        localStorage.setItem('bro', JSON.stringify(b[b.length-1]))
      }
      else{
        localStorage.setItem('sis', JSON.stringify(b[b.length-1]))  
      }
    });
});
