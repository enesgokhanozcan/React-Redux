import './App.css';
import Counter from './components/Counter';
import { ReduxCount } from './counter/ReduxCount';

function App() {
  return (
    <div className="App">
      <Counter/>
      <ReduxCount/>
    </div>
  );
}

export default App;
