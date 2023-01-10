import { Container, Profile } from "./styles";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';
import { api } from "../../services/api";

export function Header(){
    const { signOut, user } = useAuth();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    return(
        <Container>
            <h1>RocketMovies</h1>
            <input type="text" placeholder="Pesquise pelo título"/>
            <Profile>
                <div>
                <Link to="/profile">{user.name}</Link>
                    <button type="button" id="LogOut" onClick={signOut}>Sair</button>
                </div>
                <Link to="/profile"><img src={avatarURL} alt="" /></Link>
                
            </Profile>
        </Container>
    )
}