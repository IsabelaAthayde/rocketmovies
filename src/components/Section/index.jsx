import { Container } from "./styles";
import { Rating } from "../Rating";
import { Tags } from '../Tags';

import { showMovieRate } from "../../hooks/rating";

export function Section({data, ...rest}) {

    return (
        <Container {...rest}>
            <h2>{data.title}</h2>

            <Rating key={data.rating}>
                {showMovieRate(data.rating)}  
            </Rating>

            <p>
                {data.description}
            </p> 
            
            {  data.tags &&
                <footer id="tags">
                { data.tags.map(tag => 
                <Tags 
                key={tag.name} 
                title={tag.name}
                />)}
                </footer>
            }
                
            
        </Container>
    )
}