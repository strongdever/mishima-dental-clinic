gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const smoother = ScrollSmoother.create({
    content: "#smooth-content",
    smooth: 3,
    effects: true
});

// smoother.effects("img", { speed: "auto" });

smoother.effects(".aboutus-img", { speed: "0.94" });
smoother.effects(".clinic-name", { speed: "0.8" });
smoother.effects(".service-text1", { speed: "0.9" });
smoother.effects(".service-text2", { speed: "0.9" });
smoother.effects(".service-text3", { speed: "0.9" });

smoother.effects(".clinic-mark1", { speed: "1.06" });
smoother.effects(".clinic-mark2", { speed: "1.09" });
smoother.effects(".clinic-mark3", { speed: "1.08" });
smoother.effects(".clinic-mark4", { speed: "1.07" });

smoother.effects(".feature-number-text", { speed: "1.06" });

smoother.effects(".feature-text-1", { speed: "0.95" });
smoother.effects(".feature-text-2", { speed: "0.93" });
smoother.effects(".feature .thumb", { speed: "0.82" });

if (window.innerWidth > 768) {
    smoother.effects(".feature .content-wrapper", { speed: "1.07" });
}


smoother.effects(".top-page .section4 .screen-img", { speed: "auto" });

// var el1 = document.getElementById('section2-topimg')
// var el1_xposition = el1.offsetLeft;
// var el1_yposition = el1.offsetTop;

// var el2 = document.getElementById('section2-bottomimg')
// var el2_xposition = el2.offsetLeft;
// var el2_yposition = el2.offsetTop;

// var old_scrolly = document.documentElement.scrollTop;

// console.log(el1_yposition);
// window.addEventListener('scroll', function () {
//     var new_scrolly = document.documentElement.scrollTop;
//     gsap.to(".section2-topimg", {
//         x: el1_xposition + new_scrolly * 1.6 / 10,
//         y: el1_yposition + new_scrolly / 10,
//         stagger: -0.015
//     });

//     gsap.to(".section2-bottomimg", {
//         x: el2_xposition + new_scrolly * 1.6 / 20,
//         y: el2_yposition + new_scrolly / 10,
//         stagger: -0.015
//     });
// });


