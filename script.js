const resultado = document.querySelector('#resultado')
const btn = document.querySelectorAll('[data-innertext]')
const limparTecla = document.querySelector('[data-clean]')
const backspace = document.querySelector('[data-back]')
const igual = document.querySelector('[data-igual]')
const userEventStart = ['touchstart','keydown']
const userEventEnd= ['touchend', 'keyup']

const btnArray = Array.from(btn)

const itensText = btnArray.map((item)=> item.innerHTML)

function handleKey(e){
  
  if(itensText.includes(e.key))
  insert(e.key)
  else if(e.key ==='*')
  insert('*')
  else if(e.key ==='Enter')
  calcular()
  else if(e.key ==='Escape')
  clean()

}

window.addEventListener('keydown', handleKey)

function insert(key){
let textoResultado = resultado.innerHTML 
resultado.innerHTML = textoResultado + key
}

function handleInsert(e){
  insert(e.target.innerHTML)
}

btn.forEach((tecla)=>{
  tecla.addEventListener('click', handleInsert)
})

function clean(){

resultado.innerHTML = ''

}
limparTecla.addEventListener('click', clean)


function backSpace(){
  resultado.innerHTML = resultado.innerHTML.slice(0, -1)
}

backspace.addEventListener('click', backSpace)

window.addEventListener('keydown', (e)=>{
  if(e.key === 'Backspace')
  backSpace()
})


function calcular(){
  if(resultado)
  resultado.innerHTML = eval(resultado.innerHTML)
  
}
igual.addEventListener('click', calcular)


function handleAddClass(e){
  if(itensText.includes(e.key))
  document.getElementById(e.key).classList.add('ativo')
  else if(e.key ==='*')
  document.getElementById('*').classList.add('ativo')
  else if(e.key ==='Enter')
  document.getElementById('=').classList.add('ativo')
  else if(e.key ==='Escape')
  document.getElementById('esc').classList.add('ativo')
  else if(e.key === 'Backspace')
  document.getElementById('back').classList.add('ativo')

  
}
userEventStart.forEach((userEvent)=> window.addEventListener(userEvent, handleAddClass))

function handleRemoveClass(e){
  if(itensText.includes(e.key))
  document.getElementById(e.key).classList.remove('ativo')
  else if(e.key ==='*')
  document.getElementById('*').classList.remove('ativo')
  else if(e.key ==='Enter')
  document.getElementById('=').classList.remove('ativo')
  else if(e.key ==='Escape')
  document.getElementById('esc').classList.remove('ativo')
  else if(e.key === 'Backspace')
  document.getElementById('back').classList.remove('ativo')

}
userEventEnd.forEach((userEvent)=> window.addEventListener(userEvent, handleRemoveClass))
