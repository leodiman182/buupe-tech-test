import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AppProvider from "./context/AppProvider.tsx";
import {theme} from "./styles/ThemeProvider.ts";
import {ThemeProvider} from "@mui/material";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AppProvider>
      <ThemeProvider theme={theme}>
        <App/>
      </ThemeProvider>
    </AppProvider>
  </StrictMode>
)
