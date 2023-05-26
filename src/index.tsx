import { StrictMode } from 'react'
import * as ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { DefaultLayout } from 'components/Layout'
import { Home } from 'pages/Home'
import './index.css'

const root = ReactDOM.createRoot(document.querySelector('#root') as HTMLElement)
root.render(
  <StrictMode>
    <Toaster position='top-right' reverseOrder={false} />
    <DefaultLayout>
      <Home />
    </DefaultLayout>
  </StrictMode>,
)
