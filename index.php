<?php session_start (); ?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="stylesheet" href="style.css">
    
    <title>Document</title>
</head>
<body>
    <script src="//ulogin.ru/js/ulogin.js"></script>
    <div id="uLogin" data-ulogin="display=panel;theme=classic;fields=first_name,last_name;providers=vkontakte,facebook;
    hidden=google;redirect_uri=http%3A%2F%2Ftender-kare-58d628.netlify.app%2F;mobilebuttons=0;"></div>
    <?php if(!isset)($_SESSION['user'])) { ?>
        <script src="//ulogin.ru/js/ulogin.js"></script><div id="uLogin_33673656" data-uloginid="33673656"></div>
    <?php } else { 
    $user = $_SESSION['user']; 
    ?>    
    <h2>
        <?php $user=['first_name']; ?> <?php $user=['last_name']; ?>
    </h2>
    <img src="<?php $user=['photo']; ?>">
    <span>Вы авторизовались через <?php $user=['network']; ?></span>
    <a href="/exit.php">Выход</a>
    <?php }?>    
    <script src="index.js"></script>
</body>
</html>