import { Container } from "./styles";
import { Rating } from "../Rating";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Tags } from '../Tags';

import { useState, useEffect } from 'react';
import { api } from "../../services/api";

export function Section({data, ...rest}) {
    const [tags, setTags] = useState([]);

    useEffect(() => {
        // function rating() {
        //     console.log(rating, "foi")
        //     for (let i = 1; i < rating; i++) {
        //         <AiFillStar />
        //     }
        //     if(i == 5) {
        //         return;
        //     }
        //     for (let j = 1; j < rating; j++) {
        //         <AiOutlineStar />
        //     }
        // }
        // rating()
    }, [])
    
    return (
        <Container {...rest}>
            <h2>{data.title}</h2>
            <Rating id="rating">
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