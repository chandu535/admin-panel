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
import { configureStore } from "@reduxjs/toolkit";
// import { createWrapper } from "next-redux-wrapper";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

import { combinedReducer, combinedMiddleware } from "./Modules";
import pesistStorage from "./persistateStore"
import storage from "./persistateStore";

export const makeStore = ({ isServer }: any) => {
    /* istanbul ignore else */
    if (typeof isServer === undefined || isServer) {
        isServer = typeof window === "undefined";
    }

    /* istanbul ignore else */
    if (isServer) {
        //If it's on server side, create a store
        return configureStore({
            reducer: combinedReducer,
            middleware: (getDefaultMiddleware: any) =>
                getDefaultMiddleware().concat(combinedMiddleware),
        });
    } else {
        /* istanbul ignore next */

        /* istanbul ignore next */
        const rootReducer = (state: any, action: any) => {


            if (action.type === 'USER_LOGOUT') {
                storage.removeItem('persist:root')

                return combinedReducer(undefined, action)
            }

            return combinedReducer(state, action)
        }

        const persistConfig = {
            key: "yoda_pharmacy",
            version: 1,
            storage: pesistStorage
        };

        /* istanbul ignore next */
        const persistedReducer = persistReducer(persistConfig, rootReducer); // Create a new reducer with our existing reducer

        /* istanbul ignore next */
        const store: any = configureStore({
            reducer: persistedReducer,
            middleware: (getDefaultMiddleware: any) =>
                getDefaultMiddleware({
                    serializableCheck: {
                        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
                    },
                }).concat(combinedMiddleware),
        });

        /* istanbul ignore next */
        // store.__persistor = persistStore(store);
        const persistor = persistStore(store)
        /* istanbul ignore next */
        return { store, persistor };
    }
};


setupListeners(makeStore)

export const store = makeStore;
