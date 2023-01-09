import { Container } from './styles';

export function Button({title, Icon, ...rest}) {
    return (
        <Container {...rest}>
            {Icon}
            {title} 
            
        </Container>
    )
}