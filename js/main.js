// const counters = document.querySelectorAll("#counter");
// const suffix = ["k+", "m+"];
// const speed = 100;

// window.addEventListener("scroll", () => {
// 	counters.forEach((counter) => {
// 		if (Math.round(counter.getBoundingClientRect().top) < 743) {
// 			const counterFunction = () => {
// 				const value = +counter.getAttribute("data-value");
// 				const initValue = +counter.innerHTML;
// 				const inc = value / speed;
// 				if (initValue < value) {
// 					counter.innerHTML = Math.ceil(initValue + inc);
// 					setTimeout(() => {
// 						counterFunction();
// 					}, 10);
// 				} else {
// 					counter.innerHTML = value;
// 				}
// 			};
// 			counterFunction();
// 		}
// 	});
// });
