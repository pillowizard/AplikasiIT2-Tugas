var i =0;
var n =1;

function tampil(n)
{
n = 1;
i = i+n;

if (i == 5)
{i =4}
	
if (i == 1)
{document.getElementById("id1").style.visibility = "visible";}
if (i == 2)
{document.getElementById("id2").style.visibility = "visible";}
if (i == 3)
{document.getElementById("id3").style.visibility = "visible";}
if (i == 4)
{document.getElementById("id4").style.visibility = "visible";}
}

function hiddenall()
{
document.getElementById("id1").style.visibility = "hidden";
document.getElementById("id2").style.visibility = "hidden";
document.getElementById("id3").style.visibility = "hidden";
document.getElementById("id4").style.visibility = "hidden";
}

function hidden1(n)
{
n =1;
i = i-n;

if (i < 0)
{i = 0;}
if (i == 0)
{document.getElementById("id1").style.visibility = "hidden";}
if (i == 1)
{document.getElementById("id2").style.visibility = "hidden";}
if (i == 2)
{document.getElementById("id3").style.visibility = "hidden";}
if (i == 3)
{document.getElementById("id4").style.visibility = "hidden";}

}