  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
  navbarLinks.classList.toggle('active')
})

// Read more button
var i = 0;
function read() {
  if(!i) {
    document.getElementById("more").style.display = "inline";
    document.getElementById("dots").style.display = "none";
    document.getElementById("read").innerHTML = "Read Less";
    i = 1;
  }
  else {
    document.getElementById("more").style.display = "none";
    document.getElementById("dots").style.display = "inline";
    document.getElementById("read").innerHTML = "Read More ";
    i = 0;
  }

}


// More services

function moreServices(){
    var moreBtn = document.getElementById('divshow').style.display="none";
    var flexService = document.getElementById('mydiv');
    flexService.style.display="flex";
}


