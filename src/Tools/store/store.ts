// Store
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer, PURGE, FLUSH, PAUSE, PERSIST, REHYDRATE } from 'redux-persist'
import storage from "redux-persist/lib/storage"

// reducers 
import ProductsSlice from "./ProductsSlice/ProductsSlice"
import CategoriesSlice from "./CategoriesSlice/CategoriesSlice"
import CartSlice from "./CardSlice/CardSlice"
import ArrivalsSlice from "./NewArrivals/ArrivalsSlice"
import BestSellerSlice from "./BestSeller/BestSellerSlice"
import SpecialOffersSlice from "./SpecialOffers/SpecialOffersSlice"
import AuthSlice from "./auth/authSlice"


const persistRootConfig = {
    key: 'root',
    storage,
    whitelist: ["cart", "auth"]
}

const persistAuthConfig = {
    key: "auth",
    storage,
    whitelist: ["data", "accessToken"]
}

const rootReducer = combineReducers({
    cart: CartSlice,
    product: ProductsSlice,
    categories: CategoriesSlice,
    arrivals: ArrivalsSlice,
    bestSeller: BestSellerSlice,
    specialOffers: SpecialOffersSlice,
    auth: persistReducer(persistAuthConfig, AuthSlice)
})

const persistorsReducer = persistReducer(persistRootConfig, rootReducer)

export const store = configureStore({
    reducer:persistorsReducer,
    middleware: (getDefaultMiddelware) =>
        getDefaultMiddelware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE]
            }
        })
})

export const persistorsStore = persistStore(store)


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
