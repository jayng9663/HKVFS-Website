// Index

var overlay = document.getElementById("overlay");
var windowHeight  = window.innerHeight;

document.documentElement.style.setProperty('--dynamic-height', windowHeight + 'px');

window.addEventListener('load', function(){
  overlay.style.display = 'none';
})

$(document).ready(function() {
  var width = $(window).width();
  if (width < 1000){
    alert('Your window width are too small, please use a wider device to view HKVFS page.');
  }
})

// Gallery

var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

function openFullImg(name) {
    fullImgBox.style.display = "flex";
    fullImg.src = name;
    navbar.style.display = "none";
}

function closeFullImg() {
    fullImgBox.style.display = "none";
    navbar.style.display = "";
}