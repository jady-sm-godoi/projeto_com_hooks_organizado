import { useReducer } from 'react';
import { createContext } from 'react';
import { globalState } from './data';

export const GlobalContext = createContext();

// eslint-disable-next-line no-unused-vars
const reducer = (state, action) => {
  const { title, counter } = state;
  switch (action.type) {
    case 'muda':
      // console.log('chamou muda');
      return { ...state, title: action.payload };
    case 'inverter':
      // console.log('chamou inverter');
      return { ...state, title: title.split('').reverse().join('') };
    case 'contador':
      // console.log('chamou contador');
      return { ...state, counter: counter + 1 };
  }
  return { ...state };
};

// eslint-disable-next-line react/prop-types
export const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, globalState);
  return (
    <GlobalContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
};
