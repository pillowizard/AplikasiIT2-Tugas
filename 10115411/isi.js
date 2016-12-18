function data()
{	 
var i = 1;
var j = 1;
var p = 1;

var namal = document.fform.namal.value;
var namap = document.fform.namap.value;

if (isNaN(namal))
{
	var z = 1;
} else {
    var z = 0;
    document.fform.namal.value ="Tulis dengan Huruf ! ";	
}

if (isNaN(namap))
{
	var z1 = 1;
} else {
    var z1 = 0;
    document.fform.namap.value ="Tulis dengan Huruf ! ";	
}

var jenis = "";
if (fform.jenis[0].checked)
{
	jenis = "Laki-laki";
} else if (fform.jenis[1].checked){
    jenis ="Perempuan";  
}
var jenis1 = jenis;

var hoby1 =".";
var hoby2 =".";
var hoby3 =".";
var hoby4 =".";

if (fform.hoby1.checked)
{ hoby1 = "hoby1"}
if (fform.hoby1.checked)
{ hoby2 = "hoby1"}
if (fform.hoby1.checked)
{ hoby3 = "hoby1"}
if (fform.hoby1.checked)
{ hoby4 = "hoby1"}
var hoby  =hoby1+""+hoby2+""+hoby3+""+hoby4;

var kotal = document.fform.kotal.value;

if (isNaN(kotal))
{
	var z3 = 1;
} else {
    var z3 = 0;
    document.fform.kotal.value ="Tulis Dengan Huruf ! ";	
}

var kotat = document.fform.kotat.value; 

if (isNaN(kotat))
{
	var z4 = 1;
} else {
    var z4 = 0;
    document.fform.kotat.value ="Tulis Dengan Huruf ! ";	
}

var  tanggal = document.fform.tanggal.value 
var  bulan = document.fform.bulan.value;
var  tahun = document.fform.tahun.value;
 
var email = document.fform.email.value
var phone = document.fform.phone.value;

if(isNaN(phone))
{
	document.fform.phone.value = "Masukan Number Dengan Benar !";
    var u = 1;	
} else {
	var u = 0;
   
}
var pass = document.fform.pass.value; 
var pass1 = document.fform.pass1.value 
var address = document.fform.address.value;
if (isNaN(address))
{
	var z5 = 1;
} else {
    var z5 = 0;
    document.fform.address.value ="Tulis Dengan Huruf juga! ";	
}

var stat = document.fform.stat.value 
var ket = document.fform.ket.value;

var x =document.fform.email.value;
     var at  = x.indexOf("@");
	 var dot = x.lastIndexOf(".");
	 if (at<1 || dot<at+2 || dot+2>=x.length)
	 {
		 alert('Maukan email salah !');
         i = 0;		 
	 } i = i+1;

//validasi form
if (  (namal == "") || (namap == "") || (jenis == "")   || (hoby == "")  || 
      (kotal == "") || (kotat == "") || (tanggal == "") || (bulan == "") ||
	  (tahun == "") || (email == "") || (phone == "")   || (pass == "")  ||
	  (pass1 == "") || (address == "") || (stat == "") || (u == 1) || (z == 0) 
	  || (z1 == 0)  ||  (z3 == 0)  || (z4 == 0)  || (z5 == 0)
   ){
	   alert("Semua form harus disi dengan benar!\n Komentar<optional>");
	   j = 0;
    }  j = j+1;
	

	
		 if (namal == "" || z == 0)
	 {
		 document.getElementById("namal").setAttribute("class","id2");
	 }	else {
		 document.getElementById("namal").setAttribute("class","id3");		 
	 }	
	 
	      if (namap == "" || z1 == 0)
	 {
		 document.getElementById("namap").setAttribute("class","id2");
	 }	else {
		 document.getElementById("namap").setAttribute("class","id3");		 
	 }	  
      if (kotal == "" || z3 == 0)
	 {
		 document.getElementById("kotal").setAttribute("class","id2");
	 }	else {
		 document.getElementById("kotal").setAttribute("class","id3");		 
	 }	 
	      if (kotat == "" || z4 == 0)
	 {
		 document.getElementById("kotat").setAttribute("class","id2");
	 }	else {
		 document.getElementById("kotat").setAttribute("class","id3");		 
	 }	 
	      if (tanggal == "")
	 {
		 document.getElementById("tanggal").setAttribute("class","id2");
	 }	else {
		 document.getElementById("tanggal").setAttribute("class","id3");		 
	 }	 
     	   if (bulan == "")
	 {
		 document.getElementById("bulan").setAttribute("class","id2");
	 }	else {
		 document.getElementById("bulan").setAttribute("class","id3");		 
	 }	 
	      if (tahun == "")
	 {
		 document.getElementById("tahun").setAttribute("class","id2");
	 }	else {
		 document.getElementById("tahun").setAttribute("class","id3");		 
	 }	 
	      if (email == "" || i == 1)
	 {
		 document.getElementById("email").setAttribute("class","id2");
	 }	else {
		 document.getElementById("email").setAttribute("class","id3");		 
	 }	

	      if (phone == "" || u == 1)
	 {
		 document.getElementById("phone").setAttribute("class","id2");
	 }	else {
		 document.getElementById("phone").setAttribute("class","id3");		 
	 }	 
	      if (pass == "")
	 {
		 document.getElementById("pass").setAttribute("class","id2");
	 }	else {
		 document.getElementById("pass").setAttribute("class","id3");		 
	 }	 
	      if ((pass1 == "")  || (pass1 != pass))	
	 {
		 document.getElementById("pass1").setAttribute("class","id2");
	 }	else {
		 document.getElementById("pass1").setAttribute("class","id3");		 
	 }	 
	      if (address == "" || z5 == 0)
	 {
		 document.getElementById("address").setAttribute("class","id2");
	 }	else {
		 document.getElementById("address").setAttribute("class","id3");		 
	 }	  	
     	  if (stat == "")
	 {
		 document.getElementById("stat").setAttribute("class","id2");
	 }	else {
		 document.getElementById("stat").setAttribute("class","id3");		 
	 }	
     	 if (ket == "")
	 {
		 document.getElementById("ket").setAttribute("class","id2");
	 }	else {
		 document.getElementById("ket").setAttribute("class","id3");		 
	 }		 
	 
	 
	
//validasi pass
if (pass != pass1)
{
	alert("Password do not match ! ")
	p = 0;
} p = p+1;

//tampil data
if (i ==2 && j ==2 && p ==2 )
 {
	var r = confirm("Anda yakin data sudah benar ?");
  
  if(r == true)
  {
  document.fform.znamal.value = namal;
  document.fform.znamap.value = namap;
  document.fform.zjenis.value=jenis;
  document.fform.zhoby.value = hoby;
  document.fform.ztanggal.value = (tanggal+"-"+bulan+"-"+tahun);
  document.fform.zkotal.value = kotal;
  document.fform.zkotat.value = kotat;
  document.fform.zemail.value = email;
  document.fform.zphone.value = phone;
  document.fform.zpass.value = pass;
  document.fform.zaddress.value = address;
  document.fform.zstat.value = stat;
  document.fform.zket.value = ket;
  alert("Profil Anda Telah Selesai \n Selamat Datang !"+namap)
  }
 } 
}
function foc()
{
alert("Data ini tidak bisa diubah !\n Dan tidak akan merubah Apapun !");
}

