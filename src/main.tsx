import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import GlobalStyles from "./GlobalStyles";

createRoot(document.getElementById('root')!).render(
    <>
        <GlobalStyles />
        <App />
    </>


)
