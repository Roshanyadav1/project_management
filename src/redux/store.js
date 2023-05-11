import { configureStore } from "@reduxjs/toolkit";
import { spaceService } from "../services/spaceService";
import reducers from "./rootReducer";

const persistedReducer = persistReducer(reducers);

const store = configureStore({
    reducer: {
        rootReducer: persistedReducer,
        [spaceService.reducerPath]: spaceService.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(
            spaceService.middleware,
        ),
});

const persistor = persistStore(store);

export { store, persistor };
