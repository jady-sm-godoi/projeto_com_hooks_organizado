import './App.css';
import { Div } from './components/DIV';
import { AppContext } from './contexts/AppContext';

function App() {
  return (
    <AppContext>
      <Div />
    </AppContext>
  );
}

export default App;
