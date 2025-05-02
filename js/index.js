import("./map-init.js");

function init() {
    import("./global.header-burger.js");
    import("./index.beer-carousel.js");
    import("./index.latest-posts.js").then((module) => module.default());
    import("./index.friday-deal.js");
}

const totalPartials = document.querySelectorAll(
    '[hx-trigger="load"], [data-hx-trigger="load"]'
).length;
let loadedPartialsCount = 0;

document.body.addEventListener("htmx:afterOnLoad", () => {
    loadedPartialsCount++;
    if (loadedPartialsCount === totalPartials) init();
});