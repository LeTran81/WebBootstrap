

var slideIndex = [3,3];
/* Class the members of each slideshow group with different CSS classes */
var slideId = ["mySlides1", "mySlides2"]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n > x.length-3) {slideIndex[no] = 4}
  if (n < 4) {slideIndex[no] = x.length-3}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  x[slideIndex[no]-2].style.display = "block";
  x[slideIndex[no]-3].style.display = "block";
  x[slideIndex[no]-4].style.display = "block";
  x[slideIndex[no]-1].style.display = "block";
  x[slideIndex[no]+1].style.display = "block";
  x[slideIndex[no]+2].style.display = "block";
}