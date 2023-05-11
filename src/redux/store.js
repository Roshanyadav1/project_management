import { configureStore } from "@reduxjs/toolkit";
import { spaceService } from "../services/spaceService";
import reducers from "./rootReducer";

const store = configureStore({
    reducer: {
        reducers,
        [spaceService.reducerPath]: spaceService.reducer,
    },

    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(
            spaceService.middleware,
        ),
});


export { store };
