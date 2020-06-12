const bar = document.getElementById('bar');

const number = document.getElementById('number');
let numberValue = 0;

window.addEventListener('keydown', () => {
    if (event.keyCode === 39) {
        numberValue += 30;
        number.innerHTML = numberValue + ' px';
        bar.style.transform = 'translateX(' + numberValue + 'px)';
    }
    
    if (event.keyCode === 37) {
        numberValue -= 30;
        number.innerHTML = numberValue + ' px';
        bar.style.transform = 'translateX(' + numberValue + 'px)';
    }
    
    console.log(bar)
}); 