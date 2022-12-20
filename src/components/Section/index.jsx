import { Container } from "./styles";
import { Rating } from "../Rating";
import { Tags } from "../Tags";



export function Section({title, text, tag1, tag2, tag3, ...rest}) {
    return (
        <Container>
            <h2>{title}</h2>
            <Rating id="rating" />
            <p>
                {text}
            </p>
            <div id="tags">
                <Tags tag1={tag1}/>
                <Tags tag2={tag2}/>
                <Tags tag3={tag3}/>
                
            </div>
        </Container>
    )
}