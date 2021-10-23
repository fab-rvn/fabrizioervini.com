import styled from 'styled-components';
import { Heading, Text } from 'styles/mixins';

export const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 0 1rem;
  background: ${({ theme }) => theme.navbarBg};
  text-align: left;
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 184px);
    padding: 0 2rem;
  }
`;
export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
`;
export const ContactH1 = styled.h1`
  ${Heading}
`;
export const ContactP = styled.p`
  ${Text}
  max-width: 600px;
  color: ${({ theme }) => theme.textSecondary};
`;
export const ContactBtn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  width: 180px;
`;
