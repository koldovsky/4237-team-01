
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

// Прив'язуємо кнопки
document.querySelector(".button-center__left")?.addEventListener("click", () => {
  spinWheel("beer");
});

document.querySelector(".button-center__right")?.addEventListener("click", () => {
  spinWheel("food");
});
