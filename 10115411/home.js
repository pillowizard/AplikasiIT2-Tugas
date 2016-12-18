var i = 1;
var j = 0;

  img1     = new Image();
  img1.src = "home/1b.jpg";
 
  img2     = new Image();
  img2.src = "home/2b.jpg";
 
  img3     = new Image();
  img3.src = "home/3b.jpg";

  img4     = new Image();
  img4.src = "home/4b.jpg";
 
  img5    = new Image();
  img5.src = "home/5b.jpg";
  
    img5    = new Image();
  img5.src = "home/6b.jpg";
 
function auto(i)
{
i = 1;
j = j+i;
if (j == 7)
{j = 1};
if (j < 1)
{j = 6}
setTimeout(auto,2000);
document.pic.src = eval("img"+j+".src")

//tanggal
var bulan = new Array("january","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember");

var a = new Date();
var tanggal = a.getDate();
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






 
 