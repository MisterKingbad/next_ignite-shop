import {ImageContainer, SuccessContainer} from '../styles/pages/success';	
import React from "react";
import Link from 'next/link';

export default function Success() {
    return(
        <SuccessContainer>
            <h1>Compra Efetuada Com Sucesso</h1>

            <ImageContainer>

            </ImageContainer>

            <p>
                Uhuul <strong>Diego Fernandes</strong>Diego Fernandes, sua <strong>Camiseta Beyond the Limits</strong> já está a caminho da sua casa. 
            </p>

            <Link href="/">
                Voltar ao catalogo
            </Link>
        </SuccessContainer>
    )
}