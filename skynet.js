document.addEventListener("DOMContentLoaded", (event) => {
    gsap.registerPlugin(ScrollTrigger);

    var frame_count  = 39, offset_value = 190;

    gsap.to(".viewer", {
    backgroundPosition: (-offset_value * frame_count * 2) + "px 50%",
    ease: "steps(" + frame_count + ")",
    scrollTrigger: {
        trigger: ".scene",
        start: "top top",
        end: "+=" + (frame_count* offset_value),
        pin: true,
        scrub: true
    }
    });
});