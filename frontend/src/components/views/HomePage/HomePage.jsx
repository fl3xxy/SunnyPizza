import { Container,
  ContainerInfo,
  InfoContainer,
  Info,
  Logo,
  HomeButton,
 } from "./HomePage.styles";
import { BsInstagram } from "react-icons/bs";
import { ImFacebook2 } from "react-icons/im";
import { FaPhoneSquareAlt } from "react-icons/fa";

function HomePage() {
  return(
    <>
      <Container>
        <ContainerInfo>
          <Logo>Sunny Pizza</Logo>
          <InfoContainer>
            <Info><FaPhoneSquareAlt />+48 484-484-484</Info>
            <Info><BsInstagram />@sunnypizza</Info>
            <Info><ImFacebook2 />@sunnyfanpage</Info>
          </InfoContainer>
        </ContainerInfo>
        <HomeButton to='/pizza-menu'>
          MENU
        </HomeButton>
      </Container>
    </>
  );
}

export default HomePage;