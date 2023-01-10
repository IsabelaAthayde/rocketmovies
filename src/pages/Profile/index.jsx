import { useState } from "react";
import { useAuth } from '../../hooks/auth';

import { Container, Header, Avatar, Form } from "./styles";
import { Link } from 'react-router-dom'

import avatarPlaceholder from '../../assets/avatar_placeholder.svg';

import { FiMail, FiLock, FiArrowLeft, FiUser, FiCamera  } from 'react-icons/fi';
import { Button } from "../../components/Button";

import { Input } from "../../components/Input";
import { api } from "../../services/api";


export function Profile() {
    const { user, updateProfile } = useAuth();

    const [name, setName ] = useState(user.name);
    const [email, setEmail ] = useState(user.email);
    const [oldPassword, setOldPassword] = useState();
    const [newPassword, setNewPassword] = useState();

    const avatarURL = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder;

    const [avatar, setAvatar] = useState(user.avatar);
    const [avatarFile, setAvatarFile] = useState();

    async function handleUpdate() {
        const user = {
            name,
            email,
            password: newPassword,
            old_password: oldPassword 
        }

        // const userUpdated = Object.assign(user, updated);

       await updateProfile({ user, avatarFile });
    }

    function handleAvatarChange(event) {
        const file = event.target.files[0]
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <Header>
                <Link to="/">
                    <FiArrowLeft/> 
                    Sair
                </Link>
            </Header>
            <Avatar>
                <img src={avatarURL}
                alt="Foto do Usuário" />

                <label htmlFor="avatar">
                    <FiCamera />
                    <input type="file" id="avatar" onChange={handleAvatarChange}/>
                </label>

            </Avatar>
            <Form>
                <Input 
                type="Text" 
                placeholder="Nome" 
                icon={FiUser}
                value={name}
                onChange={(e) => setName(e.target.value)} 
                />

                <Input 
                type="email" 
                placeholder="E-mail" 
                icon={FiMail} 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
                />

                <Input 
                type="password"
                placeholder="Senha Atual" 
                icon={FiLock} 
                onChange={(e) => {
                    console.log(e.target.value)
                    setOldPassword(e.target.value)}} 
                />

                <Input 
                type="password" 
                placeholder="Nova Senha" 
                icon={FiLock} 
                onChange={(e) => setNewPassword(e.target.value)} 
                />

                <Button title="Salvar" type="button" onClick={handleUpdate}></Button>
            </Form>
        </Container>
    )
}