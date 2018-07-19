# redux-ondispatch

redux-ondispatch is middleware that allows you to include a function to be executed when a redux action is dispatched.  Eg:

```js
function myAjaxAction(id) {
  return {
    type: FETCH_SOMETHING,
    payload: { id },
    onDispatch: (store, action) => {
      fetch(`/api/something/${action.payload.id}`)
      .then((something) => {
        store.dispatch({
          type: SOMETHING_FETCHED,
          something
        });
      });
    }
  };
}

store.dispatch(myAjaxAction(1));
```

## Usage

0) Requirements: `redux`

1) Install the package via npm or yarn

```
> npm install redux-ondispatch
```

or

```
> yarn add redux-ondispatch
```

2) Define the middleware as part of your redux store

```js
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers'; // Or wherever
import reduxOnDispatch from 'redux-ondispatch';

const store = createStore(reducers, applyMiddleware(
                                      reduxOnDispatch,
                                      // any other middleware
                                    ));
```

That's it!  Any action dispatched with a function assigned to a top-level `onDispatch` attribute will be executed when the action is dispatched.