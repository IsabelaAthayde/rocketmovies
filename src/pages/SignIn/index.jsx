import{ Container, Login, Form, Img} from './styles';
import { Link } from 'react-router-dom'

import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
    return (
        <Container>
            <Login>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <Form>
                    <h2>Faça seu login</h2>
                    <Input type="email" placeholder="E-mail" icon={FiMail} />
                    <Input type="password" placeholder="Senha" icon={FiLock} />
                    <Button title="Entrar"></Button>
                    <Link to="/register">Criar Conta</Link>
                </Form>
            </Login>
            <Img  />
        </Container>
    )
}