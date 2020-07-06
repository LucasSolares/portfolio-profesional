import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Header } from 'components/theme';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/dev.svg';
import { Wrapper, IntroWrapper, Details, Thumbnail } from './styles';

export const Intro = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper>
      <Header />
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>¡Que tal!</h1>
          <h4>Soy un desarrollador web y mobile, apasionado por aprender nuevas tecnologías.</h4>
          <Button as={AnchorLink} href="#contact">
            ¡Contactame!
          </Button>
        </Details>
        <Thumbnail>
          <img src={dev} alt="Soy Lucas Solares desarrollador fullstack web & mobile" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};
