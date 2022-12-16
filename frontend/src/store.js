import { combineReducers, applyMiddleware, createStore } from 'redux'
// import { configureStore } from '@reduxjs/toolkit'
// import { configureStore } from '@reduxjs/toolkit'
// import rootReducer from './reducers'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { productListReducer} from './reducers/productReducers'


const reducer = combineReducers({
    productList : productListReducer
})

const initialState = {}

const middleware = [thunk]

// const store = configureStore(
//     reducer,
//     initialState,
//     composeWithDevTools(applyMiddleware(...middleware)))


const store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware)))



    
    // const store = configureStore({
    //   reducer: rootReducer
    // })
    
    // export default store

export default store