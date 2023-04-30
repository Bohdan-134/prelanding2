import { openModal, contentModal } from './modal.js';

export const remainder = document.querySelector('.remainder strong');
export const openBoxBtn = document.getElementById('open-box');

openBoxBtn.addEventListener('click', function() {
    if (this.getAttribute('data-status') === 'false') {
        openModal(contentModal.falseForm)
    } else {
        addRemainder();
        let status = this.getAttribute('data-click');
        this.setAttribute('data-click', `${++status}`);
        if (status < 3) {
            openModal(contentModal.falseBox);
        } else if (status == 3) {
            openModal(contentModal.trueBox);
        } else if (status > 3) {
            openModal(contentModal.boxEnd);
        }
    }
});

function addRemainder() {
    let count = +remainder.textContent;
    if (count <= 0) {
        return;
    } else {
        remainder.textContent = --count;
    }
}