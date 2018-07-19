export default (store) => (next) => (action) => {
  if(typeof action.onDispatch === "function") {
    action.onDispatch(store, action);
  }

  return next(action);
};
