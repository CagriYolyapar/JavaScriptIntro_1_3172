function ElementIcerigiDegistir() {
    //document.getElementById()
    //document.getElementsByTagName()
    //document.getElementsByClassName()
    
    let x = document.getElementById("paragraf"); //bu ifade ilgili dökümandaki id'si paragraf olan tag'i yakala ve x'e at demektir...

    //alert(x.innerHTML);

    x.innerHTML = "Bu icerik JavaScript tarafından degiştirilmiştir"; //bu ifade x'in yani p elementinin icerisindeki HTMLString'e bir baska deger atamaktır...

    x.style.color = "red";

    
}

function Sil() {

    //yeni yöntemle birlikte JavaScript, id'leri yakalamak icin artık getElementById fonksiyonunu zorunlu kılmaz...Direkt id degerini verirseniz de ilgili elementler yakalanabilirler...Bu yakalanan taglerin üzerinden style'a erişmek ilgili element'in css'ine erişmek demektir...Belirli CSS kodlarını JavaScript üzerinden de verebilirsiniz...
    paragraf.style.display = "none";
}


function ClasslariYakala() {
    let y = document.getElementsByClassName("paragraflar");

    for (var i = 0; i < y.length; i++) {
        y[i].style.color = "red";
    }

}

