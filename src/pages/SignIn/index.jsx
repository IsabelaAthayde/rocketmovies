import { useState } from 'react';
import { Link } from 'react-router-dom'

import { useAuth } from '../../hooks/auth';

import{ Container, Login, Form, Img} from './styles';

import { FiMail, FiLock } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignIn() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const { signIn } = useAuth()

    function checkEnter(e) {
        if(e && e.keyCode === 13) {
            signIn({ email, password });
        }
    }

    function handleSignIn() {
        signIn({ email, password });
    }

    return (
        <Container>
            <Login>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <Form>
                    <h2>Faça seu login</h2>
                    <Input 
                    type="email" 
                    placeholder="E-mail" 
                    icon={FiMail}
                    onKeyDown={(e) => checkEnter(e)}
                    onChange={ (e) => setEmail(e.target.value)}
                    />

                    <Input 
                    type="password" 
                    placeholder="Senha" 
                    icon={FiLock}
                    onKeyDown={(e) => checkEnter(e)}
                    onChange={ (e) => setPassword(e.target.value)}
                    />

                    <Button title="Entrar" type="button" onClick={handleSignIn}></Button>
                    <Link to="/register">Criar Conta</Link>
                </Form>
            </Login>
            <Img  />
        </Container>
    )
}