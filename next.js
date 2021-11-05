let buttons = document.getElementsByClassName('button');
// buttons.addEventListener('click', preview);

[...document.querySelectorAll('button')].forEach(function(item) {
    item.addEventListener('click', sending);
});
console.log(data);
