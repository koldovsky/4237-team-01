const beerCardsContent = [
    {
        id: 1,
        image: "image/beer-carousel/lvivske-beer-bottle.webp",
        name: "Lvivske Lager",
        recommendation: "Ideal for soulful chill with friends.",
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
        recommendation: "Perfect for those who enjoy light and refreshing beer.",
        abv: "ABV - 5%",
        ibu: "IBU - 20",
        flavour: "Crisp, clean, with a hint of malt sweetness."
    },
    {
        id: 3,
        image: "image/beer-carousel/stout-beer.webp",
        name: "Stout",
        recommendation: "Great for fans of dark and rich beer with roasted flavors.",
        abv: "ABV - 6%",
        ibu: "IBU - 50",
        flavour: "Rich, creamy, with notes of coffee and chocolate."
    }
];

function renderBeerCards(content) {
    let beerCardsHTML = "";
    for (let card of content) {
        beerCardsHTML += `
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
            </div>`;
    }
    const beerCarouselBelt = document.querySelector(".beer-carousel__belt");
    beerCarouselBelt.innerHTML = beerCardsHTML;
}

renderBeerCards(beerCardsContent);