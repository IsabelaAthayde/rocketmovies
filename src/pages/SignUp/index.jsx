import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { api } from '../../services/api';

import{ Container, Login, Form, Img } from './styles';

import { FiMail, FiLock, FiArrowLeft, FiUser } from 'react-icons/fi';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';

export function SignUp() {
    const [name, setName ] = useState("");
    const [email, setEmail ] = useState("");
    const [password, setPassword ] = useState("");
    
    const navigate = useNavigate();

    function handleBack() {
        navigate(-1);
    }

    function handleSignUp() {
        if(!name || !email || !password) {
           return alert("Preencha todos os campos!!")
        }

        api.post("/users", { name, email, password })
        .then( () => {
            alert("Cadastrado com sucesso!")
            navigate(-1);
        })
        .catch( error => {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possivel cadastrar!")
            }
        })
    }

    return (
        <Container>
            <Login>
                <h1>RocketMovies</h1>
                <p>Aplicação para acompanhar tudo que assistir.</p>
                <Form>
                    <h2>Crie sua conta</h2>
                    <Input type="text" 
                    placeholder="Nome" 
                    icon={FiUser} 
                    onChange={ e => setName(e.target.value)}
                    />

                    <Input 
                    type="email" 
                    placeholder="E-mail"
                    icon={FiMail}
                    onChange={ e => setEmail(e.target.value)}
                     />   

                    <Input 
                    type="password" 
                    placeholder="Senha" 
                    icon={FiLock}
                    onChange={ e => setPassword(e.target.value)}
                    />

                    <Button title="Cadastrar" type="button" onClick={handleSignUp} />

                    <button type="button" onClick={handleBack}>
                        <FiArrowLeft /> 
                        Voltar para o login
                    </button>
                    
                </Form>

            </Login>
            <Img  />
        </Container>
    )
}