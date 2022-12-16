import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap'
import './assets/styles.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
// redux
import { PersistGate } from 'redux-persist/integration/react'
import { persistStore } from 'redux-persist'
const root = ReactDOM.createRoot(document.getElementById('root'))
const persistor = persistStore(store)

root.render(
	<StrictMode>
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
				<BrowserRouter>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
				</BrowserRouter>
			</PersistGate>
		</Provider>
	</StrictMode>
)
