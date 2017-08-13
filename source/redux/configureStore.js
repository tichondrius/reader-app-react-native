import { applyMiddleware, compose, createStore } from 'redux';
import { persistStore, autoRehydrate } from 'redux-persist';
import { AsyncStorage } from 'react-native'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import rootReducer from './modules';
import rootSaga from './sagas'

export default function configureStore() {
  const middleware = createSagaMiddleware();
  const store = createStore(rootReducer,
    compose(applyMiddleware(logger, middleware), autoRehydrate()));
  middleware.run(rootSaga);
  persistStore(store, {storage: AsyncStorage})  
  return store;
}