console.log(alasql("SELECT * FROM test"));

function preview(token){
    $.getJSON("//ulogin.ru/token.php?host=" + encodeURIComponent(location.toString()) + "&token=" + token + "&callback=?", function(data){
        data = $.parseJSON(data.toString());
        if(!data.error){
            let fn = [];
            if (localStorage.getItem('values') !== null){
                c = localStorage.getItem('values');
                c = JSON.parse(c);
                console.log(c);
                fn = c;
                let a = {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    country: data.country,
                }
                fn.push(a);
                localStorage.setItem('values', fn);
            }
            else{
                let a = {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    country: data.country,
                }
                fn.push(a);
                localStorage.setItem('values', fn);
            }
//             localStorage.setItem('first_name', data.first_name);
//             localStorage.setItem('last_name', data.last_name);
//             localStorage.setItem('email', data.email);
//             localStorage.setItem('country', data.country);
            alert("Привет, "+data.first_name+" "+data.last_name+"!");
//             console.log(data);
        }
    });
    window.location.href = 'next.html';
}
// let div = document.getElementById('uLogin_33673656');
// div.addEventListener('click', preview);
