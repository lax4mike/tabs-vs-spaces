import { createStore, applyMiddleware, compose } from "redux";
import thunkMiddleware from "redux-thunk";


// create a store with middleware applied
// also attach it to the devToolsExtension
export default function configureStore(rootReducer, initialState, middlewares = []) {
    return createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(thunkMiddleware, ...middlewares),
            // https://github.com/zalmoxisus/redux-devtools-extension#2-use-with-redux
            window.devToolsExtension ? window.devToolsExtension() : x => x
        )
    );
}
