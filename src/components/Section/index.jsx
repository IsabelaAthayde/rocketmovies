import { Container } from "./styles";
import { Rating } from "../Rating";
import { Tags } from "../Tags";



export function Section({title, ...rest}) {
    return (
        <Container>
            <h2>{title}</h2>
            <Rating id="rating" />
            <p>
                Pragas nas colheitas fizeram a
                civilização humana regredir
                para uma sociedade agrária em
                futuro de data desconhecida. 
                Cooper, ex-piloto da NASA, tem uma fazenda 
                com sua família. Murphy, a filha de dez anos de Cooper, 
                acredita que seu quarto está assombrado por um fantasma
                que tenta se 
            </p>
            <div id="tags">
                <Tags title="Ficção Científica"/>
                <Tags title="Drama"/>
                <Tags title="Família"/>
            </div>
        </Container>
    )
}