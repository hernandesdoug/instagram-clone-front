import styled from 'styled-components';
function Footer() {
    return (
        <>
            <FooterPage>
                © 2025 Instagram Clone project by <a href="https://github.com/hernandesdoug">Douglas Hernandes</a>
            </FooterPage>
        </>
    )
}
export default Footer;

const FooterPage = styled.footer`
  margin: 10px 0 0;
  padding: 10px;
  text-align: center;
`;