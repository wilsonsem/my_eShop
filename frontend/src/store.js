import { combineReducers, applyMiddleware, createStore } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { productListReducer, productDetailsReducer} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducers'


const reducer = combineReducers({
    productList : productListReducer,
    productDetails : productDetailsReducer,
    cart : cartReducer
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