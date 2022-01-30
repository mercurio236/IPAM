import React from 'react'
import {
    Container,
    Logo,

} from './styled'
import IBGE from '../../assets/ibge.png';

export default function Header() {
    return (
        <Container>
            <Logo>
                <img src={IBGE}/>
            </Logo>
        </Container>
    );
}