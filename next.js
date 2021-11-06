[...document.querySelectorAll('button')].forEach(function(item) {
    item.addEventListener('click', function() {
      console.log(item.innerHTML);
    });
});
