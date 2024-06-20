import {Container, NewNote} from './styles'
import {Header} from '../../components/Header'
import {Section} from '../../components/Section'
import {Note} from '../../components/Note'


export function Home() {
  return(
    <Container>
      <Header />
      <main>
        <div className="top">
          <h1>Meus Filmes</h1>
          <NewNote to="/new">
           + Adicionar filme
          </NewNote>
        </div>

        <Section>
            <Note data={{
              title: 'Interestellar',
              text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                {id: '1', name: 'Ficção Cientifica'},
                {id: '2', name: 'Drama'},
                {id: '3', name: 'Família'}
              ]
            }} />


            <Note data={{
              title: 'Interestellar',
              text: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se...',
              tags: [
                {id: '1', name: 'Ficção Cientifica'},
                {id: '2', name: 'Drama'},
                {id: '3', name: 'Família'}
              ]
            }} />
        </Section>

      </main>
    </Container>
  )
}