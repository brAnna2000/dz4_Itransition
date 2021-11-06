let buttons = document.getElementsByClassName('button');
// buttons.addEventListener('click', preview);
let data = localStorage.getItem('first_name');
let lastName = localStorage.getItem('last_name');
let info = {
  firstName: localStorage.getItem('first_name'),
  lastName: localStorage.getItem('last_name'),
};
let list;
if(list.length > 0){
  list.push(info)}
else{
  list = [];
  list.push(info);
}


// [...document.querySelectorAll('button')].forEach(function(item) {
//     item.addEventListener('click', sending);
// });
console.log(list);
