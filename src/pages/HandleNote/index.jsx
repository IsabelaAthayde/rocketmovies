import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { FiArrowLeft } from "react-icons/fi";
import { FiX, FiPlus } from 'react-icons/fi';

import { Container, Main} from "./styles";

import { Header } from "../../components/Header";
import { New } from "../../components/New";
import { Delete } from "../../components/Delete";
import { Button } from "../../components/Button";


export function HandleNote() {
    const [mode, setMode] = useState();
    const [style, setStyle] = useState("");
    
    const navigate = useNavigate();

    useEffect(() => {
        setMode(<New />)
    }, [])

    function handleSwitchMode(event) {
        const addButton = event.target.id == "add"

        if(addButton) {
            setMode(<New />)
            console.log(mode)
            return;
        } 
        setMode(<Delete />)
    }

    function handleBack() {
        navigate("/");
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
                    <Button id="add" title="Adicionar nota" icon={<FiPlus/>} onClick={handleSwitchMode}/>
                    <Button id="del" title="Excluir nota" icon={<FiX/>} onClick={handleSwitchMode}/>
                </section>
                
                {mode}
            </Main>
        </Container>
    )
}