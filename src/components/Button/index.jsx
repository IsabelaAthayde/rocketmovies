import { Container } from './styles';

export function Button({title, icon, ...rest}) {
    return (
        <Container {...rest}>
            {icon}
            {title} 
            
        </Container>
    )
}