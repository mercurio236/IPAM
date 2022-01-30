import Header from './components/Header/Header';
import Estados from './components/Estados/Estados';
import Municipios from './components/Municipios/Municipios';
import { Provider } from 'react-redux';
import MunicipioFinal from './components/MunicipioFinal/MunicipioFinal';
import Store from './Store';


function App() {
  return (
    <div>
      <Provider store={Store}>
        <Header />
        <Estados />
        <Municipios />
        <MunicipioFinal />
      </Provider>
    </div>
  );
}
export default App;
