



// $(".js-range-slider").ionRangeSlider({
//     type: "double",
//     min: 0,
//     max: 1000,
//     from: 200,
//     to: 500,
//     grid: true
// });





// class Slide {
//     constructor(args) {
//         this.el = document.querySelector(args.element);
//         this.min = +this.el.min || 0;
//         this.max = +this.el.max || 100;
//         this.step = +this.el.step || 1;
//         this.tick = args.tick || this.step;
//         this.addTicks();
//         this.dataRange = document.createElement("div");
//         this.dataRange.className = "data-range";
//         this.el.parentElement.appendChild(this.dataRange, this.el);
//         this.updatePos();
//         this.el.addEventListener("input", () => {
//             this.updatePos();
//         });
//     }
//     addTicks() {
//         let wrap = document.createElement("div");
//         wrap.className = "range";
//         this.el.parentElement.insertBefore(wrap, this.el);
//         wrap.appendChild(this.el);
//         let ticks = document.createElement("div");
//         ticks.className = "range-ticks";
//         wrap.appendChild(ticks);
//         for (let t = this.min; t <= this.max; t += this.tick) {
//             console.log(t)
//             let tick = document.createElement("span");
//             tick.className = "range-tick";
//             ticks.appendChild(tick);
//             let tickText = document.createElement("span");
//             tickText.className = "range-tick-text";
//             tick.appendChild(tickText);
//             tickText.textContent = t;
//         }
//     }
//     getRangePercent() {
//         let max = this.el.max,
//             min = this.el.min,
//             relativeValue = this.el.value - min,
//             ticks = max - min,
//             percent = relativeValue / ticks;
//         return percent;
//     }
//     updatePos() {
//         let percent = this.getRangePercent(),
//             left = percent * 100,
//             emAdjust = percent * 3;
//         this.dataRange.style.left = `calc(${left}% - ${emAdjust}em)`;
//         this.dataRange.innerHTML = this.el.value;
//     }
// }



// window.addEventListener("DOMContentLoaded", () => {
// let range1 = new Slide({
//     element: "#range1",
//     tick: 1
// })
    // range2 = new rSlider({
    //     element: "#range2",
    //     tick: 4
    // }),
    // range3 = new rSlider({
    //     element: "#range3",
    //     tick: 10
    // });
    // });