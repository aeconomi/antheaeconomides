const agile = document.querySelector(".agile");
const video = agile.querySelector("video");
const text = agile.querySelector("h1");
//END SECTION
const section = document.querySelector("section");
const end = section.querySelector("h1");

//SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 4000,
  triggerElement: agile,
  triggerHook: .1
}) 
  .setPin(agile)
  .addTo(controller);


//Video Animation
let accelamount = 1;
let scrollpos = 0;
let delay = 0;

scene.on("update", e => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  console.log(scrollpos, delay);

  video.currentTime = delay;
}, 50.1);
