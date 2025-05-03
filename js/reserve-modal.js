function initReserveModal() {

    const form = document.querySelector('.contacts__form-wrapper');
    const modal = document.querySelector('.reservation-modal');
    const closeBtn = document.querySelector('[data-role="close"]');
    const okBtn = document.querySelector('.reservation-modal__button');

    if (form && modal) {
        console.log('form and modal found');


        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const inputs = form.querySelectorAll('.contacts__input');
            let isValid = true;

            inputs.forEach(input => {
                input.classList.remove('input-error');

                if (!input.value.trim()) {
                    isValid = false;
                    input.classList.add('input-error');
                }
            });

            if (isValid) {
                modal.classList.add('is-active');
            }
        });

        closeBtn?.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });

        okBtn?.addEventListener('click', () => {
            modal.classList.remove('is-active');
        });
    }
}

document.body.addEventListener('htmx:afterSwap', (e) => {
    if (e.detail.target.querySelector('.contacts__form-wrapper') ||
    e.detail.target.querySelector('.reservation-modal')) {
        initReserveModal();
    }
});

