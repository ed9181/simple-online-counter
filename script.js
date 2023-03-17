let plus = document.getElementById('plus');
let reset = document.getElementById('reset');
let minus = document.getElementById('minus');
let output = document.getElementById('number');
let number = 0;

plus.addEventListener('click', () => {
    number++;
    output.innerHTML = number;
    if(number >= 1){
        output.style.color = '#8A8635';
    }else if(number == 0){
        output.style.color = '#3C2A21';
    }
});

minus.addEventListener('click', () => {
    number--;
    output.innerHTML = number;
    if(number< 1){
        output.style.color = '#B85C38';
    }else if(number == 0){
        output.style.color = '#3C2A21';
    }
});

reset.addEventListener('click', () => {
    number = 0;
    output.innerHTML = number;
    output.style.color = '#3C2A21';
});