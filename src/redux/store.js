import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'

//reducers
import authReducer from './slices/auth-slices.js'

const reducers = combineReducers({
	auth: authReducer,
})

const persistConfig = {
	key: 'root',
	storage,
	whitelist: ['users', 'auth'],
}

const persistedReducer = persistReducer(persistConfig, reducers)

const store = configureStore({
	reducer: persistedReducer,
	middleware: [thunk],
})

export default store
