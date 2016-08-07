
// state is all the data from the API
// not using combineReducers from redux because it expects that the
// state is *only* what the reducers handle.  We want other keys,
// eg. header and footer data that don't have reducers
export default function reducer(state = {}, action) {

    // merge our reducers in with the state
    return Object.assign({}, state, {

    });

}
