export const addUF = (value) => {
    return {
        type: 'ADDUF',
        payload: value || ''
    }
}