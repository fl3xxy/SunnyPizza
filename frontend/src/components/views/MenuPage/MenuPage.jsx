import Navbar from "../../modules/Navbar/Navbar";
import { MenuContainer } from "./MenuPage.styles";
import PizzaList from "../../modules/Pizza/Pizza";
function MenuPage() {
  return(
    <>
    <MenuContainer>
      <Navbar />
      <PizzaList />
    </MenuContainer>
    </>
  );
}

export default MenuPage;