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

function renderBeerCards(content) {
    let beerCardsHTML = [];
    for (let card of content) {
        beerCardsHTML.push(`
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
            </div>`);
    }
    return beerCardsHTML;
    // const beerCarouselBelt = document.querySelector(".beer-carousel__belt");
    // beerCarouselBelt.innerHTML = beerCardsHTML;
}

const beerCardsSlides = renderBeerCards(beerCardsContent);
let currentSlide = 0;
const totalSlides = beerCardsSlides.length;

function renderCarousel() {
    const beerCarouselBelt = document.querySelector(".beer-carousel__belt");
    beerCarouselBelt.innerHTML = beerCardsSlides[currentSlide];
    const secondSlide = (currentSlide + 1) % totalSlides;
    beerCarouselBelt.innerHTML += beerCardsSlides[secondSlide];

}

function nextSlide() {
    currentSlide = (currentSlide + 1) % totalSlides;
    renderCarousel();
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    renderCarousel();
}

const nextButton = document.querySelector(".beer-carousel__button--next");
const prevButton = document.querySelector(".beer-carousel__button--prev");
nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);

renderCarousel();