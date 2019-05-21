import style from './style.scss';
const config = [
    'heart1',
    'heart2',
]
const contain = document.body.firstElementChild;
for(let i of config) {
    let div = document.createElement('div');
    div.className = i;
    let box = document.createElement('div');
    box.appendChild(div);
    contain.appendChild(box);
}