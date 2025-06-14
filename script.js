gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", function () {
    const cards = [
        { id: "#card-1", endTranslateX: -2000, rotate: 45 },
        { id: "#card-2", endTranslateX: -1000, rotate: -30 },
        { id: "#card-3", endTranslateX: -2000, rotate: 45 },
        { id: "#card-4", endTranslateX: -1500, rotate: -30 },
        { id: "#card-5", endTranslateX: -1800, rotate: 40 },
        { id: "#card-6", endTranslateX: -1200, rotate: -25 },
        { id: "#card-7", endTranslateX: -1700, rotate: 35 },
        { id: "#card-8", endTranslateX: -1300, rotate: -20 },
    ];

    ScrollTrigger.create({
        trigger: ".wrapper-404",
        start: "top top",
        end: "+=900vh",
        scrub: 3, // Higher value makes scrolling smoother & slower
        pin: true,
        onUpdate: (self) => {
            gsap.to(".wrapper-404", {
                x: `${-350 * self.progress}vw`,
                duration: 6,
                ease: "power4.out",
            });
        },
    });

    cards.forEach((card) => {
        ScrollTrigger.create({
            trigger: card.id,
            start: "top top",
            end: "+=1200vh",
            scrub: 1,
            onUpdate: (self) => {
                gsap.to(card.id, {
                    x: `${card.endTranslateX * self.progress}px`,
                    rotate: `${card.rotate * self.progress * 2}`,
                    duration: 6,
                    ease: "power4.out",
                });
            },
        });
    });   
});
