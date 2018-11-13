import React from 'react';
import ReactDom from 'react-dom';
import {AppContainer} from 'react-hot-loader';
import {Provider} from 'react-redux';
import store from './redux/store';
import {BrowserRouter as Router} from 'react-router-dom';
import App from 'components/App/App.jsx';

/*初始化*/
renderWithHotReload(App)

/*热更新*/
if (module.hot) {
    module.hot.accept('components/App/App.jsx', () => {
        const NextApp = require('components/App/App.jsx').default;
        renderWithHotReload(NextApp);
    });
}

function renderWithHotReload(App) {
    ReactDom.render(
        <AppContainer>
            <Provider store={store}>
                <Router>
                    <App/>
                </Router>
            </Provider>
        </AppContainer>,
        document.getElementById('app')
    )
}