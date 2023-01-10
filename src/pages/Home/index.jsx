import { Container, NewMovie } from './styles';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

import { AiOutlinePlus } from 'react-icons/ai';

import { useAuth } from '../../hooks/auth';


export function Home() {
    const { showMovieNotes, notes } = useAuth();

    showMovieNotes()
    console.log(notes)
    return (
        <Container>
            <Header />
            <main>
                <div>
                    <h1>Meus filmes</h1>
                    <aside>
                        <NewMovie to="/new">
                            <AiOutlinePlus/>
                            Adicionar Filme
                        </NewMovie>
                    </aside>
                </div>
                <section id="sections_container">
                    {
                        notes.map((note) => (
                            <Section 
                            title={note.title}
                            rating={note.rating}
                            text={note.description}
                            />
                        ))
                    }
                </section>
            </main>
        </Container>
    )
}