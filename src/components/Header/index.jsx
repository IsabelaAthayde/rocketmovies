import { Container, Profile } from "./styles";
import { Link } from 'react-router-dom';

export function Header(){
    return(
        <Container>
            <h1>RocketMovies</h1>
            <input type="text" placeholder="Pesquise pelo título"/>
            <Profile>
                <div>
                <Link to="/profile"><span>Isabela Athayde</span></Link>
                    <Link id="LogOut">Sair</Link>
                </div>
                <Link to="/profile"><img src="https://github.com/IsabelaAthayde.png" alt="" /></Link>
                
            </Profile>
        </Container>
    )
}