import React    from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import configureStore from "./redux/configureStore.js";
import rootReducer from "./redux/rootReducer.js";
import getInitialState from "./redux/initialState/getInitialState.js";

import AppContainer from "./containers/AppContainer.js";

const intialState = getInitialState();

const store = configureStore(rootReducer, intialState);


ReactDOM.render(
    <Provider store={store}>
        <AppContainer />
    </Provider>,
    document.querySelector(".js-mount")
);
