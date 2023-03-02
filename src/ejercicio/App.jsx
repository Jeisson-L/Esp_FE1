import { Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import Formulario from "./components/Formulario/Formulario";
import "./App.css";
import {Formularioprovider} from './context/ContextoFormulario';
import { QueryClient, QueryClientProvider } from 'react-query'

const queryClient = new QueryClient()

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
      <Formularioprovider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/formularioIngreso" element={<Formulario />} />
        </Routes>
      </Formularioprovider>
      </QueryClientProvider>
    </div>
  );
}

export default App;