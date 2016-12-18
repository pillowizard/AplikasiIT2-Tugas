function pilihmenu()
{
str = 'home.html';
   if (fform.menu[0].checked)
    str = 'home.html'; else
  if (fform.menu[1].checked)
    str = 'isi.html'; else
  if (fform.menu[2].checked)
    str = 'internasional.html';else
  if (fform.menu[3].checked)
    str = 'hotel.html';else
  if (fform.menu[4].checked)
    str = 'promo.html';else
  if (fform.menu[5].checked)
    str = 'ketentuan.html';
  if (fform.menu[6].checked)
    str = 'kalkulator.html';
  if (fform.menu[7].checked)
    str = 'UT.html';
  if (fform.menu[8].checked)
    str = 'jadwal.html';
  if (fform.menu[9].checked)
    str = 'galery.html';
  if (fform.menu[10].checked)
    str = 'belajar.html';
  
   parent.kanan.location.href = str;
}

function home()
{
  parent.kanan.location.href = "home.html";	
}