imgw=325;
imgh=200;
maxco=17;
maxli=17;
px=2500;
py=1500;
typ=2;
function mv(x,y){
if ((px+x)>((maxco-3)*imgw)){x=(maxco-3)*imgw-px}if ((px+x)<0){x=-px;}
if ((py+y)>((maxli-3)*imgh)){y=(maxli-3)*imgh-py}if ((py+y)<0){y=-py;}
px+=x;py+=y;
li=Math.floor(py/imgh)+1;co=Math.floor(px/imgw)+1;
pxx=-px%imgw;pyy=-py%imgh;
document.getElementById("i11").src="harta/"+typ+"/map"+li+"-"+(co+0)+".jpg";document.getElementById("i11").style.left=pxx+imgw*0;document.getElementById("i11").style.top=pyy+imgh*0;
document.getElementById("i12").src="harta/"+typ+"/map"+li+"-"+(co+1)+".jpg";document.getElementById("i12").style.left=pxx+imgw*1;document.getElementById("i12").style.top=pyy+imgh*0;
document.getElementById("i13").src="harta/"+typ+"/map"+li+"-"+(co+2)+".jpg";document.getElementById("i13").style.left=pxx+imgw*2;document.getElementById("i13").style.top=pyy+imgh*0;
document.getElementById("i14").src="harta/"+typ+"/map"+li+"-"+(co+3)+".jpg";document.getElementById("i14").style.left=pxx+imgw*3;document.getElementById("i14").style.top=pyy+imgh*0;
document.getElementById("i21").src="harta/"+typ+"/map"+(li+1)+"-"+(co+0)+".jpg";document.getElementById("i21").style.left=pxx+imgw*0;document.getElementById("i21").style.top=pyy+imgh*1;
document.getElementById("i22").src="harta/"+typ+"/map"+(li+1)+"-"+(co+1)+".jpg";document.getElementById("i22").style.left=pxx+imgw*1;document.getElementById("i22").style.top=pyy+imgh*1;
document.getElementById("i23").src="harta/"+typ+"/map"+(li+1)+"-"+(co+2)+".jpg";document.getElementById("i23").style.left=pxx+imgw*2;document.getElementById("i23").style.top=pyy+imgh*1;
document.getElementById("i24").src="harta/"+typ+"/map"+(li+1)+"-"+(co+3)+".jpg";document.getElementById("i24").style.left=pxx+imgw*3;document.getElementById("i24").style.top=pyy+imgh*1;
document.getElementById("i31").src="harta/"+typ+"/map"+(li+2)+"-"+(co+0)+".jpg";document.getElementById("i31").style.left=pxx+imgw*0;document.getElementById("i31").style.top=pyy+imgh*2;
document.getElementById("i32").src="harta/"+typ+"/map"+(li+2)+"-"+(co+1)+".jpg";document.getElementById("i32").style.left=pxx+imgw*1;document.getElementById("i32").style.top=pyy+imgh*2;
document.getElementById("i33").src="harta/"+typ+"/map"+(li+2)+"-"+(co+2)+".jpg";document.getElementById("i33").style.left=pxx+imgw*2;document.getElementById("i33").style.top=pyy+imgh*2;
document.getElementById("i34").src="harta/"+typ+"/map"+(li+2)+"-"+(co+3)+".jpg";document.getElementById("i34").style.left=pxx+imgw*3;document.getElementById("i34").style.top=pyy+imgh*2;
document.getElementById("i41").src="harta/"+typ+"/map"+(li+3)+"-"+(co+0)+".jpg";document.getElementById("i41").style.left=pxx+imgw*0;document.getElementById("i41").style.top=pyy+imgh*3;
document.getElementById("i42").src="harta/"+typ+"/map"+(li+3)+"-"+(co+1)+".jpg";document.getElementById("i42").style.left=pxx+imgw*1;document.getElementById("i42").style.top=pyy+imgh*3;
document.getElementById("i43").src="harta/"+typ+"/map"+(li+3)+"-"+(co+2)+".jpg";document.getElementById("i43").style.left=pxx+imgw*2;document.getElementById("i43").style.top=pyy+imgh*3;
document.getElementById("i44").src="harta/"+typ+"/map"+(li+3)+"-"+(co+3)+".jpg";document.getElementById("i44").style.left=pxx+imgw*3;document.getElementById("i44").style.top=pyy+imgh*3;
document.getElementById("cerc").style.left=parseInt(document.getElementById("cerc").style.left)-x;
document.getElementById("cerc").style.top=parseInt(document.getElementById("cerc").style.top)-y;
if (document.getElementById("lin").style.display==""){lk();}
}

