gsap.from(".logo", {
  y: -50,
  opacity: 0,
  duration: 1
});

gsap.from("nav ul li", {
  y: -30,
  opacity: 0,
  stagger: 0.2,
  duration: 1
});

gsap.from(".title", {
  x: -100,
  opacity: 0,
  duration: 1.2
});

gsap.from(".subtitle", {
  x: 100,
  opacity: 0,
  duration: 1.2
});

gsap.from(".card", {
  scrollTrigger: ".projects",
  y: 50,
  opacity: 0,
  stagger: 0.3,
  duration: 1
});
