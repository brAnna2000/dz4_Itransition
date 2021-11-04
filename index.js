console.log('hello');
function preview(token){
    $.getJSON("//ulogin.ru/token.php?host=" + encodeURIComponent(location.toString()) + "&token=" + token + "&callback=?", function(data){
        data = $.parseJSON(data.toString());
        if(!data.error){
            alert("Привет, "+data.first_name+" "+data.last_name+"!");
        }
    });
    window.location.href = 'next.html';
}
// let div = document.getElementById('uLogin_33673656');
// div.addEventListener('click', preview);