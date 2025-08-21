import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import ThemeProvider from './context/ThemeContext.jsx'

import { ToastContainer } from 'react-toastify'

import { Provider } from 'react-redux'
import store from './redux-Toolkit/store.jsx'

createRoot(document.getElementById('root')).render(
    <BrowserRouter>

        <Provider store={store}>
            <ThemeProvider>
                <App />
            </ThemeProvider>

            <ToastContainer
                position="top-center"
                autoClose={2000}
                closeOnClick
                theme="colored"
            />
        </Provider>

    </BrowserRouter>
)
