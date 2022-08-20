import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import App from './App'
import AuthContextProvider from './context/AuthContext/AuthContextProvider'
import store from './store/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
    <Provider store={store}>
        <AuthContextProvider>
            <App />
        </AuthContextProvider>
    </Provider>
)
