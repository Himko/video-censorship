import React from 'react';
import { Provider } from 'react-redux';
import { Main } from './components/Main/Main';
import { store } from './configureStore';

function App() {
    return (
        <Provider store={store}>
            <Main />
        </Provider>
    );
}

export default App;
