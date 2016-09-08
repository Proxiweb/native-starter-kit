
'use strict';

import { AsyncStorage } from 'react-native'
import { createStore, applyMiddleware, compose } from 'redux'
import devTools from 'remote-redux-devtools'
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist'
import reducer from './reducers'
import sagas from './sagas';

export default function configureStore(onCompletion) {
	const sagaMiddleware = createSagaMiddleware();

	const enhancer = compose(
		applyMiddleware(sagaMiddleware),
		devTools({
	     	name: 'ProxiwebStarterKit', realtime: true
	    }),
	);

	let store = createStore(reducer, enhancer);
	sagas.map(sagaMiddleware.run);
	persistStore(store, {storage: AsyncStorage}, onCompletion);

	return store
}
