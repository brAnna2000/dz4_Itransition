function preview(token){
    $.getJSON("//ulogin.ru/token.php?host=" + encodeURIComponent(location.toString()) + "&token=" + token + "&callback=?", function(data){
        data = $.parseJSON(data.toString());
        localStorage.setItem('enter','enter')
        if(!data.error){
            let fn = [];
            
            if (localStorage.getItem('values') !== null){
                console.log('hi1');
                c = localStorage.getItem('values');
                c = JSON.parse(c);
                console.log(c);
                for(i=0;i<c.length;i++){
                if(data.email !== c[i].email){
                   data.email}
                else{
                    alert("Привет, "+data.first_name+" "+data.last_name+"!"); 
                    window.location.href = 'next.html';
                    return
                }
                }
                fn = c;
                let a = {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    country: data.country,
                }
                fn.push(a);
                localStorage.setItem('values', JSON.stringify(fn));
            }
            else{
                console.log('hi');
                let a = {
                    first_name: data.first_name,
                    last_name: data.last_name,
                    email: data.email,
                    country: data.country,
                }
                fn.push(a);
                localStorage.setItem('values', JSON.stringify(fn));
            }
            alert("Привет, "+data.first_name+" "+data.last_name+"!");
        }
    });
    window.location.href = 'next.html';
}
