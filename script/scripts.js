var overlay = document.getElementById("overlay");

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

$(document).ready(function() {
  var width = $(window).width();
  if (width < 1000){
    alert('Your screen width is too small, please make the browser screen wider.');
  }
});