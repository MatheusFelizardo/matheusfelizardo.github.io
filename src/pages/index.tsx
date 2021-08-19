
import styles from './home.module.scss';
import Head from 'next/head'
import { fadeIn } from 'react-animations'
import styled, { keyframes } from 'styled-components';

const fadeInAnimation = keyframes`${fadeIn}`
const FadeInDiv = styled.div`
  animation: 1s ${fadeInAnimation};
`;

const FadeInSection = styled.div`
  animation: 3s ${fadeInAnimation};
`;

export default function Home() {
  return (
    <>

    <Head>
        <title>Home | Matheus Felizardo - Desenvolvedor web front-end (Rio de Janeiro - RJ)</title>
    </Head>

    <main className={styles.mainContainer}>
      <section className={styles.container}>
        <FadeInDiv className={styles.textContainer}>
          <p>Olá, meu nome é </p>
          <h1 className={styles.nameText}>Matheus Rodrigues Felizardo.</h1>
          <p className={styles.subtitle}>Sou amante da tecnologia e almejo mudar vidas.</p>
          
          <p>Sou desenvolvedor front-end, tenho 26 anos e atualmente moro no Rio de Janeiro. <br />
          Sou formado em Gestão de Tecnologia da Informação e estou cursando pós-graduação em Engenharia de Software. <br /><br />
          Ingressei no mercado como desenvolvedor em outubro de 2020. <br />
          Meu objetivo a medio prazo é trabalhar numa empresa internacional, pelo intercâmbio linguístico e cultural. E meu grande objetivo é impactar a vida das pessoas usando tecnologia.
          </p>

          <a target="blank" href="https://api.whatsapp.com/send?phone=+5521965572555&text=Olá Matheus!!">Entrar em contato</a>
        </FadeInDiv>

        <FadeInDiv className={styles.imageContainer}>
          <img src="/images/developer.svg" alt="A developer" />
        </FadeInDiv>
      </section>

      <FadeInSection className={styles.socialMediaContainer}>
        <a target="blank" href="https://www.instagram.com/matheus.felizardo_"><img src="/images/instagram.svg" alt="Instagram" /></a>
        <a target="blank" href="https://github.com/MatheusFelizardo"><img src="/images/github.svg" alt="Github" /></a>
        <a target="blank" href="https://www.linkedin.com/in/matheus-felizardo"><img src="/images/linkedin.svg" alt="Linkedin" /></a>
        <a target="blank" href="https://www.facebook.com/matheus.felizardo.3"><img src="/images/facebook.svg" alt="Facebook" /></a>
      </FadeInSection>

    </main>
    </>
  )
}
