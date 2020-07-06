import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import ToggleTheme from 'components/theme/Header/ToggleTheme';
import { Wrapper } from './styles';

const NavbarLinks = ({ desktop }) => (
  <Wrapper desktop={desktop}>
    <AnchorLink href="#about">Acerca de Mi</AnchorLink>
    <AnchorLink href="#projects">Proyectos</AnchorLink>
    <AnchorLink href="#contact">Contactame</AnchorLink>
    <ToggleTheme />
  </Wrapper>
);

export default NavbarLinks;
