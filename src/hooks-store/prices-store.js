import { initStore } from './store';

const configureStore = () => {
  const actions = {
    UPDATE: (curState, newprices) => {
      
      console.log(curState)
      console.log(newprices)
      return { prices: newprices };
    }
  };
  initStore(actions, {
    prices: [
    
    ]
  });
};

export default configureStore;