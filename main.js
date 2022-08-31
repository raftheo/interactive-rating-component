
let ul = document.querySelector('ul');
let li = document.querySelectorAll('li');

li.forEach(eL => {
    eL.addEventListener('click', function(){
        ul.querySelector('.active').classList.
        remove('active');

        eL.classList.add('active');
    })
})

// submit redirect
const submit = document.querySelector('.btn');
const card1 = document.querySelector('.card1');
const card2 = document.querySelector('.card2');
const nums = document.querySelectorAll('li');
const score = document.querySelector('.num');
let stars_score = 3 

submit.addEventListener('click', onSubmit);
nums.forEach( btn => {
    btn.addEventListener('click', handlenumsClick);
});

function onSubmit(){
    card1.classList.add('none');
    score.textContent = stars_score;
    card2.classList.remove('none');
  
}

function handlenumsClick(event) {
    nums.forEach(btn => {
        btn.classList.remove('active');
    });
    

    if (event.target.classList.contains('.nums')){
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
    
    stars_score = event.target.textContent;
    
}

