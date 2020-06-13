const bar = document.getElementById('bar');
const ball = document.querySelector('.ball');

const number = document.getElementById('number');
let i = 0;
// Move the #bar div with the mouse (only x)
window.addEventListener('mousemove', (e) => {
    number.innerHTML = e.x + ' px';
    bar.parentElement.classList.remove('container-bar')

    if (e.x > screen.width - 400 || e.x < 200) {
        return;
    } else {
        bar.style.transform = 'translateX(' + e.x + 'px)';
    }
});

// Move the ball up and down
setInterval(() => {
    if (i === 250) {
        i--;
        ball.style.transform = 'translateY(' + i + 'px)';
    } else {
        i++;
        ball.style.transform = 'translateY(' + i + 'px)';
    }
    console.log(i)
}, 10);


// console.log(bar.getBoundingClientRect().top)