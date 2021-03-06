import { createStore } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
import rootReducer from './reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel2
};

const reducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(reducer, typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);
