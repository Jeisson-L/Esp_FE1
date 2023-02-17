import './App.css';
import Contador from './components/Contador';
import { DisplayProvider } from './context/displayContext';

function App() {

  return (
    <DisplayProvider>
      <div className="App">
        <Contador />
      </div>
    </DisplayProvider>
  );
}

export default App;