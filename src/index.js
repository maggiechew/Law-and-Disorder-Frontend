import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



const button = document.querySelector('.btn')
const menu = document.querySelector('nav ul')

function eventHandler() {
  menu.classList.toggle('visible')
}
button.addEventListener('click', eventHandler)
