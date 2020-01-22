
function myLoop1(){
  var start = document.getElementById("start").value;
  
  var end = document.getElementById("end").value;
  
  for(var i=start; i<=end; i++){
    document.write('<p>'+i);
  }
}
