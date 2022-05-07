import * as S from './styles'

export function Main() {
  return (
    <S.Wrapper>
      <S.Logo
        src="/img/logo.svg"
        alt="Imagem de um átomo e React Avançado escrito ao lado"
      />
      <S.Tittle>React Avançado</S.Tittle>
      <S.Description>
        Typescript, ReactJS Nextjs e Styled Components
      </S.Description>
      <S.Illustration
        src="/img/hero-illustration.svg"
        alt="Um desenvolvedor de frente para a tela com codigo"
      />
    </S.Wrapper>
  )
}
