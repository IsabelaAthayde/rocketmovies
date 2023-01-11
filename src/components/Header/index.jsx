import { Container, Profile } from "./styles";
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from "../../services/api";

export function Header(){
    const { signOut, user } = useAuth();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const navigate = useNavigate();

    function handleGoToProfile() {
        navigate("/profile")
    }

    return(
        <Container>
            <h1>RocketMovies</h1>
            <input type="text" placeholder="Pesquise pelo título"/>
            <Profile>
                <div>
                <span onClick={handleGoToProfile}>{user.name}</span>
                    <button type="button" id="LogOut" onClick={signOut}>Sair</button>
                </div>
                <a onClick={handleGoToProfile}><img src={avatarURL} alt="" /></a>
                
            </Profile>
        </Container>
    )
}