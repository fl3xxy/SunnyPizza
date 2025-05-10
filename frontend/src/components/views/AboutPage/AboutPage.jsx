import Navbar from "../../modules/Navbar/Navbar";
import { AboutContainer,
  AboutSectionOne,
  AboutSectionTwo,
  AboutDiv,
  AboutP,
  AboutImg } from "./AboutPage.styles";

import restaurantJPG from '../../../assets/rest.jpg'

function AboutPage() {
  return (
    <>
      <AboutContainer>
        <Navbar />
        <AboutSectionOne>
          <AboutDiv>
            <AboutImg src={restaurantJPG} alt="Restaurant" />
            <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, justo at tincidunt euismod, urna mauris tincidunt est, vitae malesuada arcu tortor in nisl. Integer nec lorem nec urna facilisis feugiat. Donec nec pretium mauris. Duis sollicitudin, ipsum non luctus imperdiet, neque purus sollicitudin eros, ac fermentum sapien risus vel velit.</AboutP>
          </AboutDiv>
        </AboutSectionOne>
        <AboutSectionTwo>
          <AboutDiv>
            <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, justo at tincidunt euismod, urna mauris tincidunt est, vitae malesuada arcu tortor in nisl. Integer nec lorem nec urna facilisis feugiat. Donec nec pretium mauris. Duis sollicitudin, ipsum non luctus imperdiet, neque purus sollicitudin eros, ac fermentum sapien risus vel velit.</AboutP>
            <AboutImg src={restaurantJPG} alt="Restaurant" />
          </AboutDiv>
        </AboutSectionTwo>
        <AboutSectionOne>
          <AboutDiv>
            <AboutImg src={restaurantJPG} alt="Restaurant" />
            <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, justo at tincidunt euismod, urna mauris tincidunt est, vitae malesuada arcu tortor in nisl. Integer nec lorem nec urna facilisis feugiat. Donec nec pretium mauris. Duis sollicitudin, ipsum non luctus imperdiet, neque purus sollicitudin eros, ac fermentum sapien risus vel velit.</AboutP>
          </AboutDiv>
        </AboutSectionOne>
        <AboutSectionTwo>
          <AboutDiv>
            <AboutP>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent fermentum, justo at tincidunt euismod, urna mauris tincidunt est, vitae malesuada arcu tortor in nisl. Integer nec lorem nec urna facilisis feugiat. Donec nec pretium mauris. Duis sollicitudin, ipsum non luctus imperdiet, neque purus sollicitudin eros, ac fermentum sapien risus vel velit.</AboutP>
            <AboutImg src={restaurantJPG} alt="Restaurant" />
          </AboutDiv>
        </AboutSectionTwo>
      </AboutContainer>
    </>
  );
}

export default AboutPage;