import { useContext } from 'react';
import { GlobalContext } from '../../contexts/AppContext';

export const P = () => {
  const {
    state: { body },
  } = useContext(GlobalContext);

  return (
    <>
      <p>{body}</p>
    </>
  );
};
