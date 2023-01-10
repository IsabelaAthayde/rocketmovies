import { Container, Main, Create, Form} from "./styles";
import { Link } from 'react-router-dom';
import { useState } from 'react';

import { FiArrowLeft } from "react-icons/fi";

import { useAuth } from '../../hooks/auth';

import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { NoteItem } from "../../components/NoteItem";

export function New() {
    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [synopsis, setSynopsis] = useState("");
    
    const { createMovieNote } = useAuth();

    function handleAddTags() {
        setTags(prevState => [...prevState, newTags])
        setNewTags("");
    }
    function handleRemoveTags(deleted) {
        setTags(prevState => prevState.filter((tag) => tag !== deleted))
    }

    function handleSaveMovieNote(){
        console.log(title, rating, synopsis, tags)
        const movieNote = {
            title,
            rating,
            description: synopsis,
            tags
        }
        createMovieNote({movieNote})
    }

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
                            <input 
                            type="text" 
                            id="title" 
                            placeholder="Título" 
                            onChange={e => setTitle(e.target.value)}
                            />

                            <input 
                            type="number" 
                            id="rating" 
                            min="0" 
                            max="5" 
                            placeholder="Sua nota (de 0 a 5)" 
                            onChange={e => setRating(e.target.value)}
                            />

                        </div>
                           
                        <textarea id="obs" rows="10" cols="5" placeholder="Observações/Sinopse"
                         onChange={e => setSynopsis(e.target.value)}>
                        </textarea>

                        
                        <span>Marcadores</span>
                        <div id="markers">
                            {
                                tags.map((tag, index) => (
                                    <NoteItem 
                                    key={String(index)}
                                    value={tag}
                                    onClick={() => {handleRemoveTags(tag)}}
                                    ></NoteItem>
                                ))
                            }

                            <NoteItem 
                            isNew 
                            placeholder="Novo Marcador"
                            onChange={e => setNewTags(e.target.value)}
                            value={newTags}
                            onClick={handleAddTags}
                            />
                        </div>
                       
                        <div id="btns">
                            <button title="Excluir Filme" type="button">Excluir Filme</button>
                            <Button title="Salvar Alterações" type="button" onClick={handleSaveMovieNote}/>
                        </div>
                    </Form>
                </Create>
            </Main>
        </Container>
    )
}