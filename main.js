let mainImg = document.querySelector(".header-intro-img");

// change the front picture if someone is using a phone
if (screen.width <= 768) {
  mainImg.setAttribute("src","MACN-front.jpg");
  console.log("bro im supposed to change");
}

if (screen.width > 768) {
  console.log("i am above 768 px");
  console.log(screen.width);
  console.log("my current window width is " + innerWidth);
  mainImg.setAttribute("src","collage-front-1.jpg");
}

window.addEventListener("resize", () => {
  if (window.innerWidth < 768) {
    console.log("i am below 768 px");
    console.log("my current window width is " + innerWidth);
    mainImg.setAttribute("src","MACN-front.jpg");
  }
  
  if (window.innerWidth > 768) {
    console.log("i am above 768 px");
    console.log(screen.width);
    console.log("my current window width is " + innerWidth);
    mainImg.setAttribute("src","collage-front-1.jpg");
  }

  
})