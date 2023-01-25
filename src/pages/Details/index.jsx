import { Container, Main, Movie, Title, Description, Synopsis} from "./styles";
import { useNavigate, useParams } from 'react-router-dom';

import { FiArrowLeft } from "react-icons/fi";
import { BiTime } from "react-icons/bi";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Tags } from "../../components/Tags";

import { useEffect , useState} from "react";
import { useAuth } from '../../hooks/auth';

import { api } from "../../services/api";

import { showMovieRate } from "../../hooks/rating";
import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

export function Details() {
    const [movieData, setmovieData] = useState("");

    const { user } = useAuth();

    let params = useParams();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    useEffect(() => {
        async function fetchDetails() {
            const response = await api.get(`/movieNotes/${params.id}`)
            setmovieData(response.data)
        }
        fetchDetails()
    }, [])

    const navigate = useNavigate();

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
                <Movie>
                    <Title>
                        <h1>{movieData.title}</h1>
                        <Rating key={movieData.rating}>
                            {movieData.rating ? showMovieRate(movieData.rating) : "" } 
                        </Rating>
                    </Title>
                    <Description>
                        <section id="avatarMini">
                            <img src={avatarURL}
                            alt="Foto do Usuário" />
                            <span>Por {user.name}</span>
                        </section>
                        <section id="time">
                            <BiTime />
                            <span>{movieData.updated_at}</span>
                        </section>
                    </Description>
                    {  movieData.tags &&
                        <div id="tags">
                            { movieData.tags.map(tag => 
                                <Tags 
                                key={tag.name} 
                                title={tag.name}
                                />
                            )}
                        </div>
                    }
                    <Synopsis>
                        {movieData.description}
                    </Synopsis>
                </Movie>
            </Main>
        </Container>
    )
}