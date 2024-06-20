import {Link} from 'react-router-dom'

import {Header} from '../../components/Header'
import {Input} from '../../components/Input'
import {Textarea} from '../../components/Textarea'
import {NoteItem} from '../../components/NoteItem'
import {Section} from '../../components/Section'
import {Button} from '../../components/Button'

import {Container, Form} from './styles'

export function New() {
  return(
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <Link to="/">
            Voltar
            </Link>
            <h1>Novo filme</h1>
          </header>

          <div className="col-2">
            <Input placeholder="Título" />
            <Input placeholder="Sua nota (de 0 a 5)" />
          </div>

          <Textarea placeholder="Observações" />

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Novo marcador" />
            </div>
          </Section>

          <div className="col-2">
            <Button title="Excluir filme" />
            <Button title="Salvar alterações" />
          </div>
        </Form>
      </main>
    </Container>
  )
}