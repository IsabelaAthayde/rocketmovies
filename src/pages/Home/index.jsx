import { Container, NewMovie } from './styles';
import { useState, useEffect } from 'react';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

import { AiOutlinePlus } from 'react-icons/ai';

import { api } from "../../services/api";

export function Home() {
    const [notes, setNotes] = useState([]);

    useEffect(() => {
        async function fectchNotes() {
            const response = await api.get("/movieNotes");
            setNotes(response.data)
        }
        fectchNotes()
    }, [])

    return (
        <Container>
            <Header />
            <main>
                <div>
                    <h1>Meus filmes</h1>
                    <aside>
                        <NewMovie to="/HandleNote">
                            <AiOutlinePlus/>
                            Adicionar Filme
                        </NewMovie>
                    </aside>
                </div>
                <section id="sections_container">
                    {
                    notes.map((note) => (
                        <Section
                        key={String(note.id)}
                        data={note}
                        />))
                    }
                </section>
            </main>
        </Container>
    )
}