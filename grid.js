let position = 1;
const gridSize = 100;
const gridmin = 1;
function createGrid(){
    for(let i = 1; i <= gridSize; i++){
        var div = document.createElement('div');
        div.id = 'n' + i;
        div.innerText = i;
        document.getElementById('target').appendChild(div);
    }
}

function move(){
    setTimeout(()=> {
        if (position <= gridSize){
        toggle(position);
        toggle(position -1);
        position += 1;
        move();
        }else{
        toggle(position -1);
        position = gridmin
        move();
    };         
    }, 100);
}

function toggle(position){
    if (position < 1) return 0;
    const name = 'n' + position;
    const element = document.getElementById(name);
    element.classList.toggle('on');
}

if (typeof module !== 'undefined'){
    module.exports = { createGrid, move, toggle };
}