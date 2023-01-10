import { Container, NewMovie } from './styles';
import { Link } from 'react-router-dom';

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from '../../components/Section';

import { AiOutlinePlus } from 'react-icons/ai';

export function Home() {
    
    return (
        <Container>
            <Header />
            <main>
                <div>
                    <h1>Meus filmes</h1>
                    <aside>
                        <NewMovie to="/new">
                            <AiOutlinePlus/>
                            Adicionar Filme
                        </NewMovie>
                    </aside>
                </div>
                <section id="sections_container">
                    <Link to="/details/1">
                        <Section title="InterEstelar"
                        tag2="Ficção Científica"
                        tag1="Drama"
                        tag3="Família" 
                        text='Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela. Pai e filha descobrem que o "fantasma" é uma inteligência desconhecida que está enviando mensagens codificadas através de radiação gravitacional, deixando coordenadas em binário que os levam até uma instalação secreta da NASA liderada pelo professor John Brand. O cientista revela que um buraco de minhoca foi aberto perto de Saturno e que ele leva a planetas que podem oferecer condições de sobrevivência para a espécie humana. As "missões Lázaro" enviadas anos antes identificaram três planetas potencialmente habitáveis orbitando o buraco negro Gargântua: Miller, Edmunds e Mann – nomeados em homenagem aos astronautas que os pesquisaram. Brand recruta Cooper para pilotar a nave espacial Endurance e recuperar os dados dos astronautas; se um dos planetas se mostrar habitável, a humanidade irá seguir para ele na instalação da NASA, que é na realidade uma enorme estação espacial. A partida de Cooper devasta Murphy. Além de Cooper, a tripulação da Endurance é formada pela bióloga Amelia, filha de Brand; o cientista Romilly, o físico planetário Doyle, além dos robôs TARS e CASE. Eles entram no buraco de minhoca e se dirigem a Miller, porém descobrem que o planeta possui enorme dilatação gravitacional temporal por estar tão perto de Gargântua: cada hora na superfície equivale a sete anos na Terra. Eles entram em Miller e descobrem que é inóspito já que é coberto por um oceano raso e agitado por ondas enormes. Uma onda atinge a tripulação enquanto Amelia tenta recuperar os dados de Miller, matando Doyle e atrasando a partida. Ao voltarem para a Endurance, Cooper e Amelia descobrem que 23 anos se passaram.'/>
                    </Link>
                    <Link to="/details/2">
                        <Section title="O Castelo Animado" 
                        tag2="Aventura"
                        tag3="Drama"
                        tag1="Fantasia"
                        text='Sophie é uma jovem de 18 anos que trabalha sem descanso na chapelaria que era de seu falecido pai. Numa de suas raras idas à cidade, ela conhece Hauru, o Mágico. Hauru é extremamente sedutor, mas de caráter duvidoso. Confundindo a relação entre eles, uma feiticeira lança um terrível encanto sobre Sophie, transformando-a numa velha de 90 anos. Aflita com sua situação, Sophie foge e se torna errante em terras desertas. Acaba por se deparar com O Castelo Animado de Hauru e, escondendo sua verdadeira identidade, consegue ser contratada para fazer serviços domésticos. A "velha senhora", misteriosa e dinâmica, logo dará nova vida à antiga habitação, na qual vivem apenas um jovem aprendiz, Marko e a pessoa responsável pelo Castelo, Calcifer, o demônio do fogo. Cheia de energia, Sophie faz milagres. Que fabuloso destino a espera? E se sua história com Hauru estiver apenas começando?'/>
                    </Link>
                    <Link to="/details/3">
                        <Section title="Harry Potter e as Relíquias da Morte - Parte 1" 
                        tag1="Aventura"
                        tag2="Fantasia"
                        tag3="Família"
                        text='A Parte 1 começa quando Harry, Rony e Hermione iniciam uma perigosa missão para encontrar e destruir o segredo da imortalidade e destruição de Voldemort — as Horcruxes. Sozinhos, sem a orientação de seus professores ou a proteção do Professor Dumbledore, os três amigos precisam agora depender um dos outros mais do que nunca. Mas no caminho estão Forças das Trevas que ameaçam acabar com eles. Enquanto isso, o mundo da magia se tornou um local perigoso para todos os inimigos do Lorde das Trevas. A guerra aguardada com temor há muito tempo já começou e os Comensais da Morte de Voldemort se tomaram o controle do Ministério da Magia e até mesmo de Hogwarts, assustando e capturando qualquer um que se oponha a eles. Mas eles ainda buscam o prêmio de maior valor para Voldemort: Harry Potter. O Escolhido se tornou o caçado quando os Comensais da Morte saem em busca de Harry com ordens de levá-lo para Voldemort... vivo. A única esperança de Harry é achar as Horcruxes antes de ser encontrado por Voldemort. Mas, à medida que procura por pistas, ele descobre uma lenda antiga e quase esquecida—a lenda das Relíquias da Morte. E se a lenda for verdadeira, isso poderia dar a Voldemort o imenso poder que ele tanto busca. Harry nem imagina que seu futuro já foi decidido pelo seu passado, quando naquele dia fatídico, ele se tornou "o Menino Que Sobreviveu". Não mais só um menino, Harry Potter está cada vez mais próximo da tarefa para a qual está se preparando desde o primeiro dia em que pisou em Hogwarts: a batalha final com Voldemort.'/>
                    </Link>
                </section>
            </main>
        </Container>
    )
}