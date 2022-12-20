import { Container, NewMovie } from './styles';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

import { AiOutlinePlus } from 'react-icons/ai';

export function Home() {
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
                    <Link to="/details/1">
                        <Section title="InterEstelar"/>
                    </Link>
                    <Link to="/details/2">
                        <Section title="InterEstelar"/>
                    </Link>
                    <Link to="/details/3">
                        <Section title="InterEstelar"/>
                    </Link>
                    <Link to="/details/4">
                        <Section title="InterEstelar"/>
                    </Link>
                    <Link to="/details/5">
                        <Section title="InterEstelar"/>
                    </Link>
                </section>
            </main>
        </Container>
    )
}