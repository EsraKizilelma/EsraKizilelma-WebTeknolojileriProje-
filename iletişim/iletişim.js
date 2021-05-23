function koduret ()
{
    var kodlar="";
    for(var i=1; i<6; i++)
    {
        if(Math.round(Math.random())==1)
        {
            kodlar=kodlar+String.fromCharCode(65+25*Math.random());
        }
        else
        {
            kodlar=kodlar+String.fromCharCode(48+9*Math.random());
        }
    }
    document.getElementById("uretilenkod").value=kodlar;
}
function askerlikdurumu(deger)
{
    if(document.getElementById(deger).value=="Erkek")
    {
        document.getElementById("askerlik").type="text";
    }
    else
    {
        document.getElementById("askerlik").type="hidden";
    }
}
function AcKapat(deger)
{
    if(document.getElementById(deger).type=="text")
    {
        document.getElementById(deger).type="hidden";
    }
    else
    {
        document.getElementById(deger).type="text";
    }
}
function kapat()
{
    document.getElementById("askerlik").value="";
    document.getElementById("yabancidil").value="";
    document.getElementById("ilgialan").value="";
    document.getElementById("beceri").value="";
    document.getElementById("askerlik").type="hidden";
    document.getElementById("yabancidil").type="hidden";
    document.getElementById("ilgialan").type="hidden";
    document.getElementById("beceri").type="hidden";
}
function odaklan(x)
{
    if(x=="ad"|| x=="soyad" || x=="email" || x=="girilenkod")
    {
        document.getElementById(x).value="";
        document.getElementById(x).style.background="#f0ae83;";
        document.getElementById(x).style.color="#000";
        document.getElementById(x).style.borderColor="#000";
    }
}
function cikis(x,y)
{
    if(y=="")
    {
        if(x=="ad")
        {document.getElementById(x).value="Adınızı Giriniz";}
        if(x=="soyad")
        {document.getElementById(x).value="Soyadınızı Giriniz";}
        if(x=="email")
        {document.getElementById(x).value="Mailinizi Giriniz";}
        if(x=="girilenkod")
        {document.getElementById(x).value="Güvenlik Kodunu Giriniz";}

        document.getElementById(x).style.background="#fff";
        document.getElementById(x).style.color="#000";
        document.getElementById(x).style.borderColor="#000";
    }
    else
    {
        document.getElementById(x).style.background="#fff";
        document.getElementById(x).style.color="#000";
        document.getElementById(x).style.borderColor="#bd652b";
    }

}
function islem()
{
    var kural,yazi;
    yazi=document.getElementById("email").value;
    kuralMail=/.+@.+\.+./;

    if(document.getElementById("ad").value=="Adınızı Giriniz")
    {    dokument.getElementById("aduyari").innerHTML="Adınızı Giriniz";    }

    if(document.getElementById("soyad").value=="Soyadınızı Giriniz")
    {   dokument.getElementById("saduyari").innerHTML="Sadınızı Giriniz";}

    if(document.getElementById("girilenkod").value=="Güvelik Kodunu Giriniz")
    {   
         dokument.getElementById("girilenkoduyari").innerHTML="Güvelik Kodunu Giriniz";
    }
    else if(dokument.getElementById("uretilenkod").value!=dokument.getElementById("girilenkod").value)
    {
        dokument.getElementById("girilenkoduyari").innerHTML="Girilen Güvelik Kodunu Yanlış";
    }

    if(document.getElementById("email").value=="Mailinizi Giriniz")
    {    dokument.getElementById("emailuyari").innerHTML="Mailinizi Giriniz";}
    else if(!kuralMail.test(yazi))
    {
        dokument.getElementById("emailuyari").innerHTML="Yanlış Girdiniz";
    }

    
}



