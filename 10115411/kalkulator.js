function tambah()
{ 
 var bil1 = parseFloat(document.fform.bil1.value);
  var bil2 = parseFloat(document.fform.bil2.value);
 
  if (isNaN(bil1))
 {bil1 = 0}
 if (isNaN(bil2))
 {bil2 = 0}
 var hasil = bil1 + bil2;

 document.fform.zhasil.value = hasil;
}



function kurang()
{ 
 var bil1 = parseFloat(document.fform.bil1.value);
  var bil2 = parseFloat(document.fform.bil2.value);
 
  if (isNaN(bil1))
 {bil1 = 0}
 if (isNaN(bil2))
 {bil2 = 0}
 var hasil = bil1 - bil2;
 document.fform.zhasil.value = hasil;
}



function kali()
{ 
 var bil1 = parseFloat(document.fform.bil1.value);
 var bil2 = parseFloat(document.fform.bil2.value);
 
  if (isNaN(bil1))
 {bil1 = 0}
 if (isNaN(bil2))
 {bil2 = 0}

 var hasil = bil1 * bil2;

 document.fform.zhasil.value = hasil;
}



function bagi()
{ 
 var bil1 = parseFloat(document.fform.bil1.value);
  var bil2 = parseFloat(document.fform.bil2.value);
 
  if (isNaN(bil1))
 {bil1 = 0}
 if (isNaN(bil2))
 {bil2 = 0}

 var hasil = bil1 / bil2;

 document.fform.zhasil.value = hasil;
}