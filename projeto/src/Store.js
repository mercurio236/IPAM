import { createStore, combineReducers } from 'redux';
import estadosReducer from './Redux/reducers/estadosReducer';
import ufSelectedReducer from './Redux/reducers/ufSelectedReducer';
import municipiosReducer from './Redux/reducers/municipiosReducer';
import municipioSelectedReducer from './Redux/reducers/municipioSelectedReducer';

const allReducers = combineReducers({
    estados: estadosReducer,
    municipios: municipiosReducer,
    ufSelecionada: ufSelectedReducer,
    municipioSelecionado: municipioSelectedReducer,

  })
export default createStore(allReducers);