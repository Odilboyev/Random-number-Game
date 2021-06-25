// idea:  (c) algorismic.uz || AbdulazizSulaymon

let son = Math.floor(Math.random() * 100);
let counts = 10;

const count = document.querySelector('#count');
const status = document.querySelector('#status');
const statusp = document.querySelector('#statusp');
const number = document.querySelector('#number');
const modal = document.querySelector('#modal');
const success = document.querySelector('#success');
const error = document.querySelector('#error');
const player = document.getElementById('player');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {

    e.preventDefault()

    let current = number.value;
    if (current == 0) return;

    count.innerHTML = --counts;
    
    statusp.classList.remove('invisible');

    // winner modal
    if (current == son) {
        status.innerHTML = 'to\'g\'ri'
        player.src = './sounds/win.mp3'
        player.play()
        modal.classList.remove('d-none')
        success.classList.remove('d-none')
        return
    } else{
        if (current > son) {
            status.innerHTML = 'katta'
        } else {
            status.innerHTML = 'kichik'
        }
    }

    // loser modal )
    if (counts == 0) {
        player.src = './sounds/over.mp3'
        player.play()
        modal.classList.remove('d-none')
        error.classList.remove('d-none')
        return
    }
});
// reload
reLoad = () => {
    son = Math.floor(Math.random() * 100);
    counts = 10;
    modal.classList.add('d-none')
    error.classList.add('d-none')
    success.classList.add('d-none')
    statusp.classList.add('invisible');
    count.innerHTML = counts
    number.value = '';
}