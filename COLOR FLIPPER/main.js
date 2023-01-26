const colors = ['red','green','orange','blue','brown']

const btn = document.querySelector('.btn')
const color =document.querySelector('.color')


btn.addEventListener('click', ()=>{
    let ran = getRandom();
    document.querySelector('.container').style.backgroundColor = colors[ran];
    document.querySelector('.color').textContent = colors[ran];
})

function getRandom(){
    return Math.floor(Math.random() * colors.length)
}