//-----------горизонтальный скроль-------------------
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);
    const scrollWrapper = document.querySelector(".scroll-wrapper");
    const horizontalScrollDistance = scrollWrapper.scrollWidth - window.innerWidth;
    gsap.to(scrollWrapper, {
      x: -horizontalScrollDistance,
      ease: "none",
      scrollTrigger: {
        trigger: ".horizontal-section",
        start: "top top", 
        end: () => "+=" + horizontalScrollDistance, 
        scrub: true, 
        pin: true,   
      },
      duration:1
});