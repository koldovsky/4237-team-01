import reserveModal from "./reserve-modal.js";

function init() {
    import("./global.header-burger.js");
    import("./index.beer-carousel.js");
    import("./index.latest-posts.js").then((module) => module.default());
    import("./index.friday-deal.js");
    import("./contacts.reserve-form.js");
    import("./contacts.map.js");
}

document.body.addEventListener('htmx:afterSwap', (e) => {
    const form = document.querySelector('.contacts__form-wrapper');
    const modal = document.querySelector('.reservation-modal');
    const mapElement = document.querySelector('.contacts__map-api');

    if (form || modal) {
        reserveModal();
    }
    if (mapElement && typeof window.initMap === 'function') {
        window.initMap();
    }
});

const totalPartials = document.querySelectorAll(
    '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});