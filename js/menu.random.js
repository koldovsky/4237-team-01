function renderWheel(wheelData, containerClass) {
  let wheelHTML = "";

  wheelHTML += `
    <div class="roulette-wheel__circle${containerClass.includes("left") ? "__left" : "__right"
    }">
      <div class="roulette-wheel__item-orange" style="transform: rotate(22.5deg) skew(45deg)"></div>
      <div class="roulette-wheel__item-dark" style="transform: rotate(67.5deg) skew(45deg)"></div>
      <div class="roulette-wheel__item-orange" style="transform: rotate(112.5deg) skew(45deg)"></div>
      <div class="roulette-wheel__item-dark" style="transform: rotate(157.5deg) skew(45deg)"></div>
      <div class="roulette-wheel__item-orange" style="transform: rotate(202.5deg) skew(45deg)"></div>
      <div class="roulette-wheel__item-dark" style="transform: rotate(247.5deg) skew(45deg)"></div>
      <div class="roulette-wheel__item-orange" style="transform: rotate(292.5deg) skew(45deg)"></div>
      <div class="roulette-wheel__item-dark" style="transform: rotate(337.5deg) skew(45deg)"></div>
  `;

  const numItems = wheelData.length;
  const angleIncrement = 360 / numItems;

  wheelData.forEach((item, index) => {
    const rotation = index * angleIncrement;
    wheelHTML += `
      <div class="roulette-wheel__item" style="transform: translate(-50%, -50%) rotate(${rotation}deg)">
        <div class="roulette-wheel__item-text${index % 2 === 0 ? "-dark" : "-orange"
      }-side" style="transform: rotate(-${rotation}deg)">
          ${item}
        </div>
      </div>
    `;
  });

  wheelHTML += `</div>`;

  const wheelContainer = document.querySelector(containerClass);

  wheelHTML += wheelContainer.innerHTML;
  wheelContainer.innerHTML = wheelHTML;
}

const beerData = [
  "Blue<br />Style",
  "Boutique<br />IPA",
  "Indian<br />Pale Ale",
  "Lager<br />Beer",
  "Belgian<br />Dream",
  "Bitter",
  "Stout",
  "Caramel<br />Ale",
];

const foodData = [
  "Spicy <br />Nachos",
  "Beef <br />King",
  "Chicekn<br />burger",
  "Classic<br />Burger",
  "Lamb <br />Gyro",
  "Lamb <br />Chops",
  "Fish <br />& <br />Chips",
  "Chiken <br />Wrap",
];

// Стани для обох коліс
let wheelStates = {
  beer: {
    isSpinning: false,
    rotation: 0,
    spinTimeout: null,
    wheelSelector: ".roulette-wheel__circle__left",
    buttonSelector: ".button-center__left",
  },
  food: {
    isSpinning: false,
    rotation: 0,
    spinTimeout: null,
    wheelSelector: ".roulette-wheel__circle__right",
    buttonSelector: ".button-center__right",
  },
};

function spinWheel(type) {
  const state = wheelStates[type];
  const wheel = document.querySelector(state.wheelSelector);
  const button = document.querySelector(state.buttonSelector);
  const items = wheel.querySelectorAll(".roulette-wheel__item");

  if (!state.isSpinning) {
    // Почати обертання
    const randomDeg = Math.floor(Math.random() * 360) + 3600;
    state.rotation += randomDeg;

    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = `rotate(${state.rotation}deg)`;

    items.forEach((item) => {
      const textElement = item.querySelector(
        ".roulette-wheel__item-text-dark-side, .roulette-wheel__item-text-orange-side"
      );

      const rotateMatch = item.style.transform.match(/rotate\(([^)]+)deg\)/);
      const initialRotation =
        rotateMatch && rotateMatch[1] ? parseFloat(rotateMatch[1]) : 0;

      textElement.style.transition = "transform 5s ease-out";
      textElement.style.transform = `rotate(${-(
        state.rotation + initialRotation
      )}deg)`;
    });

    state.isSpinning = true;
    button.textContent = "STOP";

    state.spinTimeout = setTimeout(() => {
      state.isSpinning = false;
      button.textContent = "SPIN";
    }, 5000);
  } else {
    // Зупинити обертання
    const computedStyle = getComputedStyle(wheel);
    const matrix = new DOMMatrix(computedStyle.transform);
    const currentRotation = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
    state.rotation = currentRotation;

    clearTimeout(state.spinTimeout);

    wheel.style.transition = "none";
    wheel.style.transform = `rotate(${currentRotation}deg)`;

    items.forEach((item) => {
      const textElement = item.querySelector(
        ".roulette-wheel__item-text-dark-side, .roulette-wheel__item-text-orange-side"
      );

      const rotateMatch = item.style.transform.match(/rotate\(([^)]+)deg\)/);
      const initialRotation =
        rotateMatch && rotateMatch[1] ? parseFloat(rotateMatch[1]) : 0;

      textElement.style.transition = "none";
      textElement.style.transform = `rotate(${-(
        currentRotation + initialRotation
      )}deg)`;
    });
    state.isSpinning = false;
    button.textContent = "SPIN";
  }
}

renderWheel(beerData, ".roulette-wheel__left");
renderWheel(foodData, ".roulette-wheel__right");

// Прив'язуємо кнопки
document
  .querySelector(".button-center__left")
  ?.addEventListener("click", () => {
    spinWheel("beer");
  });
document
  .querySelector(".button-center__right")
  ?.addEventListener("click", () => {
    spinWheel("food");
  });