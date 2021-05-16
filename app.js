let bars = document.querySelector(".bars");
let links = document.querySelector(".links");

console.log();

let barsClick = (e) => {
  e.preventDefault();
  e.target.parentElement.classList.toggle("active");
};

bars.addEventListener("click", (e) => {
  barsClick(e);
});
