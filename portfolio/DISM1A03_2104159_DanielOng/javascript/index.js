//Execute a function whenever mouse moves.
document.addEventListener("mousemove", parallax);

//When mouse moves, move certain elements by a factor of the current mouse coordinates.
function parallax(e){
  document.querySelectorAll(".object").forEach(function(move){

    var moving_value = move.getAttribute("data-value");
    var x = (e.clientX * moving_value) / 250;
    var y = (e.clientY * moving_value) / 250;

    move.style.transform = "translateX(" + x + "px) translateY(" + y + "px)";
  });
}


//Display time.
function display_ct5() {
  var x = new Date()
  var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
  var x1 = x.getHours( )+ ":" +  x.getMinutes() + ":" +  x.getSeconds() + " " + ampm;
  document.getElementById('ct5').innerHTML = x1;
  display_c5();
 }
 function display_c5(){
  var refresh=1000; // Refresh rate in milli seconds
  mytime=setTimeout('display_ct5()',refresh)
}
display_c5()