import { useReducer } from 'react';

const INITIAL_STATE = { name: '', text: '', rating: 0 };

const SET_NAME_ACTION = 'SET_NAME_ACTION';
const SET_TEXT_ACTION = 'SET_TEXT_ACTION';
const SET_RATING_ACTION = 'SET_RATING_ACTION';
const CLEAR_ACTION = 'CLEAR_ACTION';

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_NAME_ACTION:
      return { ...state, name: payload };
    case SET_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_RATING_ACTION:
      return { ...state, rating: payload };
    case CLEAR_ACTION:
      return INITIAL_STATE;
    default:
      return state;
  }
};

export const useForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_STATE);

  const setName = (value) =>
    dispatch({ type: SET_NAME_ACTION, payload: value });
  const setText = (value) =>
    dispatch({ type: SET_TEXT_ACTION, payload: value });
  const setRating = (value) =>
    dispatch({ type: SET_RATING_ACTION, payload: value });
  const clear = () => dispatch({ type: CLEAR_ACTION });

  return { form, setName, setText, setRating, clear };
};
