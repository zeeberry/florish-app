import styled from 'styled-components';

export const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const Content = styled.section`
  width: 550px;
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Header = styled.header`
  padding: 1em 2em;
  border: 1px solid;
`;

export const Logo = styled.div`
  letter-spacing: 0.1em;
`;

export const Footer = styled.footer`
  padding: 1em 2em;
  display: flex;
  justify-content: center;
  font-size: 0.8em;
  border: 1px solid;
`;

export const WhiteLink = styled.a`
  color: ${(props) => props.theme.white};
  letter-spacing: 0.05em;
  font-size: 0.9em;

  &:active {
    color: ${(props) => props.theme.white};
  }
`;

export const DashboardHeader = styled.div`
  padding: 1em;
  height: 60px;
  border-bottom: 1px solid ${(props) => props.theme[props.color]};
`;
