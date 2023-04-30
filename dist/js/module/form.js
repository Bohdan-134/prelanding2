
import{openModal,contentModal}from'./modal.js';import{openBoxBtn,remainder}from'./open-box.js';const form=document.querySelector('#form');const nameInput=document.querySelector('#question1');const selectInput=document.querySelector('#question2');const emailInput=document.querySelector('#question3');function addShakeHorizontal(elem){elem.classList.add('shake-horizontal');setTimeout(function(){elem.classList.remove('shake-horizontal')},3000);}
form.addEventListener('submit',function(event){const dataSend=form.getAttribute('data-send');if(!validateName(nameInput.value.trim())){event.preventDefault();addShakeHorizontal(nameInput);return false}
if(!selectInput.value){event.preventDefault();addShakeHorizontal(selectInput);return false}
if(!validateEmail(emailInput.value.trim())){event.preventDefault();addShakeHorizontal(emailInput);return false}
if(dataSend==='true'){event.preventDefault();openModal(contentModal.formEnd);form.reset();return false}
event.preventDefault();form.reset();form.setAttribute('data-send','true');openBoxBtn.setAttribute('data-status','true');remainder.textContent='3';openModal(contentModal.formText);});function validateName(name){const nameRegex=/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'\s]{2,30}$/;return nameRegex.test(name);}
function validateEmail(email){const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return emailRegex.test(email);}