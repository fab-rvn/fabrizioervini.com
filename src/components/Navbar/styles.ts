import { Link as LinkRouter } from 'react-router-dom';
import { Link as LinkScroll } from 'react-scroll';
import styled from 'styled-components';
import { COLOR } from '../../styles/colors';

type NavbarProps = {
  scrollNav: Boolean;
};

export const Nav = styled.nav<NavbarProps>`
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  margin-top: -80px;
  background: ${({ scrollNav, theme }) =>
    scrollNav ? theme.navbarBg : 'transparent'};
  font-size: 1rem;
  z-index: 10;
  @media screen and (max-width: 968px) {
    transition: all 800ms ease;
  }
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  width: 100%;
  max-width: 1100px;
  padding: 0 2rem;
`;

export const NavLogo = styled(LinkRouter)`
  display: flex;
  align-items: center;
  justify-self: flex-start;
  margin-left: 24px;
  color: ${({ theme }) => theme.text};
  font-size: 1.5rem;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

export const MobileIcon = styled.div`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    font-size: 1.8rem;
    color: ${({ theme }) => theme.text};
    cursor: pointer;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  margin-right: 24px;
  list-style: none;
  text-align: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
`;

export const NavLink = styled(LinkScroll)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.navbarLink};
  }
  &.active {
    border-bottom: 3px solid transparent;
    background: ${COLOR.linearGradient};
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: 100% 3px;
    background-clip: border-box;
    background-origin: border-box;
    -webkit-background-clip: border-box;
  }
`;

export const NavLinkRouter = styled(LinkRouter)`
  display: flex;
  align-items: center;
  height: 100%;
  padding: 0 1rem;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  cursor: pointer;
  transition: all 300ms ease-in-out;
  &:hover {
    color: ${({ theme }) => theme.navbarLink};
    transition: all 300ms ease-in-out;
  }
  &.active {
    border-bottom: 3px solid ${({ theme }) => theme.navbarLink};
  }
`;

export const NavBtns = styled.div`
  display: flex;
  align-items: center;
`;
