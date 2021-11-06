function preview(token){
    $.getJSON("//ulogin.ru/token.php?host=" + encodeURIComponent(location.toString()) + "&token=" + token + "&callback=?", function(data){
        data = $.parseJSON(data.toString());
        if(!data.error){
            localStorage.setItem('first_name', data.first_name);
            localStorage.setItem('last_name', data.last_name);
            localStorage.setItem('data', data)
            alert("Привет, "+data.first_name+" "+data.last_name+"!");
            console.log(data);
        }
    });
    window.location.href = 'next.html';
}
// let div = document.getElementById('uLogin_33673656');
// div.addEventListener('click', preview);
