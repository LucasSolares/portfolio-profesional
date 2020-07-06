import React, { useContext } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { ThemeContext } from 'providers/ThemeProvider';
import { Container, Button } from 'components/common';
import dev from 'assets/illustrations/skills.svg';
import { Wrapper, SkillsWrapper, Details, Thumbnail } from './styles';

export const Skills = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="Soy Lucas Solares fullstack web & mobile" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>¡Más acerca de mi!</h1>
          <p>
            He participado en proyectos de gran esacala que se orientan a un entorno Web & Mobile desarrollando
            habilidades como React, Gatsby & Flutter ademas de entornos backend como Firebase, Express & Flask.
          </p>
          <Button as={AnchorLink} href="#contact">
            ¡Contactame!
          </Button>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};
