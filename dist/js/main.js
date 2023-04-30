
const remainder=document.querySelector('.remainder strong')
function addHoverListener(path,title,colorHover,colorLeave){path.addEventListener('mousemove',function(){this.style.fill=colorHover;});path.addEventListener('mouseleave',function(){this.style.fill=colorLeave;});title.addEventListener('mousemove',function(){path.style.fill=colorHover;});title.addEventListener('mouseleave',function(){path.style.fill=colorLeave;});}
const openPath=document.querySelector('#open-box svg path');const openTitle=document.querySelector('.open-box-title');addHoverListener(openPath,openTitle,'#c66553','#FF836C');const sendSvg=document.querySelector('#send svg path');const sendTitle=document.querySelector('.send-title');addHoverListener(sendSvg,sendTitle,'#48afb7','#53D2DC');const contentModal={formText:'Ви успішно відправили форму, тепер відкрийте подарункову коробку',falseBox:'На жаль, ви нічого не виграли',trueBox:'Вітаємо! Ви виграли пилосос дайсон',falseForm:'Заповніть, будь ласка, форму',boxEnd:'У вас закінчилися спроби'}
function createModal(type){return(`
            <div class='modal'>
                <h2 class="h2">${type}</h2>
            </div>
            `)}
function closeModal(e){const modalWrap=document.querySelector('.modal-wrapp');const click=e.composedPath().includes(document.querySelector('div.modal'));if(!click)modalWrap.remove();}
function openModal(type){const modalWrap=document.createElement('div');modalWrap.classList.add('modal-wrapp');modalWrap.innerHTML=createModal(type);modalWrap.addEventListener('click',closeModal)
document.body.append(modalWrap);}
const form=document.querySelector('#form');const nameInput=document.querySelector('#question1');const selectInput=document.querySelector('#question2');const emailInput=document.querySelector('#question3');form.addEventListener('submit',function(event){if(!validateName(nameInput.value.trim())){event.preventDefault();alert('Будь ласка, введіть коректне ім\'я.');return false}
if(!selectInput.value){event.preventDefault();alert('Будь ласка, виберіть варіант зі списку.');return false}
if(!validateEmail(emailInput.value.trim())){event.preventDefault();alert('Будь ласка, введіть коректний e-mail.');return false}
event.preventDefault();form.reset();openBoxBtn.setAttribute('data-status','true');remainder.textContent='3';openModal(contentModal.formText);});function validateName(name){const nameRegex=/^[a-zA-Zа-яА-ЯіІїЇєЄґҐ'\s]{2,30}$/;return nameRegex.test(name);}
function validateEmail(email){const emailRegex=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return emailRegex.test(email);}
const openBoxBtn=document.getElementById('open-box');openBoxBtn.addEventListener('click',function(){if(this.getAttribute('data-status')==='false'){openModal(contentModal.falseForm)}else{addRemainder();let status=this.getAttribute('data-click');this.setAttribute('data-click',`${++status}`);if(status<3){openModal(contentModal.falseBox);}else if(status==3){openModal(contentModal.trueBox);}else if(status>3){openModal(contentModal.boxEnd);}}});function addRemainder(){let count=+remainder.textContent;if(count<=0){return;}else{remainder.textContent=--count;}}