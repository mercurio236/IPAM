import styled from 'styled-components'

export const Container = styled.div`
    position: sticky;
    top: 0;
    opacity: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 2rem;
    padding-right: 2rem;
    z-index: 2;
    background-color: #F2F2F2;

`

export const Logo = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;

    img{
        width: 150px;
        height: 50px;
    }
    h2{
        color: #99989B;
        font-size: 1rem;
    }
`;

