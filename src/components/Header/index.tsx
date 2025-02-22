import { Container, Profile } from "./styles";

export function Header() {
  return(
    <Container>
      <Profile>
        <img 
          src="https://github.com/marcelorpc.png" 
          alt="Foto de perfil do usuário"
        />
        <div>
          <span>Bem-vindo</span>
          <strong>Marcelo Paiva Chaves</strong>
        </div>
      </Profile>
    </Container>
  );
}