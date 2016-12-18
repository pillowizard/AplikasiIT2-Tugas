var i = 1;
var n = 1;
var n1 = 0;
var n2 = 0;
var n3 = 0;
var n4 = 0;
var n5 = 0;

//naon eta tehh....
 img1 = new Image();
 img1.src = "a.jpg"; 
  img2 = new Image();
  img2.src = "b.jpg"; 
 img3 = new Image();
 img3.src = "c.jpg";
  img4 = new Image();
  img4.src = "d.jpg"; 
 img5 = new Image();
 img5.src = "f.jpg"; 
  img6 = new Image();
  img6.src = "g.jpg"; 
 img7 = new Image();
 img7.src = "h.jpg"; 
  img8 = new Image();
  img8.src = "i.jpg";
 img9 = new Image();
 img9.src = "j.jpg"; 
  img10 = new Image();
  img10.src = "k.jpg"; 
 img11 = new Image();
 img11.src = "l.jpg"; 
  img12 = new Image();
  img12.src = "m.jpg";
 img13 = new Image();
 img13.src = "n.jpg";
  img14 = new Image();
  img14.src = "o.jpg";
 img15 = new Image();
 img15.src = "p.jpg";
 
function lihat(i)
{
if (i == 2)
{document.pic.src = document.pic2.src;}
if (i == 3)
{document.pic.src = document.pic3.src;}
if (i == 4)
{document.pic.src = document.pic4.src;}
if (i == 5)
{document.pic.src = document.pic5.src;}
if (i == 6)
{document.pic.src = document.pic6.src;}
if (i == 7)
{document.pic.src = document.pic7.src;}

}

function geser(num)
{
n = n + num;
if (n == 11)
{n = 1}
if (n == 0)
{n = 10}

n1 = n+1;
n2 = n+2;
n3 = n+3;
n4 = n+4;
n5 = n+5;

document.pic2.src = eval("img"+n+".src");
document.pic3.src = eval("img"+n1+".src");
document.pic4.src = eval("img"+n2+".src");
document.pic5.src = eval("img"+n3+".src");
document.pic6.src = eval("img"+n4+".src");
document.pic7.src = eval("img"+n5+".src");
}
