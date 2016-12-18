var i = 1;
var j = 0;

  img1     = new Image();
  img1.src = "image/1b.jpg";
 
  img2     = new Image();
  img2.src = "image/2b.jpg";
 
  img3     = new Image();
  img3.src = "image/3b.jpg";

  img4     = new Image();
  img4.src = "image/4b.jpg";
 
  img5    = new Image();
  img5.src = "image/5b.jpg";
  
  
  img6     = new Image();
  img6.src = "image/6b.jpg";
 
  img7     = new Image();
  img7.src = "image/7b.jpg";
 
  img8     = new Image();
  img8.src = "image/8b.jpg";

  img9     = new Image();
  img9.src = "image/9b.jpg";
 
  img10    = new Image();
  img10.src = "image/10b.jpg";
  
  
  img11     = new Image();
  img11.src = "image/11b.jpg";
 
  img12     = new Image();
  img12.src = "image/12b.jpg";
 
  img13     = new Image();
  img13.src = "image/13b.jpg";

  img14     = new Image();
  img14.src = "image/14b.jpg";
 
  img15    = new Image();
  img15.src = "image/15b.jpg";
 
function auto(i)
{
i = 1;
j = j+i;
if (j == 16)
{j = 1};
if (j < 1)
{j = 15}
setTimeout(auto,2000);
document.pic.src = eval("img"+j+".src")

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
	if((tahun < 2016) || (tahun >2016))
	{
		alert('Tanggal ini 2016 !')
		document.fform.tahun.value = 2016;
		
	}
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
	var tujuan = document.fform.tujuan.value;
	   	if (isNaN(tujuan))
       {
	      var a2 = 1;
       } else {
          var a2 = 0;
          document.fform.tujuan.value ="Tulis dengan Huruf ! ";	
       }
	var tanggal = document.fform.tanggal.value;
	var bulan = document.fform.bulan.value;
	var tahun = document.fform.tahun.value;
	var tuj ="";
	if (fform.tuj[0].checked)
	{ tuj ="Berangkat";
     } else if (fform.tuj[1].checked){
	  tuj ="Pulang-Pergi";
	 }
	 
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
	 
	 
	 if (asal1 == "" || a1 == 0)
	 {
		 document.getElementById("asal1").setAttribute("class","id2");
	 }	else {
		 document.getElementById("asal1").setAttribute("class","id3");		 
	 }	
	 
	      if (tujuan == "" || a2 == 0)
	 {
		 document.getElementById("tujuan").setAttribute("class","id2");
	 }	else {
		 document.getElementById("tujuan").setAttribute("class","id3");		 
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
	 
	 
	 if((asal1 == "" ) || ( tujuan == "") || ( tanggal == "" ) || ( bulan == "")  || ( tahun == "") || (tuj == "")
	     || (orang == "") || (a1 == 0) || (a2 == 0) )
	 {
	    alert('Semua form harus diisi dengan benar !');
         a = 0;
	 } else {
		 a = 1; 
	 }
	 a = a+1;
	 if (a == 2)
	 {
		 var r = confirm("Anda yakin data sudah benar ?");
  
        if(r == true)
     {
     //hasil
	 document.getElementById("judul").innerHTML =("<pre>PESANAN ANDA");
	 document.getElementById("1").innerHTML =('<pre>Asal Keberangkatan    : '+asal1);
	 document.getElementById("2").innerHTML =('<pre>Tujuan Keberangkatan  : '+tujuan);
	 document.getElementById("3").innerHTML =('<pre>Tanggal Keberangkatan : '+tanggal+"-"+bulan+"-"+tahun);
	 document.getElementById("4").innerHTML =('<pre>Paket Pesanan         : '+tuj);
	 document.getElementById("5").innerHTML =('<pre>Jumlah Tiket          : '+orang);
	 }
	 alert('Info Tiket akan dikirim melalui email !\n info,Cek dibawah !')
	 }
}

function res()
{
		 document.getElementById("asal1").setAttribute("class","asal");	
		 document.getElementById("tujuan").setAttribute("class","asal");	
		 document.getElementById("tanggal").setAttribute("class","asal");	
		 document.getElementById("bulan").setAttribute("class","asal");	
		 document.getElementById("tahun").setAttribute("class","asal");	
}







 
 