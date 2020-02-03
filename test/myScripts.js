function getspace(){
  var x1 = document.getElementById("x1").value;
  var x2 = document.getElementById("x2").value;
  var y1 = document.getElementById("y1").value;
  var y2 = document.getElementById("y2").value;
  var xdis = (x2-x1);
  var ydis = (y2-y1);
  var xresult = Math.pow(xdis, 2);
  var yresult = Math.pow(ydis, 2);
  var result = Math.sqrt(xresult+yresult);
  
x1=Number(x1);
x2=Number(x2);
y1=Number(y1);
y2=Number(y2);
  
  document.getElementById("ans").innerHTML=result;
}
