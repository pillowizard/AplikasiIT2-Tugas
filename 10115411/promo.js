var i = 1;
var j = 0;

  img1     = new Image();
  img1.src = "promo/1.jpg";
 
  img2     = new Image();
  img2.src = "promo/2.jpg";
 
  img3     = new Image();
  img3.src = "promo/3.jpg";

  img4     = new Image();
  img4.src = "promo/4.jpg";
 
  img5    = new Image();
  img5.src = "promo/5.jpg";
  
 
function auto(i)
{
i = 1;
j = j+i;
if (j == 6)
{j = 1};
if (j < 1)
{j = 5}
setTimeout(auto,2000);
document.pic.src = eval("img"+j+".src")

//tanggal
var bulan = new Array("january","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember");

var a = new Date();
var tanggal = a.getDay();
var bulan1  = bulan[a.getMonth()];
var tahun   = a.getFullYear();

document.getElementById("tgl").innerHTML = tanggal;
document.getElementById("tgl1").innerHTML = (bulan1+",<br>"+tahun);

//jam
var jam    = a.getHours();
var menit  = a.getMinutes();
var detik  = a.getSeconds();

document.getElementById("jam1").innerHTML = (jam+":"+menit+":"+detik);
}

function manual(n)
{
n = n+j;
if (n == 6)
{n = 0};
if (n < 0)
{n = 5}
document.pic.src = eval("img"+n+".src")
}






 
 