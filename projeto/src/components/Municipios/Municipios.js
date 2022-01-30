import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ApiService } from '../../service/api';
import { addMunicipios, selectedMunicipio } from '../../Redux/actions/municipiosAction'
import { DataGrid } from '@material-ui/data-grid';
import {
    FormControl,
    InputLabel,
    Select,
    Container
} from '@material-ui/core';
import './styledMunicipio.css';


export default function Municipos() {
    const dispatch = useDispatch();
    const redux = useSelector(state => state)
    const [allMunicipios, setAllMunicipios] = useState([]);
    const [selectedMunicipios, setSelectedMunicipios] = useState('');
    const [ufSelecionadaRedux, setUfSelecionadaRedux] = useState('');

    const columns = [

        { field: 'muni', headerName: 'Município', width: 250 },
        { field: 'microRegion', headerName: 'Microrregião', width: 250 },
        { field: 'uf', headerName: 'UF', width: 250 },
    ];

    const rows = allMunicipios.map(item => {
        return {
            id: item.id,
            muni: item.nome,
            microRegion: item.microrregiao.nome,
            uf: item.microrregiao.mesorregiao.UF.nome,
        }
    })



    useEffect(() => {
        getMunicipios();
    }, [ufSelecionadaRedux])

    useEffect(() => {
        dispatch(addMunicipios(allMunicipios))
    }, [allMunicipios, redux])

    useEffect(() => {
        setUfSelecionadaRedux(redux.ufSelecionada)
    }, [redux.ufSelecionada])

    useEffect(() => {
        if (selectedMunicipios == 'vazio') {
            alert('Escolha um município!')
        } else {
            dispatch(selectedMunicipio(selectedMunicipios))
        }

    }, [selectedMunicipios])

    async function getMunicipios() {
        setAllMunicipios(await ApiService.get(`estados/${ufSelecionadaRedux}/municipios`))
    }

    function municipioSelected(event) {
        setSelectedMunicipios(event.target.value)
    }

    return (
        <Container fluid>
            {ufSelecionadaRedux == '' ?

                ''
                :

                <>
                    <div className='comboMunicipio'>
                        <FormControl variant='outlined'>
                            <Select native name='Municipios' id='Municipios' onChange={municipioSelected}>

                                <option value="vazio">Selecione um Município</option>

                                {allMunicipios.length != 0 ?
                                    allMunicipios.map((state) => {
                                        return <option key={state.id} value={state.id} >{state.nome}</option>
                                    })
                                    :
                                    ''
                                }
                            </Select>
                        </FormControl>
                    </div>

                    
                        <DataGrid autoHeight rows={rows} columns={columns} pageSize={5} />
                    
                </>

            }

        </Container>



    );
}