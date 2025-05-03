const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDate = new Date();
const currentDayName = dayNames[currentDate.getDay()];
document.getElementById("current-day").textContent = currentDayName;

const text = document.querySelector(".friday-deal__title");
const strText = text.textContent;
const splitText = strText.split("");

text.textContent = "";
for (let i = 0; i < splitText.length; i++) {
  text.innerHTML += `<span>${splitText[i]}</span>`;
}

let char = 0;
let timer = setInterval(onTick, 250);

function onTick() {
  const spans = text.querySelectorAll("span");
  spans[char].classList.add("fade");
  char++;
  if (char === splitText.length) {
    complete(spans);
  }
}

function complete(spans) {
  clearInterval(timer);
  setTimeout(() => {
    spans.forEach((span) => span.classList.remove("fade"));
    char = 0;
    timer = setInterval(onTick, 150);
  }, 1000);
}

