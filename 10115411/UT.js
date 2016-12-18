function cek()
{
var i=1;
var  tanggal1 = document.fform.tgl.value 
var  bulan1 = document.fform.bln.value;
var  tahun1 = document.fform.thn.value;
var  nama   = document.fform.nama.value;
if (tanggal1 > 31 || tanggal1 < 1 )
{alert ('Tanggal masukan Salah ! Tanggal >= 1 / Tanggal <= 31 !');
  i = 0;}

if ( bulan1 > 31 || bulan1 < 1 )
{alert ('Bulan masukan Salah !Bulan >= 1 / Bulan >= 30 !'); 
 i = 0;}
 
while(i == 1)
 {
//tanggal
var a = new Date();
var tanggal = a.getDay();
var bulan   = a.getMonth();
var tahun   = a.getFullYear();
var jam     = a.getHours();
i = i+1;
//hitung

var usia = tahun- tahun1;

if (jam > 5 && jam < 12)
{str = "Selamat Pagi"}else
if (jam =12 && jam < 4)
{str = "Selamat Siang"}else
if (jam > 3 && jam < 7)
{str = "Selamat Sore"}else
{str = "Selamat Malam"}

document.getElementById("cekk").innerHTML = (str+","+nama);
document.getElementById("cekk1").innerHTML = ("Usia Anda adalah "+usia);

document.getElementById("cekk").style.visibility ="visible";
document.getElementById("cekk1").style.visibility ="visible";
document.getElementById("h1").style.visibility ="visible";

  }

}
function hidden1()
{
	document.getElementById("cekk").style.visibility ="hidden";
	document.getElementById("cekk1").style.visibility ="hidden";
	document.getElementById("h1").style.visibility ="hidden";
}