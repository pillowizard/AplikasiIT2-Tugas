function input(form)
{
	var angka = /^[0-9]+$/;

	//nama
	var namastr = (document.form.nama.value);
	if (namastr == null || namastr == "") {
        alert("Nama Wajib Diisi !");
        return false;
    }

    //ktp
	var ktpstr = (document.form.ktp.value);
	if (ktpstr == null || ktpstr == "") {
        alert("No KTP Wajib Diisi !");
        return false;
    }
    if(!ktpstr.match(angka))
    {
    	alert("Nomor KTP harus angka !");
    	return false;
    }
    if (ktpstr.length!=16)
    {
    	alert("No KTP harus 16 karakter");
    	return false;
    }

    //email
	var emailstr = (document.form.email.value);
	if (emailstr == null || emailstr == "") {
        alert("Email Wajib Diisi !");
        return false;
    }
	if ((emailstr.indexOf('@',0)==-1) || (emailstr.indexOf('.',0)==-1))
	{ 
		alert("Email Kurang Tepat"); 
		return false; 
	}

	//hp
	var hpstr = (document.form.hp.value);
	if (hpstr == null || hpstr == "") {
        alert("No HP Wajib Diisi !");
        return false;
    }
    if(!hpstr.match(angka))
    {
    	alert("Nomor Handphone harus angka !");
    	return false;
    }
    if (hpstr.length!=12)
    {
    	alert("No Handphone harus 12 karakter");
    	return false;
    }

    //alamat
	var alamatstr = (document.form.alamat.value);
	if (alamatstr == null || alamatstr == "") {
        alert("Alamat Wajib Diisi !");
        return false;
    }

    //checkin
	var tglinstr = (document.form.tglin.value);
	var blninstr = (document.form.blnin.value);
	var thninstr = (document.form.thnin.value);
	if (tglinstr == null || tglinstr == "" || blninstr == null || blninstr == "" || thninstr == null || thninstr == "") {
        alert("Check In Wajib Diisi !");
        return false;
    }

    //checkout
	var tgloutstr = (document.form.tglout.value);
	var blnoutstr = (document.form.blnout.value);
	var thnoutstr = (document.form.thnout.value);
	if (tgloutstr == null || tgloutstr == "" || blnoutstr == null || blnoutstr == "" || thnoutstr == null || thnoutstr == "") {
        alert("Check Out Wajib Diisi !");
        return false;
    }  

    //jml tamu
	var jml_tamustr = (document.form.jml_tamu.value);
	if (jml_tamustr == null || jml_tamustr == "") {
        alert("Jumlah Tamu Wajib Diisi !");
        return false;
    }

	//kamar
	var jeniskamar = "";
	if (form.kamar[0].checked == true)
	{
		jeniskamar = document.form.kamar[0].value;
	}
	else if (form.kamar[1].checked == true)
	{
		jeniskamar = document.form.kamar[1].value;
	}
	else if (form.kamar[2].checked == true)
	{
		jeniskamar = document.form.kamar[2].value;
	}
	if (jeniskamar == null || jeniskamar == "") {
        alert("Jenis Kamar Wajib Diisi !");
        return false;
    }

	//fasilitas
	var fasilitas_1 = "";
	var fasilitas_2 = "";
	var fasilitas_3 = "";
	var fasilitas_4 = "";
	if (form.internet.checked == true)
	{
		fasilitas_1 = "Internet";
	}
	if (form.extrabed.checked == true)
	{
		fasilitas_2 = "Extrabed";
	}
	if (form.fitness.checked == true)
	{
		fasilitas_3 = "Fitness";
	}
	if (form.laundry.checked == true)
	{
		fasilitas_4 = "Laundry";
	}	

	//pesan
	var pesanstr = (document.form.pesan.value);

	var konfirmasi = confirm("Apakah Anda Yakin Data Tersebut Sudah Benar?") 
	if(konfirmasi == true)
	{
	    document.form.znama.value = namastr;   
	    document.form.zktp.value = ktpstr;
	    document.form.zemail.value = emailstr;
	    document.form.zhp.value = hpstr;
	    document.form.zalamat.value = alamatstr;
	    document.form.zcheckin.value = tglinstr + " " + blninstr + " " + thninstr; 
		document.form.zcheckout.value = tgloutstr + " " + blnoutstr + " " + thnoutstr;
		document.form.zjml_tamu.value = jml_tamustr;
		document.form.zkamar.value = jeniskamar;
		if ((form.internet.checked == false) && (form.extrabed.checked == false) && (form.fitness.checked == false) && (form.laundry.checked == false))
			document.form.zfasilitas.value = "";
		else
			document.form.zfasilitas.value = fasilitas_1 + " " + fasilitas_2 + " " + fasilitas_3 + " " + fasilitas_4;
		document.form.zpesan.value = pesanstr;
		alert("Selamat Data Anda Berhasil Disimpan!");  
	}
}

