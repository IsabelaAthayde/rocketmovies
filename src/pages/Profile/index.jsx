import { Container, Header, Avatar, Form } from "./styles";
import { Link } from 'react-router-dom'

import { FiMail, FiLock, FiArrowLeft, FiUser, FiCamera  } from 'react-icons/fi';
import { Button } from "../../components/Button";

import { Input } from "../../components/Input";


export function Profile() {
    return (
        <Container>
            <Header>
                <Link to="/">
                    <FiArrowLeft/> 
                    Sair
                </Link>
            </Header>
            <Avatar>
                <img src="https://github.com/IsabelaAthayde.png" 
                alt="Foto do Usuário" />

                <label htmlFor="avatar">
                    <FiCamera />
                    <input type="file" id="avatar" />
                </label>

            </Avatar>
            <Form>
                <Input type="Text" placeholder="Nome" icon={FiUser}/>
                <Input type="email" placeholder="E-mail" icon={FiMail}/>

                <Input type="password" placeholder="Senha Atual" icon={FiLock}/>
                <Input type="password" placeholder="Nova Senha" icon={FiLock}/>
                <Button title="Salvar"></Button>
            </Form>
        </Container>
    )
}