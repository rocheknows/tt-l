function openNav() {
    document.getElementById("mySidenav").style.width = "50%";
  document.getElementById("myVideo").style.filter = "blur(20px)";
  document.querySelector(".title").style.filter = "blur(20px)";
  document.querySelector(".main").style.filter = "blur(20px)";
  document.querySelector(".popup").style.display = "flex";

}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";

  document.getElementById("myVideo").style.filter = "blur(0px)";
  document.querySelector(".title").style.filter = "blur(0px)";
  document.querySelector(".main").style.filter = "blur(0px)";
  document.querySelector(".popup").style.display = "none";
 
}