function menu()
{
   str = "home.html";
   if (document.formmenu.pilihan[1].checked)
      str = "form.html";
   else if (document.formmenu.pilihan[2].checked)
      str = "tarif.html";
  else if (document.formmenu.pilihan[3].checked)
      str = "kamar.html";
   else if (document.formmenu.pilihan[4].checked)
      str = "fasilitas.html";
   else if (document.formmenu.pilihan[5].checked)
      str = "about.html";
  else if (document.formmenu.pilihan[6].checked)
      str = "kontak.html";
   parent.content.location.href=str;
}

var i = 1;
var num = 1;
img1 = new Image ()
img1.src = "img/pic (0).jpg"
img2 = new Image ()
img2.src = "img/pic (1).jpg"
img3 = new Image ()
img3.src = "img/pic (2).jpg"
img4 = new Image ()
img4.src = "img/pic (3).jpg"
img5 = new Image ()
img5.src = "img/pic (4).jpg"
img6 = new Image ()
img6.src = "img/pic (5).jpg"
img7 = new Image ()
img7.src = "img/pic (6).jpg"
img8 = new Image ()
img8.src = "img/pic (7).jpg"
img9 = new Image ()
img9.src = "img/pic (8).jpg"
img10 = new Image ()
img10.src = "img/pic (9).jpg"
img11 = new Image ()
img11.src = "img/pic (10).jpg"
img12 = new Image ()
img12.src = "img/pic (11).jpg"
img13 = new Image ()
img13.src = "img/pic (12).jpg"
function slideshow(i)
{
	i = 1;
	num = num+i;
	if (num == 13)
	{
		num = 1;
	}
	if (num < 1)
	{
		num = 12;
	}
    setTimeout(slideshow,2000);
    document.mypic.src = eval("img" + num + ".src")
}

function time()
{
	setTimeout(time,1000);
	var hari = new Array ("Senin","Selasa","Rabu","Kamis","Jumat","Sabtu","Minggu");
	var bulan = new Array ("Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember");
	var A = new Date();
	var hari_ini = hari[A.getDay()-1];
	var tanggal = A.getDate();
	var bulan_ini = bulan[A.getMonth()];
	var tahun = A.getFullYear();
	var jam = A.getHours();
	var menit = A.getMinutes();
	var detik  = A.getSeconds();
	document.getElementById("tanggal").innerHTML = (hari_ini + ", " + tanggal + " " + bulan_ini + " " + tahun);
	document.getElementById("jam").innerHTML = (jam + ":" + menit + ":" + detik);
}

function hitung(form)
{
	//lama
	var lama=eval(form.lama.value);
	if (lama == null || lama == "") {
        alert("Lama Tinggal Wajib Diisi !");
        return false;
    }

	//kamar
	var kamar= form.kamar.value;
	if (kamar == "Deluxe")
	{
		var tarif = 360000 * lama;
	}
	else if (kamar == "Family")
	{
		var tarif = 540000 * lama;
	}
	else if (kamar == "Standard")
	{
		var tarif = 250000 * lama;
	}
	if (kamar == null || kamar == "") {
        alert("Tipe Kamar Wajib Diisi !");
        return false;
    }

	var fasilitas_1 = 0;
	var fasilitas_2 = 0;
	var fasilitas_3 = 0;
	var fasilitas_4 = 0;
	if (form.internet.checked == true)
	{
		fasilitas_1 = 25000;
	}
	if (form.extrabed.checked == true)
	{
		fasilitas_2 = 150000;
	}
	if (form.fitness.checked == true)
	{
		fasilitas_3 = 200000;
	}
	if (form.laundry.checked == true)
	{
		fasilitas_4 = 25000;
	}
	var total = tarif + fasilitas_1 + fasilitas_2 + fasilitas_3 + fasilitas_4;
	form.hasil.value = total;
}

function reset(form)
{
	document.form.reset();
}

function pertanyaan(form)
{
	//nama
	var namastr = (document.form.nama.value);
	if (namastr == null || namastr == "") {
        alert("Nama Wajib Diisi !");
        return false;
    }

    //email
	var emailstr = (document.form.email.value);
	if (emailstr == null || emailstr == "") {
        alert("Email Wajib Diisi !");
        return false;
    }
	if ((emailstr.indexOf('@',0)==-1) || (emailstr.indexOf('.',0)==-1))
	{ 
		alert("Email Kurang Tepat"); 
		return false; 
	}

	//pesan
	var pesanstr = (document.form.pesan.value);
	if (pesanstr == null || pesanstr == "") {
        alert("Pesan Wajib Diisi !");
        return false;
    }

    var konfirmasi = confirm("Apakah Anda Yakin Ingin Mengirim Pesan Ini?") 
	if(konfirmasi == true)
	{
		alert("Selamat Pesan Anda Berhasil Terkirim!"); 
		document.form.reset();
	}
}