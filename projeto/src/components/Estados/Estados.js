import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiService } from '../../service/api';
import { addEstados } from '../../Redux/actions/estadosAction'
import { addUF } from '../../Redux/actions/ufAction'
import { DataGrid } from '@material-ui/data-grid';
import {
    FormControl,
    InputLabel,
    Select,
    Container
} from '@material-ui/core';
import './styledEstado.css';




export default function Estados() {
    const dispatch = useDispatch();
    const redux = useSelector(state => state)
    const [allStates, setAllStates] = useState([]);
    const [selectedState, setSelectedState] = useState('');

    const columns = [

        { field: 'UF', headerName: 'UF', width: 100 },
        { field: 'state', headerName: 'Estado', width: 250 },
        { field: 'region', headerName: 'Região', width: 150 },
    ];

    const rows = allStates.map(item => {
        return {
            id: item.id,
            UF: item.sigla,
            state: item.nome,
            region: item.regiao.nome
        }
    })

    useEffect(() => {
        console.log(redux)
    }, [redux])

    useEffect(() => {
        getEstados();
    }, [])

    useEffect(() => {
        dispatch(addEstados(allStates))
    }, [allStates, redux])

    useEffect(() => {
        if (selectedState == 'vazio') {
            alert("Escolha um estado!")
        } else {
            dispatch(addUF(selectedState))
        }

    }, [selectedState])

    async function getEstados() {
        setAllStates(await ApiService.get('estados?orderBy=nome'))
    }

    function stateSelected(event) {
        setSelectedState(event.target.value)
    }

    return (
        <Container className="containerEstado">
            <div className='comboEstado'>

                <FormControl variant='outlined'>
                    <Select native autoFocus name='estados' id='estados' onChange={stateSelected}>
                        <option value="vazio">Selecione um Estado</option>
                        {
                            allStates.length != 0 ?

                                allStates.map((state) => {
                                    return <option key={state.id} value={state.sigla} >{state.nome}</option>
                                })

                                :

                                ''
                        }
                    </Select>
                </FormControl>
            </div>
            <div className='tabelaEestado'>
                <DataGrid autoHeight rows={rows} columns={columns} pageSize={5} />
            </div>
        </Container>
    );
}