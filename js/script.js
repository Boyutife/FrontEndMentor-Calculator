import calculate from './calculate.js'

const body = document.querySelector('body')
const themeToggleCircle = document.getElementById('theme-toggle-indicator')
const themeRadios = document.querySelectorAll('input[name="theme_mode"]')
const keys = document.querySelectorAll('.key')
const screen = document.getElementById('screen')
const MAX_PART_LENGTH = 20
const operators = ['+', '-', '/', 'x']

let currentInput = ''
let justEvaluated = false

themeRadios.forEach((radio, index) => {
  radio.addEventListener('change', () => {
    const selectedTheme = radio.value

    body.classList.remove('theme1', 'theme2', 'theme3')
    body.classList.add(selectedTheme)

    themeToggleCircle.style.transform = `translateX(${index * 100}%)`

    localStorage.setItem('calcTheme', selectedTheme)
  })
})

const savedTheme = localStorage.getItem('calcTheme')
if (savedTheme) {
  body.classList.add(savedTheme)
  const index = Array.from(themeRadios).findIndex((r) => r.value === savedTheme)
  themeToggleCircle.style.transform = `translateX(${index * 100}%)`
  themeRadios[index].checked = true
}

function handleInput(key) {
  if (currentInput === 'Error') {
    currentInput = ''
  }
  const parts = currentInput.split(/[\+\-x\/]/)
  const lastPart = parts[parts.length - 1]
  if (justEvaluated && (!isNaN(key) || key === '.')) {
    currentInput = ''
    justEvaluated = false
  } else {
    justEvaluated = false
  }

  if (!isNaN(key)) {
    if (lastPart.length < MAX_PART_LENGTH) {
      currentInput += key
    }
  } else if (operators.includes(key)) {
    if (currentInput === '' && key !== '-') return
    const lastChar = currentInput[currentInput.length - 1]
    if (!operators.includes(lastChar)) {
      currentInput += key
    }
  } else if (key === '.') {
    const parts = currentInput.split(/[+\-*/]/)
    const lastPart = parts[parts.length - 1]
    if (!lastPart.includes('.')) {
      currentInput += key
    }
  } else if (key === '=' || key === 'Enter') {
    if (currentInput && /[0-9]$/.test(currentInput)) {
      currentInput = calculate(currentInput)
      justEvaluated = true
    }
  } else if (key === 'Del' || key === 'Backspace') {
    if (currentInput.length > 0) {
      currentInput = currentInput.slice(0, -1)
    }
  } else if (key === 'RESET' || key === 'Escape') {
    currentInput = ''
  }

  updateScreen()
}

// UI Button Events
keys.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const key = e.target.getAttribute('data-key')
    handleInput(key)
  })
})

//  physical keyboard Events
document.addEventListener('keydown', (e) => {
  let key = e.key
  const allowedKeys = [
    '0',
    '1',
    '2',
    '3',
    '4',
    '5',
    '6',
    '7',
    '8',
    '9',
    '+',
    '-',
    '*',
    '/',
    'x',
    '.',
    '=',
    'Enter',
    'Backspace',
    'Escape',
    'Del',
  ]
  if (allowedKeys.includes(key)) {
    e.preventDefault()
    handleInput(key)
  }
})

function updateScreen() {
  const len = currentInput.length
  if (len > 13) {
    screen.style.fontSize = '1.5rem'
  } else if (len > 10) {
    screen.style.fontSize = '2rem'
  } else {
    screen.style.fontSize = '2.5rem'
  }
  screen.value = currentInput
}
