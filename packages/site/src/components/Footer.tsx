import styled from 'styled-components';

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding-top: 2.4rem;
  padding-bottom: 2.4rem;
  border-top: 1px solid ${(props) => props.theme.colors.border?.default};
`;

export const Footer = () => {
  return (
    <FooterWrapper>
      <a
        href="https://github.com/alimahdiyar/contract-method-snap"
        target="_blank"
        style={{ color: 'white' }}
      >
        GitHub
      </a>
    </FooterWrapper>
  );
};
