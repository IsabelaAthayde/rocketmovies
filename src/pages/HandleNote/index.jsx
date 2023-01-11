import { Container, Main} from "./styles";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { FiArrowLeft } from "react-icons/fi";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { New } from "../../components/New";
import { Delete } from "../../components/Delete";

export function HandleNote() {
   
    function handleBack() {
        navigate(-1);
    }

    return (
        <Container>
            <Header />
            <Main>
                <button id="return" onClick={handleBack} >
                    <FiArrowLeft/>
                    Voltar
                </button>
                <section id="switch">
                    <button id="add">Adicionar nota</button>
                    <button id="del">Excluir nota</button>
                </section>
                
                <New />
            </Main>
        </Container>
    )
}