function res()
{
		 document.getElementById("namal").setAttribute("class","asal");	
		 document.getElementById("namap").setAttribute("class","asal");		
		 document.getElementById("tanggal").setAttribute("class","asal");	
		 document.getElementById("bulan").setAttribute("class","asal");	
		 document.getElementById("tahun").setAttribute("class","asal");		
		 document.getElementById("kotal").setAttribute("class","asal");	
		 document.getElementById("kotat").setAttribute("class","asal");	
		 document.getElementById("email").setAttribute("class","asal");	
		 document.getElementById("namap").setAttribute("class","asal");		
		 document.getElementById("phone").setAttribute("class","asal");	
		 document.getElementById("pass").setAttribute("class","asal");	
		 document.getElementById("pass1").setAttribute("class","asal");		
		 document.getElementById("address").setAttribute("class","asal");	
		 document.getElementById("stat").setAttribute("class","asal");
		 document.getElementById("ket").setAttribute("class","asal");
}

function angka()
{
	var tanggal = document.fform.tanggal.value;	
	
	if(tanggal < 1)
	{
		alert('Tanggal min 1')
		document.fform.tanggal.value = 1;
	} else if(tanggal > 31) {
		alert('Tanggal max 31')
		document.fform.tanggal.value = 31;
		
	}

}

function bul()
{
		var tahun = document.fform.tahun.value;
	if(tahun < 1900)
	{
		alert('Tanggal min :1900 tahun \nTua banget !')
		document.fform.tahun.value = 1900;
	} else if(tahun > 2016) {
		alert('Tahun max : 2016')
		document.fform.tahun.value = 2016;
		
	}
}
