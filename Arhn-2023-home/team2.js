var btn = document.querySelectorAll('.ove-crates');
var cls = document.querySelector('.clss');
var overlay = document.querySelector('.mars-cont');
var wholecontainer = document.querySelector('.container');

for(i=0;i<btn.length;i++){
  btn[i].addEventListener("click",function() {
    console.log("rishi");
    overlay.classList.add("overlay-team");
    wholecontainer.style.display="none";
  }); 
}



cls.addEventListener("click",function() {
    console.log("sushi");
    overlay.classList.remove("overlay-team");
    wholecontainer.style.display="block";
  }); 