if  (document.getElementById){
(function(){
if (window.opera){
document.write("<input type='hidden' id='Q' value=' '>");
}
var n = 500;
var dragok = false;
var y,x,d,dy,dx;
var uxx=0,uyy=0;
function mw(e){
if (!e) e = window.event;
 if (dragok){
  prx=dx + e.clientX - x;
  pry=dy + e.clientY - y;
  d.style.left= prx+"px";
  d.style.top=pry+"px";
  mv(-(prx-uxx),-(pry-uyy));
  uxx=dx + e.clientX - x;
  uyy=dy + e.clientY - y;
  return false;
 }
}
function down(e){
if (!e) e = window.event;
var temp = (typeof e.target != "undefined")?e.target:e.srcElement;
if (temp.tagName != "HTML"|"BODY" && temp.className != "drg"){
 temp = (typeof temp.parentNode != "undefined")?temp.parentNode:temp.parentElement;
 }
if (temp.className == "drg"){
 if (window.opera){
  document.getElementById("Q").focus();
 }
 dragok = true;
 temp.style.zIndex = n++;
 d = temp;
 dx = parseInt(temp.style.left+0);
 dy = parseInt(temp.style.top+0);
 x = e.clientX;
 y = e.clientY;
 document.onmousemove = mw;
 return false;
 }
}
function up(){
dragok = false;
document.onmousemove = null;
document.getElementById("drg").style.left=0;
document.getElementById("drg").style.top=0;
document.getElementById("drg").style.zIndex=0;
uxx=0;
uyy=0;
}
document.onmousedown = down;
document.onmouseup = up;
})();
}

function htyp(n){
typ=n;
for (var i=1;i<=3;i++){document.getElementById("typ"+i).className="hb0";}
document.getElementById("typ"+n).className="hb1";
mv(0,0);
}

movr="#85B1E9",mout="#FFFFFF";
function st(){
var i=1;
n=0;p=0;
b=document.getElementById("str").value;
b=b.toLowerCase();b=b.replace(/ã/g, "a");b=b.replace(/â/g, "a");b=b.replace(/î/g, "i");b=b.replace(/º/g, "s");b=b.replace(/þ/g, "t");
while(document.getElementById("o"+String(i))!=null)
 {d="o"+String(i);c=document.getElementById(d).innerHTML;
 c=c.toLowerCase();c=c.replace(/ã/g, "a");c=c.replace(/â/g, "a");c=c.replace(/î/g, "i");c=c.replace(/º/g, "s");c=c.replace(/þ/g, "t");
 document.getElementById(d).style.display="none";
 if (c.indexOf(b)>=0){n=n+1;
  if (p==0){p=i;}
  if (n<=10){document.getElementById(d).style.display="";}}
 i++;}
if (n==0){document.getElementById("dst").style.display="none";}else
 {document.getElementById("dst").style.display="";}
if(document.getElementById("str").value==""){document.getElementById("dst").style.display="none";}
}

var w;
function su(c){
pt=c.indexOf(".");
x=Number(c.substr(0,pt));
y=Number(c.substr(pt+1));
cerc(x,y);
document.getElementById("dst").style.display="none";
document.getElementById("str").value="";
}

function ovr1(t){
var i=1;
while(document.getElementById("o"+String(i))!=null){document.getElementById("o"+String(i)).style.background=mout;i++;}
t.style.background=movr;}
function ovr(t){
ovr1(t);
ms=1;}
function out(t){
t.style.background=mout;
ms=0;}

function cerc(x,y){
px=x-Math.floor(imgw*3/2);
py=y-Math.floor(imgh*3/2);
mv(0,0);
x=x-px-25;
y=y-py-25;
document.getElementById("cerc").style.left=x;
document.getElementById("cerc").style.top=y;
document.getElementById("cerc").style.display="";
}

function gr(){
if (document.getElementById("grd").style.display=="none")
 {document.getElementById("grd").style.display="";document.getElementById("gridbtn").className="hb1";}
else{document.getElementById("grd").style.display="none";document.getElementById("gridbtn").className="hb0";}
}

function lk(){
if (document.getElementById("lin").style.display=="none")
 {document.getElementById("lin").style.display="";document.getElementById("linkbtn").className="hb1";
x=px+Math.floor(imgw*3/2);
y=py+Math.floor(imgh*3/2);
document.getElementById("link").value="http://www.alba-iulia.info/harta.asp?c="+x+"."+y+"";}
else{document.getElementById("lin").style.display="none";document.getElementById("linkbtn").className="hb0";}
}

function init(){
document.getElementById("dst").style.display="none";
document.getElementById("str").value="";
mv(0,0);
htyp(2);
if(navigator.userAgent.search(/msie/i)==-1){document.getElementById("hhd").src="harta/hhd.png";document.getElementById("cerc").src="harta/cerc.png";}
}