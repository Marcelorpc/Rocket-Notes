import { StyledButton } from "./styles";

type ButtonType = {
  title: string,
  loading?: boolean
}

export function Button({ title, loading = false, ...rest }: ButtonType) {

  return(
    <StyledButton 
      type="button"
      disabled={loading}
      {...rest}
    >
      { loading ? 'Carregando...' : title}
    </StyledButton>
  );
}
