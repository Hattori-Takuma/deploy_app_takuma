import { INCREMENT, DECREMENT, RESET } from '../action/index'



const reducer = (state = [], action,) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };






  }

};

export default reducer;