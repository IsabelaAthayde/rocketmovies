import {Create, Form} from "./styles";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

import { api } from "../../services/api";

export function Delete() {

    const [notes, setNotes] = useState([]);
    const [selected, setSelected] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        async function fectchNotes() {
            const response = await api.get("/movieNotes");
            setNotes(response.data)
        }
        fectchNotes()
    }, [])

    function handleSelected(event) {
        const isChecked = event.target.checked == true;

        if(!isChecked) {
         const index = selected.indexOf(event.target.name);
         selected.splice(index, 1);
         return
        }
        setSelected([...selected, event.target.name])

    }

    
    function handleRemoveNote() {
        const noMovies = notes.length === 0;
        console.log(notes)

        if(noMovies) {
            alert("Não há filmes salvos! Adicione um novo filme")
            return;
        }

         notes.map((note) => {
             selected.map((selectedNote) => {
                 const existingNote = selectedNote === note.title;

                 if(existingNote) {
                    api.delete(`/movieNotes/${note.id}`);
                }
            })
        })
        alert("Filme removido com sucesso!")
        setSelected([]);
        navigate("/");
    }

return (
    <Create>
        <h1>Filmes Salvos</h1>
        <Form>
            <section id="sections_container">
                    {
                    notes.map((note) => (
                        <section key={note.id}>
                            <input type="checkbox" name={note.title} onChange={e => handleSelected(e)}/>
                            {note.title}
                        </section>
                    ))
                    }
            </section>

                <button title="Excluir Filme" type="button" onClick={handleRemoveNote}>Excluir Filme</button>
        </Form>
    </Create>
)
}