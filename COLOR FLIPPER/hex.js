const colors = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'A','B','C','D','E','F']

const color = document.querySelector('.color')
const button = document.querySelector('.btn')

button.addEventListener('click', function(){
    let hexColor = '#';
    for(let i = 0; i < 6; i++){
        hexColor += colors[getRandom()]
    }
    color.textContent = hexColor;
    document.querySelector('.container').style.backgroundColor = hexColor;
})

function getRandom(){
  return  Math.floor(Math.random() * colors.length)
}