function openNav() {
    const topNav = document.getElementById("topNav");
    const openBtn = document.getElementById("openBtn");

    topNav.classList.toggle("openNav");
    openBtn.classList.toggle("openBtn");
}

const svg = document.getElementsByClassName("svg");
for (item of svg) {
  const svg = item.getElementsByTagName("svg");

  const width = svg[0].getAttribute("width");
  const height = svg[0].getAttribute("height");
  
  const new_width = width * 100 / 1920 + "vw";
  const new_height = height * 100 / 1920 + "vw";

  svg[0].setAttribute("width", new_width);
  svg[0].setAttribute("height", new_height);
}

gsap.to("#container-lines-left", {
  scrollTrigger: {
      trigger: "#container",
        scrub: true,
        // markers: true,
        start: "start 80%",
        end: "bottom"
  },
  width: () => {
      return (1208 + 40 + 260)*100/1920 + 'vw';
  }
});
gsap.to("#container-lines-right", {
  scrollTrigger: {
      trigger: "#container",
        scrub: true,
        // markers: true,
        start: "start 80%",
        end: "bottom"
  },
  width: () => {
      return (1208 + 40 + 330)*100/1920 + 'vw';
  }
});

$('.advantages__slider').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: ".arrow-left", 
  nextArrow: ".arrow-right", 
});
$('#slotMachines__slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  centerMode: true,
  prevArrow: ".slotMachines__arrowPrev", 
  nextArrow: ".slotMachines__arrowNext", 
});