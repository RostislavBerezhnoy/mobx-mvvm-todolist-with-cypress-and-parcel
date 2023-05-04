import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Home } from 'pages/Home'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <StrictMode>
    <Home />
  </StrictMode>,
)
