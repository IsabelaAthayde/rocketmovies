import { Container } from "./styles";

export function Tags({title, tag1, tag2, tag3}) {
    return (
        <Container>
            {title || tag1 || tag2 || tag3 }
        </Container>
    )
}