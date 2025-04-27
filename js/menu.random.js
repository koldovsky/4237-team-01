// Стани для пивного колеса
let isBeerSpinning = false;
let beerRotation = 0;
let beerSpinTimeout;

// Стани для колеса їжі
let isFoodSpinning = false;
let foodRotation = 0;
let foodSpinTimeout;

const buttonBeer = document.querySelectorAll(".button_center")[0];
const buttonFood = document.querySelectorAll(".button_center")[1];

if (buttonBeer) {
  buttonBeer.addEventListener("click", function () {
    spinBeerWheel(buttonBeer);
  });
}

if (buttonFood) {
  buttonFood.addEventListener("click", function () {
    spinFoodWheel(buttonFood);
  });
}

function spinBeerWheel(button) {
  const wheel = document.querySelectorAll(".roulette-wheel__circle")[0];
  const items = wheel.querySelectorAll(".roulette-wheel__item");

  if (!isBeerSpinning) {
    // Почати обертання
    const randomDeg = Math.floor(Math.random() * 360) + 3600;
    beerRotation += randomDeg;

    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = `rotate(${beerRotation}deg)`;

    items.forEach((item) => {
      const textElement = item.querySelector(
        ".roulette-wheel__item-text-dark-side, .roulette-wheel__item-text-orange-side"
      );

      const rotateMatch = item.style.transform.match(/rotate\(([^)]+)deg\)/);
      const initialRotation =
        rotateMatch && rotateMatch[1] ? parseFloat(rotateMatch[1]) : 0;

      textElement.style.transition = "transform 5s ease-out";
      textElement.style.transform = `rotate(${-(
        beerRotation + initialRotation
      )}deg)`;
    });

    isBeerSpinning = true;
    button.textContent = "STOP";

    beerSpinTimeout = setTimeout(() => {
      isBeerSpinning = false;
      button.textContent = "SPIN";
    }, 5_000);
  } else {
    // Зупинити обертання
    const computedStyle = getComputedStyle(wheel);
    const matrix = new DOMMatrix(computedStyle.transform);
    const currentRotation = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
    beerRotation = currentRotation;

    clearTimeout(beerSpinTimeout);

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

    isBeerSpinning = false;
    button.textContent = "SPIN";
  }
}

function spinFoodWheel(button) {
  const wheel = document.querySelectorAll(".roulette-wheel__circle")[1]; // Друге колесо
  const items = wheel.querySelectorAll(".roulette-wheel__item");

  if (!isFoodSpinning) {
    // Почати обертання
    const randomDeg = Math.floor(Math.random() * 360) + 3600;
    foodRotation += randomDeg;

    wheel.style.transition = "transform 5s ease-out";
    wheel.style.transform = `rotate(${foodRotation}deg)`;

    items.forEach((item) => {
      const textElement = item.querySelector(
        ".roulette-wheel__item-text-dark-side, .roulette-wheel__item-text-orange-side"
      );

      const rotateMatch = item.style.transform.match(/rotate\(([^)]+)deg\)/);
      const initialRotation =
        rotateMatch && rotateMatch[1] ? parseFloat(rotateMatch[1]) : 0;

      textElement.style.transition = "transform 5s ease-out";
      textElement.style.transform = `rotate(${-(
        foodRotation + initialRotation
      )}deg)`;
    });

    isFoodSpinning = true;
    button.textContent = "STOP";

    foodSpinTimeout = setTimeout(() => {
      isFoodSpinning = false;
      button.textContent = "SPIN";
    }, 5_000);
  } else {
    // Зупинити обертання
    const computedStyle = getComputedStyle(wheel);
    const matrix = new DOMMatrix(computedStyle.transform);
    const currentRotation = Math.atan2(matrix.b, matrix.a) * (180 / Math.PI);
    foodRotation = currentRotation;

    clearTimeout(foodSpinTimeout);

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

    isFoodSpinning = false;
    button.textContent = "SPIN";
  }
}


// // імпортую методи(функції) сюди, бо динамічний імпорт не додає їх у глобальну область видимості (тобто вони не доступні через onclick в HTML).
// const beerButton = document.querySelector(".button_center_beer"); // Знайдіть кнопку
// beerButton.addEventListener("click", async () => {
//     const module = await import("./menu.random.js");
//     module.spinBeerWheel(beerButton); // Виклик функції з модуля
// });

// const foodButton = document.querySelector(".button_center_food"); // Знайдіть кнопку
// foodButton.addEventListener("click", async () => {
//     const module = await import("./menu.random.js");
//     module.spinFoodWheel(foodButton); // Виклик функції з модуля
// });

// тут рулетка просто крутиться  й зупиняється аж через 5 секунд, й якщо натиснути ще раз поки вона крутиться то розженеться
// ще швидше але різко зупиниться коли пройте 5 секунд.

//   let beerRotation = 0;
//   let foodRotation = 0;

//   function spinBeerWheel() {
//     const wheel = document.querySelectorAll(".roulette-wheel__circle")[0];
//     const items = wheel.querySelectorAll(".roulette-wheel__item");
//     const randomDeg = Math.floor(Math.random() * 360) + 3600;
//     beerRotation += randomDeg;

//     wheel.style.transition = "transform 5s ease-out";
//     wheel.style.transform = `rotate(${beerRotation}deg)`;

//     items.forEach((item) => {
//       const textElement = item.querySelector(
//         ".roulette-wheel__item-text-dark-side, .roulette-wheel__item-text-orange-side"
//       );

//       const rotateMatch = item.style.transform.match(/rotate\(([^)]+)deg\)/);
//       const initialRotation =
//         rotateMatch && rotateMatch[1] ? parseFloat(rotateMatch[1]) : 0;

//       textElement.style.transition = "transform 5s ease-out";
//       textElement.style.transform = `rotate(${-(
//         beerRotation + initialRotation
//       )}deg)`;
//     });
//   }

//   function spinFoodWheel() {

//     const wheel = document.querySelectorAll(".roulette-wheel__circle")[1];
//     const items = wheel.querySelectorAll(".roulette-wheel__item");
//     const randomDeg = Math.floor(Math.random() * 360) + 3600;
//     foodRotation += randomDeg;

//     wheel.style.transition = "transform 5s ease-out";
//     wheel.style.transform = `rotate(${foodRotation}deg)`;

//     items.forEach((item) => {
//       const textElement = item.querySelector(
//         ".roulette-wheel__item-text-dark-side, .roulette-wheel__item-text-orange-side"
//       );

//       const rotateMatch = item.style.transform.match(/rotate\(([^)]+)deg\)/);
//       const initialRotation =
//         rotateMatch && rotateMatch[1] ? parseFloat(rotateMatch[1]) : 0;

//       textElement.style.transition = "transform 5s ease-out";
//       textElement.style.transform = `rotate(${-(
//         foodRotation + initialRotation
//       )}deg)`;
//     });

//   }
