import {Create, Form} from "./styles";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

import { api } from "../../services/api";

import { Button } from "../Button";
import { NoteItem } from "../NoteItem";

export function New() {
    const [tags, setTags] = useState([]);
    const [newTags, setNewTags] = useState("");

    const [title, setTitle] = useState("");
    const [rating, setRating] = useState(0);
    const [synopsis, setSynopsis] = useState("");
    
    const navigate = useNavigate();

    function handleAddTags() {
        setTags(prevState => [...prevState, newTags])
        setNewTags("");
    }
    function handleRemoveTags(deleted) {
        setTags(prevState => prevState.filter((tag) => tag !== deleted))
    }

    async function handleNewNote(){
        if(!title) {
            return alert("Por favor digite um título");
        }

        if(newTags) {
            return alert("Vôce deixou uma tag no campo de adicionar, clique no botão de adicionar ou deixe a em branco para continuar.")
        }

        await api.post("/movieNotes", {
            title,
            rating,
            description: synopsis,
            tags
        })

        alert("Filme adicionado com sucesso!")
        navigate("/");
    }

return (
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
                min="1" 
                max="5" 
                placeholder="Sua nota (de 1 a 5)" 
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
            
            <Button title="Salvar Alterações" type="button" onClick={handleNewNote}/>

        </Form>
    </Create>
)
}