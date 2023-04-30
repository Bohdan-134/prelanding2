export const contentModal = {
    formText: 'Ви успішно відправили форму, тепер відкрийте подарункову коробку',
    falseBox: 'На жаль, ви нічого не виграли',
    trueBox: 'Вітаємо! Ви виграли пилосос дайсон',
    falseForm: 'Заповніть, будь ласка, форму',
    boxEnd: 'У вас закінчилися спроби'
}

function createModal(type) {
    return (`
            <div class='modal'>
                <h2 class="h2">${type}</h2>
            </div>
            `)
}

export function closeModal(e) {
    const modalWrap = document.querySelector('.modal-wrapp');
    const click = e.composedPath().includes(document.querySelector('div.modal'));
    if (!click) modalWrap.remove();
}

export function openModal(type) {
    const modalWrap = document.createElement('div');
    modalWrap.classList.add('modal-wrapp');
    modalWrap.innerHTML = createModal(type);
    modalWrap.addEventListener('click', closeModal)
    document.body.append(modalWrap);
}