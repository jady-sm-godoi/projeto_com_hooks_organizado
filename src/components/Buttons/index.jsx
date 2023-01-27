import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

// eslint-disable-next-line react/prop-types
export const Buttons = ({ tipo, text }) => {
  const { dispatch } = useContext(GlobalContext);

  return (
    <button
      onClick={() =>
        dispatch({ type: tipo, payload: new Date().toLocaleString('pt-BR') })
      }
    >
      {text}
    </button>
  );
};
