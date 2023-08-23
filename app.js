const images = [
    "img/01.png",
    "img/02.png",
    "img/03.png",
    "img/04.png",
    "img/05.png",
    "img/06.png",
    "img/07.png",


  ];
  
  let i = 0;
  
  function placeImage(x, y) {
    const nextImage = images[i];
    const img = document.createElement("img");
    img.setAttribute("src", nextImage);
    img.style.left = x + "px";
    img.style.top = y + "px";
    img.style.transform = "translate(-50%, -50%) scale(3)";
    document.body.appendChild(img);
  
    i = i + 1;
    if (i >= images.length) {
      i = 0;
    }
  }
  
  document.addEventListener("mousemove" , function(event) {
   
    
    

    //event.preventDefault();
    placeImage(event.pageX, event.pageY);
  });
  