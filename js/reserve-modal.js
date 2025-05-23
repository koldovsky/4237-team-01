//Alona Zahychenko
export default function reserveModal() {
    const form = document.querySelector('.contacts__form-wrapper');
    const modal = document.querySelector('.reservation-modal');
    const closeBtn = document.querySelector('[data-role="close"]');
    const okBtn = document.querySelector('.reservation-modal__button');

    if (form && modal) {

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
    } else {
        console.log('form or modal not found');
    }
}



