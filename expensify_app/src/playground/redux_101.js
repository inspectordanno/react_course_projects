import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + incrementBy
      };
    case 'DECREMENT':
      const decrementby = typeof action.decrementby === 'number' ? action.decrementby : 1;
      return {
        count: state.count - decrementby
      };
    case 'SET':
      return {
        count: action.count
      }
    case 'RESET':
      return {
        count: state.count = 0
      };
    default:
      return state;
  }
});

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch({
  type: 'INCREMENT',
  incrementBy: 5
});

store.dispatch({
  type: 'INCREMENT'
});

store.dispatch({
  type: 'RESET'
});

store.dispatch({
  type: 'DECREMENT',
  decrementby: 10
});

store.dispatch({
  type: 'DECREMENT',
});

store.dispatch({
  type: 'SET',
  count: 101
})


