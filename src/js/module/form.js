import { openModal, contentModal } from './modal.js';
import { openBoxBtn, remainder } from './open-box.js';

const form = document.querySelector('#form');
const nameInput = document.querySelector('#question1');
const selectInput = document.querySelector('#question2');
const emailInput = document.querySelector('#question3');

form.addEventListener('submit', function(event) {
    if (!validateName(nameInput.value.trim())) {
        event.preventDefault();
        alert('Будь ласка, введіть коректне ім\'я.');
        return false
    }
    if (!selectInput.value) {
        event.preventDefault();
        alert('Будь ласка, виберіть варіант зі списку.');
        return false
    }
    if (!validateEmail(emailInput.value.trim())) {
        event.preventDefault();
        alert('Будь ласка, введіть коректний e-mail.');
        return false
    }
    event.preventDefault();
    form.reset();
    openBoxBtn.setAttribute('data-status', 'true');
    remainder.textContent = '3';
    openModal(contentModal.formText);
});

function validateName(name) {
    const nameRegex = /^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'\s]{2,30}$/;
    return nameRegex.test(name);
}

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}