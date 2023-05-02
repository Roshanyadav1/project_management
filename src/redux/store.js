import { configureStore } from "@reduxjs/toolkit";
import { authServices } from "../services/authServices";

//Persisted in localsotorage
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
} from "redux-persist";

import storage from "redux-persist/lib/storage";
import reducers from "./rootReducer";


import { encryptTransform } from 'redux-persist-transform-encrypt';

const persistConfig = {
    key: "adsprint",
    version: 1,
    storage,
    transforms: [
        encryptTransform({
            secretKey: 'hello',
            onError: function (error) {
                // Handle the error.
                console.log(error);
            },
        }),
    ],
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
    reducer: {
        rootReducer: persistedReducer,
        [authServices.reducerPath]: authServices.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(
            authServices.middleware,
        ),
});

const persistor = persistStore(store);

export { store, persistor };
