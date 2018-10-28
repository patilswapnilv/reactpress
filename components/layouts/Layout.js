import Header from "../ui/Header";
import Navigation from "../ui/Navigation";
import Container from "../ui/Container";
import config from "../../services/publicConfig";
import Logo from "../../images/hippogriff.png";

const Layout = ({ children }) => (
  <div>
    <Header>
      <Container>
        <h1>{config.siteInformations.name}</h1>
        <img width="200px" src={Logo} />
        <h2>{config.siteInformations.slogan}</h2>
      </Container>
    </Header>
    <div style={{ paddingBottom: "4rem" }}>
      <Container>
        <Navigation links={config.mainMenuLinks} />
        <div>{children}</div>
      </Container>
    </div>
  </div>
);

export default Layout;
