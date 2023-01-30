import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
 
export function showMovieRate(movieRating) {
    if(movieRating === 5) {
        const rate = [
            <AiFillStar key="1"/>,
            <AiFillStar key="2"/>,
            <AiFillStar key="3"/>,
            <AiFillStar key="4"/>,
            <AiFillStar key="5"/>
        ]
        return rate;
    }
    
    if(movieRating === 4) {
        const rate = [
            <AiFillStar key="1"/>,
            <AiFillStar key="2"/>,
            <AiFillStar key="3"/>,
            <AiFillStar key="4"/>,
            <AiOutlineStar key="5"/>
        ]
        return rate;
    }
    
    if(movieRating === 3) {
        const rate = [
            <AiFillStar key="1"/>,
            <AiFillStar key="2"/>,
            <AiFillStar key="3"/>,
            <AiOutlineStar key="4"/>,
            <AiOutlineStar key="5"/>
        ]
        return rate;
    }

    if(movieRating === 2) {
        const rate = [
            <AiFillStar key="1"/>,
            <AiFillStar key="2"/>,
            <AiOutlineStar key="3"/>,
            <AiOutlineStar key="4"/>,
            <AiOutlineStar key="5"/>
        ]
        return rate;
    }

    if(movieRating === 1) {
        const rate = [
            <AiFillStar key="1"/>,
            <AiOutlineStar key="2"/>,
            <AiOutlineStar key="3"/>,
            <AiOutlineStar key="4"/>,
            <AiOutlineStar key="5"/>
        ]
        return rate;
    }
    
    if(movieRating === "" || movieRating === 0 ) {
        const rate = [
            <AiOutlineStar key="1"/>,
            <AiOutlineStar key="2"/>,
            <AiOutlineStar key="3"/>,
            <AiOutlineStar key="4"/>,
            <AiOutlineStar key="5"/>
        ]
        return rate;
    }
}