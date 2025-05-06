const beerCardsContent = [
    {
        id: 1,
        image: "image/beer-carousel/lvivske-beer-bottle.webp",
        name: "Lvivske Lager",
        recommendation: "Ideal for soulful chill with friends and watch sunsets at 4 a.m..",
        abv: "ABV - 4.5%",
        ibu: "IBU - 20",
        flavour: "The vibe, taste of youth, and student life."
    },
    {
        id: 1,
        image: "image/beer-carousel/ipa-beer.webp",
        name: "IPA",
        recommendation: "Ideal for those who prefer strong and bitter beer with rich aroma.",
        abv: "ABV - 8%",
        ibu: "IBU - 80",
        flavour: "Very bitter, hoppy, with grainy notes."
    },
    {
        id: 2,
        image: "image/beer-carousel/lager-beer.webp",
        name: "Lager",
        recommendation: "This classic bottled beer features a wheat aroma and mild taste.",
        abv: "ABV - 5%",
        ibu: "IBU - 20",
        flavour: "Crisp, clean, with a hint of malt sweetness."
    },
    {
        id: 3,
        image: "image/beer-carousel/bitter-beer.webp",
        name: "BITTER",
        recommendation: "'England's favorite beer' is a great choice for those who like dark varieties of beer.",
        abv: "ABV - 4.6%",
        ibu: "IBU - 40",
        flavour: "Bitter, malty, with a slight aftertaste of toasts."
    }
];

// function renderBeerCards(content) {
//     let beerCardsHTML = [];
//     for (let card of content) {
//         beerCardsHTML.push(`
//             <div class="beer-carousel__card">
//                 <div class="beer-carousel__card-img-wrap">
//                     <img height="300" class="beer-carousel__card-img" src="${card.image}" alt="${card.name} beer bottle">
//                 </div>
//                 <div class="beer-carousel__card-description">
//                     <p class="beer-carousel__card-name">${card.name}</p>
//                     <p class="beer-carousel__card-recommendation">${card.recommendation}</p>
//                     <p class="beer-carousel__card-abv">${card.abv}</p>
//                     <p class="beer-carousel__card-ibu">${card.ibu}</p>
//                     <p class="beer-carousel__card-flavour">${card.flavour}</p>
//                 </div>
//             </div>`);
//     }
//     return beerCardsHTML;
//     // const beerCarouselBelt = document.querySelector(".beer-carousel__belt");
//     // beerCarouselBelt.innerHTML = beerCardsHTML;
// }

// const beerCardsSlides = renderBeerCards(beerCardsContent);
// let currentSlide = 0;
// const totalSlides = beerCardsSlides.length;

// function renderCarousel() {
//     const beerCarouselBelt = document.querySelector(".beer-carousel__belt");
//     beerCarouselBelt.innerHTML = beerCardsSlides[currentSlide];
//     const secondSlide = (currentSlide + 1) % totalSlides;
//     beerCarouselBelt.innerHTML += beerCardsSlides[secondSlide];

// }

// function nextSlide() {
//     currentSlide = (currentSlide + 1) % totalSlides;
//     renderCarousel();
// }

// function prevSlide() {
//     currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
//     renderCarousel();
// }

// const nextButton = document.querySelector(".beer-carousel__button--next");
// const prevButton = document.querySelector(".beer-carousel__button--prev");
// nextButton.addEventListener("click", nextSlide);
// prevButton.addEventListener("click", prevSlide);

// renderCarousel();

const beerCarouselBelt = document.querySelector(".beer-carousel__belt");

function renderBeerCards(content) {
    return content.map(card => `
        <div class="beer-carousel__card">
            <div class="beer-carousel__card-img-wrap">
                <img height="300" class="beer-carousel__card-img" src="${card.image}" alt="${card.name} beer bottle">
            </div>
            <div class="beer-carousel__card-description">
                <p class="beer-carousel__card-name">${card.name}</p>
                <p class="beer-carousel__card-recommendation">${card.recommendation}</p>
                <p class="beer-carousel__card-abv">${card.abv}</p>
                <p class="beer-carousel__card-ibu">${card.ibu}</p>
                <p class="beer-carousel__card-flavour">${card.flavour}</p>
            </div>
        </div>`).join('');
}

const dotIndicatorsContainer = document.querySelector('.beer-carousel__dot-indicator-container');

function renderCarousel() {

    beerCarouselBelt ? beerCarouselBelt.innerHTML = renderBeerCards(beerCardsContent) : null;
    dotIndicatorsContainer ? dotIndicatorsContainer.innerHTML = beerCardsContent.map((_, index) => `<div class="beer-carousel__dot-indicator" id="dot${index}"></div>`).join('') : null;
  
    // Динамічно встановлюємо ширину belt
    beerCarouselBelt ? beerCarouselBelt.style.width = `${beerCardsContent.length * 100}%` : null;
  
    // І кожному слайду ширину відносно каруселі
    document.querySelectorAll('.beer-carousel__card')?.forEach(card => {
      card.style.width = `${100 / beerCardsContent.length}%`;
    });
  
    updateCarouselPosition();
  }
  
  let currentSlide = 0;
  let numOfSliderMoves = window.innerWidth <= 768 ? beerCardsContent.length : beerCardsContent.length - 1;

  function updateCarouselPosition() {
    let offsetDivider = window.innerWidth <= 768 ? 1 : 2;
    const offset = -currentSlide * (100 / offsetDivider);
    beerCarouselBelt ? beerCarouselBelt.style.transform = `translateX(${offset}%)` : null;
    for (let i = 0; i < numOfSliderMoves; i++) {
        if (i === currentSlide) {
            document.querySelector(`#dot${i}`)?.classList.add('beer-carousel__dot-indicator--active');
        } else {
            document.querySelector(`#dot${i}`)?.classList.remove('beer-carousel__dot-indicator--active');
        }
    }
  }
  
  function nextSlide() {
    currentSlide = (currentSlide + 1) % numOfSliderMoves;
    updateCarouselPosition();
  }
  
  function prevSlide() {
    currentSlide = (currentSlide - 1 + numOfSliderMoves) % numOfSliderMoves;
    updateCarouselPosition();
  }
  
  document.querySelector(".beer-carousel__button--next")?.addEventListener("click", nextSlide);
  document.querySelector(".beer-carousel__button--prev")?.addEventListener("click", prevSlide);
  
  renderCarousel();
  

    window.addEventListener('resize', renderCarousel);
    window.addEventListener('resize', () => {
        numOfSliderMoves = window.innerWidth <= 768 ? beerCardsContent.length : beerCardsContent.length - 1;
    })