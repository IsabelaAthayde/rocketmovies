import { Container, NewMovie } from './styles';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Section } from '../../components/Section';

import { FiX, FiPlus } from 'react-icons/fi';
import { RxSlash } from 'react-icons/rx';

import { api } from "../../services/api";

export function Home() {
    const [notes, setNotes] = useState([]);
    const [search, setSearch] = useState("");
    const [style, setStyle] = useState("");

    function changeStyle() {
        console.log("you just clicked");
      
        setStyle("animation");
    };

    function handleSearch(headerSearch) {
        setSearch(headerSearch);
    }

    useEffect(() => {
        async function fectchNotes() {
            const response = await api.get(`/movieNotes?title=${search}`);
            setNotes(response.data)
        }
        fectchNotes()
    }, [search])

    const navigate = useNavigate();

    function handleDetails(note) {
        navigate(`/details/${note.id}`)  
    }

    function handleNotesPage() {
        navigate("/HandleNote")
    }

    return (
        <Container>
            <Header handleSearch={handleSearch}/>
            <main className={style}>
                <div id="main-container">
                    <div id="intro">
                        <h1>Meus filmes</h1>
                        <aside>
                            <NewMovie onClick={() => {
                                handleNotesPage()
                            }}>
                                <span><FiPlus/><RxSlash/><FiX/></span>
                                <span>Adicionar ou Excluir Filme</span>
                            </NewMovie>
                        </aside>
                    </div>
                    <section id="sections_container">
                        {
                        notes.map((note) => (
                            <Section
                            key={String(note.id)}
                            data={note}
                            onClick={() => handleDetails(note)}
                            />))
                        }
                    </section>
                </div>
            </main>
        </Container>
    )
}