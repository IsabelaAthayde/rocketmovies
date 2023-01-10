import { Container } from "./styles";
import { Rating } from "../Rating";
import { Tags } from "../Tags";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';



export function Section({title, text, rating, tag1, ...rest}) {
    function rating() {
        console.log(rating, "foi")
        for (let i = 1; i < rating; i++) {
            <AiFillStar />
        }
        if(rate == 5) {
            return;
        }
        for (let i = 1; i < rating; i++) {
            <AiOutlineStar />
        }
    }
    return (
        <Container>
            <h2>{title}</h2>
            <Rating id="rating">
                {rating()}
            </Rating>
            <p>
                {text}
            </p>
            <div id="tags">
                <Tags tag1={tag1}/>
                
            </div>
        </Container>
    )
}