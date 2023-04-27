import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'

// importo los archivos css
import "../src/components/Login/Login.css"
import "../src/components/Register/Register.css"
import "./css/App.css";
import "./css/estiloPrincipal.css";
import "./css/footer.css";
import "./css/head.menu.css";
import "./css/reset.css";
import './index.css'



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
        <App />
    </QueryClientProvider>
  </React.StrictMode>,
)
