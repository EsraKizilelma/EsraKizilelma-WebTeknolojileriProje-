<!doctype html>
<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- Bootstrap CSS -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
    <link rel="stylesheet" href="hakkında.css">
    <title>Ana Sayfa</title>
  </head>
  <body class="bg-pink">
    <div id="sticky">
       <nav class="navbar navbar-danger navbar-expand-lg bg-warning text-white">
          <div class="container py-2">
            <a href="../hakkımda/Hakkında.html" class="navbar-brand text-white"> 
                <img src="../apple.png" width="50px" alt="Ana Sayfa"> Ana Sayfa
            </a>
            <a href="oturumAc.html" class="navbar-brand text-white"> Oturum Aç
                <img src="sign-in.png" width="50px" alt="sign-in icon">
            </a>   
          </div>
       </nav>
    </div>
    <section class=" w-75 m-auto py-4">
      <form action="dogrulama.php" method="POST">
        <input type="text" value="" placeholder="Kullanıcı Adı" name="kullanıcıAdı">
        <input type="text" value="" placeholder="Parola" name="Parola">
        <input type="submit" value="Giriş Yap" >

      </form>
    </section> 
  </body>
</html>