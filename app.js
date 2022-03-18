const openButton = document.querySelector('button');
const closeButton = document.querySelector('#close');
const modal = document.querySelector('.modal');
const form = document.querySelector('form');

openButton.addEventListener('click', openModal);

function openModal(){
    modal.style.display = 'grid';
}


closeButton.addEventListener('click', closeModal);
function closeModal(){
 
    modal.classList.add('close-modal-animation');
    setTimeout(() => { 
        modal.style.display = 'none';
        window.location.reload();
    }, 1000);
    
}

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('modal')){
        closeModal();
    }
})

// final message

form.addEventListener('submit', submitForm);

function submitForm() {
    const card = document.querySelector('.card');
    card.innerHTML = "<h1> Thanks for Subscription </h1>";
    setTimeout(() => { 
      closeModal();
    }, 3000);
}