import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './Routes/Index.tsx'
import {Provider} from "react-redux"
import { Store } from 'lucide-react'
import { ThemeProvider } from './Providers/ThemeProvider.tsx'
import store from './State/Store.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
  <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <Provider store={store}>
      <RouterProvider router={router}>
    </RouterProvider>
    </Provider>
  </ThemeProvider>
  </StrictMode>,
)
