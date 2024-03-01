'use strict'

const card = document.querySelector('.container')
const mybutton = document.querySelector('.my-button')
const title = document.querySelector('.title')
const loadingMessage = document.querySelector('.loading-message')
const messageContainer = document.querySelector('.message-container')

const loading = new Promise(function(myResolve) {
    setTimeout(()=>myResolve(true),5000)
});

mybutton.addEventListener('click', async()=>{
    card.style.display = 'none'
    loadingMessage.style.display = 'flex'

    await loading

    loadingMessage.style.display = 'none'

    messageContainer.style.display = 'flex'

})