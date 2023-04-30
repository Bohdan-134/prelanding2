
import{openModal,contentModal}from'./modal.js';export const remainder=document.querySelector('.remainder strong');export const openBoxBtn=document.getElementById('open-box');openBoxBtn.addEventListener('click',function(){if(this.getAttribute('data-status')==='false'){openModal(contentModal.falseForm)}else{animationBox();addRemainder();let status=this.getAttribute('data-click');this.setAttribute('data-click',`${++status}`);setTimeout(function(){if(status<3){openModal(contentModal.falseBox);}else if(status==3){openModal(contentModal.trueBox);}else if(status>3){openModal(contentModal.boxEnd);}},1200);}});function addRemainder(){let count=+remainder.textContent;if(count<=0){return;}else{remainder.textContent=--count;}}
function animationBox(){const items=document.querySelectorAll('.box-item');items.forEach((item,index)=>{item.style.opacity=0;item.style.animationDelay=`${index * 100}ms`;item.style.animationDuration='0.5s';});}
export function removeAnimationBox(){const items=document.querySelectorAll('.box-item');items.forEach((item,index)=>{item.style.opacity=1;item.style.animationDelay=`${index * 100}ms`;item.style.animationDuration='0.5s';});}