var i = 1;
var j = 0;

  img1     = new Image();
  img1.src = "hotel/1h.jpg";
 
  img2     = new Image();
  img2.src = "hotel/2h.jpg";
 
  img3     = new Image();
  img3.src = "hotel/3h.jpg";

  img4     = new Image();
  img4.src = "hotel/4h.jpg";
 
  img5    = new Image();
  img5.src = "hotel/5h.jpg";
  
  img6    = new Image();
  img6.src = "hotel/6h.jpg";
 
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

}

var a = 1;

function uji()
{
	var asal1 = document.fform.asal1.value;
	if (isNaN(asal1))
       {
	      var a1 = 1;
       } else {
          var a1 = 0;
          document.fform.asal1.value ="Tulis dengan Huruf ! ";	
       }
	
	var tanggal = document.fform.tanggal.value;
	var bulan = document.fform.bulan.value;
	var tahun = document.fform.tahun.value;
	var tanggal1 = document.fform.tanggal1.value;
	var bulan1 = document.fform.bulan1.value;
	var tahun1 = document.fform.tahun1.value;
	
	var orang="";
	if (fform.orang[0].checked)
	{ orang ="1 orang"
     } else  if(fform.orang[1].checked) {
	  orang ="2 orang";
	 } else  if(fform.orang[2].checked) {
	  orang ="3 orang";
	 } else  if(fform.orang[3].checked) {
	  orang ="4 orang";
	 }
	 	 
	 if((asal1 == "" ) || ( tanggal == "" ) || ( bulan == "")  || ( tahun == "") ||
	   ( tanggal1 == "" ) || ( bulan1 == "")  || ( tahun1 == "") || (orang == "")|| (a1 == 0))
	 {
	    alert('Semua form harus diisi dengan benar!');
         a = 0;
	 } else { 
		a = 1;
	 } a = a+1;
	 
	 	 if (asal1 == "" || a1 == 0)
	 {
		 document.getElementById("asal1").setAttribute("class","id2");
	 }	else {
		 document.getElementById("asal1").setAttribute("class","id3");		 
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
      	      if (tanggal1 == "")
	 {
		 document.getElementById("tanggal1").setAttribute("class","id2");
	 }	else {
		 document.getElementById("tanggal1").setAttribute("class","id3");		 
	 }	 
	      if (bulan1 == "")
	 {
		 document.getElementById("bulan1").setAttribute("class","id2");
	 }	else {
		 document.getElementById("bulan1").setAttribute("class","id3");		 
	 }	 
	      if (tahun1 == "")
	 {
		 document.getElementById("tahun1").setAttribute("class","id2");
	 }	else {
		 document.getElementById("tahun1").setAttribute("class","id3");		 
	 }	 	 

	 
	 if (a == 2)
	 {
		var r = confirm("Anda yakin data sudah benar ?");
  
        if(r == true)
     {
	 //hasil
	 document.getElementById("judul").innerHTML   =("<pre><h1> Pemesanan Hotel</h1>");
	 document.getElementById("1").innerHTML       =('<pre>Hotel di Daerah   : '+asal1);
	 document.getElementById("2").innerHTML       =('<pre>Tanggal Check-In  : '+tanggal+"-"+bulan+"-"+tahun);
	 document.getElementById("3").innerHTML       =('<pre>Tanggal Check-Out : '+tanggal1+"-"+bulan1+"-"+tahun1);
	 document.getElementById("4").innerHTML       =('<pre>Kamar untuk       : '+orang);
	 
	 alert('Info Tiket akan dikirim melalui email !\n info,Cek dibawah !')
	 }
	 } 
}

function res()
{
		 document.getElementById("asal1").setAttribute("class","asal");	
		 document.getElementById("tanggal").setAttribute("class","asal");		
		 document.getElementById("bulan").setAttribute("class","asal");	
		 document.getElementById("tahun").setAttribute("class","asal");	
		 document.getElementById("tanggal1").setAttribute("class","asal");		
		 document.getElementById("bulan1").setAttribute("class","asal");	
		 document.getElementById("tahun1").setAttribute("class","asal");
		
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
     if((tahun > 2016) || (tahun < 2016))
	 {
		alert('Tahun ini 2016')
		document.fform.tahun.value = 2016;	
	}
}

function angka1()
{
	var tanggal1 = document.fform.tanggal1.value;	
	
	if(tanggal1 < 1)
	{
		alert('Tanggal min 1')
		document.fform.tanggal1.value = 1;
	} else if(tanggal1 > 31) {
		alert('Tanggal max 31')
		document.fform.tanggal1.value = 31;
		
	}

}

function bul1()
{
	var tahun1 = document.fform.tahun1.value;
		
     if((tahun1 > 2016) || (tahun1 < 2016))
	 {
		alert('Tahun ini 2016')
		document.fform.tahun1.value = 2016;	
	}
	
}






 
 