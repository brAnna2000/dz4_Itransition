[...document.querySelectorAll('buttons')].forEach(function(item) {
    item.addEventListener('click', function() {
      console.log(item.innerHTML);
    });
});
