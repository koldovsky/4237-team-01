const form = document.querySelector(".contacts__form-wrapper");

async function handleSubmit(event) {
    event.preventDefault();
    const status = document.querySelector(".reservation-modal");
    const data = new FormData(event.target);
    const response = await fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            Accept: "application/json",
        },
    });
}
form.addEventListener("submit", handleSubmit);