import { Container } from './styles'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

export function Rating(){
    return (
        <Container>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />    
        </Container>
    )
}