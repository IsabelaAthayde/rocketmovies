import { Container } from './styles';

export function Button({title, Icon}) {
    return (
        <Container >
            {Icon}
            {title} 
            
        </Container>
    )
}