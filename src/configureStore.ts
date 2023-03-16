import { createStore, applyMiddleware} from 'redux';
import { scenarioReducer } from './reducers/scenario';
import createSagaMiddleware from 'redux-saga';

import { composeWithDevTools } from 'redux-devtools-extension';

import { initSaga } from './sagas/scenarioSagas';


const sagaMiddleware = createSagaMiddleware(); 


export const store = createStore(scenarioReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(initSaga);