import {Container, Profile} from './styles';
import {Input} from '../Input'

export function Header() {
  return (
    <Container>
      <section>
        <h1>RocketMovies</h1>

        <Input placeholder="Pesquisar pelo título" />

        <Profile to="/profile">
          <div>
            <strong>João Pedro</strong>
            <a href="/">sair</a>
          </div>
          <img src="https://github.com/joaojpdev.png" 
          alt="Foto do usuário" 
          />
        </Profile>

      </section>


    </Container>
  );
};
