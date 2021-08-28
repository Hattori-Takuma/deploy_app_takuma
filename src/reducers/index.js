import { INCREMENT, DECREMENT, RESET, GET_DATA } from '../action/index'



const reducer = (state, action,) => {
  switch (action.type) {
    case INCREMENT:
      return { ...state, count: state.count + 1 };
    case DECREMENT:
      return { ...state, count: state.count - 1 };
    case RESET:
      return { ...state, count: 0 };

    case GET_DATA:
      return { ...state, data: action.data }

    default:
      return state




  }

};

export default reducer;