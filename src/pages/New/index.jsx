import { Container, Main, Create, Form} from "./styles";
import { Link } from 'react-router-dom'

import { FiArrowLeft } from "react-icons/fi";


import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

export function New() {
    return (
        <Container>
            <Header />
            <Main>
                <Link to="/" id="a">
                    <FiArrowLeft/>
                    Voltar
                </Link>
                <Create>
                    <h1>Novo Filme</h1>
                    <Form>
                        <div id="input_container">    
                            <input type="text" id="title" placeholder="Título" />
                            <input type="number" id="rating" min="0" max="5" placeholder="Sua nota (de 0 a 5)" />
                        </div>
                        <textarea id="obs" rows="10" cols="5" placeholder="Observações">
                        </textarea>

                        
                        <span>Marcadores</span>
                        <div id="markers">
                            <NoteItem value="React"></NoteItem>
                            <NoteItem isNew placeholder="Novo Marcador"></NoteItem>
                        </div>
                       
                        <div id="btns">
                            <button title="Excluir Filme" type="button">Excluir Filme</button>
                            <Button title="Salvar Alterações" type="Submit"/>
                        </div>
                    </Form>
                </Create>
            </Main>
        </Container>
    )
}