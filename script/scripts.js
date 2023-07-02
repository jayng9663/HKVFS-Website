var overlay = document.getElementById("overlay");
var windowHeight  = window.innerHeight;

document.documentElement.style.setProperty('--dynamic-height', windowHeight + 'px');

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

$(document).ready(function() {
  var width = $(window).width();
  if (width < 1000){
    alert('Your window width is too small, please use a wider device to view HKVFS page.');
  }
})