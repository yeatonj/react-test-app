import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Greeting from './Greeting.jsx'
import Favorite_food from './Favorite_food.jsx'
import { Second_favorite, Multiple } from './Favorite_food.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Greeting />
    <Favorite_food />
    <Second_favorite />
    <Multiple />
  </StrictMode>,
)
