import{ Container, Login, Form, Img } from './styles';
import { Link } from 'react-router-dom'


import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
    return (
        <Container>
            <Login>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <Form>
                    <h2>Crie sua conta</h2>
                    <Input type="text" placeholder="Nome" icon={FiUser} />
                    <Input type="email" placeholder="E-mail" icon={FiMail} />
                    <Input type="password" placeholder="Senha" icon={FiLock} />
                    <Button title="Cadastrar"></Button>

                    <Link to="/">
                        <FiArrowLeft /> 
                        Voltar para o login
                    </Link>
                    
                </Form>

            </Login>
            <Img  />
        </Container>
    )
}