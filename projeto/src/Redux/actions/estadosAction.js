export const addEstados = (value) => {
    return {
        type: 'ADDESTADOS',
        payload: value || ''
    }
}