import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <StrictMode>
    <h4>Hi</h4>
  </StrictMode>,
)
