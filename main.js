// let input = document.getElementById('input')
// let btn = document.getElementById('btn')
// let div = document.getElementsByClassName('block')
// let select = document.getElementById('select')


// let func = () =>{
    
//     for (let i = 0; i < input.value ; i++) {
//         document.write(`<div style = "width: 100px; height: 100px;
//         margin-bottom: 10px; background-color: ${select.value}"
//         class = "block"></div>`)
//     }
// }


// btn.onclick = () =>{
//     div.style.background = select.value;
//     func()
// }


// Sherbolot Abdimitalipov, [14.06.2023 8:24]
// let input = document.getElementById('input')
// let btn = document.getElementById('btn')
// let div = document.getElementsByClassName('block')
// let select = document.getElementById('select')


// let func = () =>{
    
//     for (let i = 0; i < input.value ; i++) {
//         document.write(`<div style = "width: 100px; height: 100px;
//         margin-bottom: 10px; background-color: ${select.value}"
//         class = "block"></div>`)
//     }
// }


// btn.onclick = () =>{
//     div.style.background = select.value;
//     func()
// }

// Sherbolot Abdimitalipov, [14.06.2023 8:25]
// let input = document.getElementById('input')
// let btn = document.getElementById('btn')
// let div = document.getElementsByClassName('block')
// let select = document.getElementById('select')


// let func = () =>{
    
//     for (let i = 0; i < input.value ; i++) {
//         document.write(`<div style = "width: 100px; height: 100px;
//         margin-bottom: 10px; background-color: ${select.value}"
//         class = "block"></div>`)
//     }
// }


// btn.onclick = () =>{
//     div.style.background = select.value;
//     func()
// }


let input = document.getElementById('input')
let btn = document.getElementById('btn')
let blocks = document.getElementsByClassName('block')
let select = document.getElementById('select')

let func = () => {
  for (let i = 0; i < input.value; i++) {
    let block = document.createElement('div')
    block.style.width = '100px'
    block.style.height = '100px'
    block.style.marginBottom = '10px'
    block.style.backgroundColor = select.value
    block.classList.add('block')
    document.body.appendChild(block)
  }
}

btn.onclick = () => {
  for (let i = 0; i < blocks.length; i++) {
    blocks[i].style.backgroundColor = select.value
  }
  while(blocks.length > 0){
    blocks[0].remove()
  }
  func()
}
