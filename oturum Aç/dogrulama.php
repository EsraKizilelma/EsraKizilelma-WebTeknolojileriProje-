<?php

$username = $_POST['kullanıcıAdı'];
$pass = $_POST['Parola'];

if($username=="b191210040@sakarya.edu.tr" && $pass=="b191210040")
{
    echo "Doğru";
}
else
{
    header("Location:oturumAc.html?kullaniciAdi=$username");
}
?>
ESRA