import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { PizzaContainer,
  PizzaList,
  Modal,
 } from './Pizza.styles';


//IMAGES
import MargheritaIMG from '../../../assets/margherita.jpg'
import ProsciuttoIMG from '../../../assets/prosciutto.jpg'
import FunghiIMG from '../../../assets/funghi.jpg'
import FocacciaIMG from '../../../assets/focaccia.jpg'
import SpinaciIMG from '../../../assets/spinaci.jpg'
import SalaminoIMG from '../../../assets/salamino.jpg'
import { FaShoppingBasket } from "react-icons/fa";
const pizzaImg = {
  Margherita: MargheritaIMG,
  Funghi: FunghiIMG,
  Focaccia: FocacciaIMG,
  Prosciutto: ProsciuttoIMG,
  Spinaci: SpinaciIMG,
  Salamino: SalaminoIMG
}


function PizzaMenu() {
  const [pizzas, setPizzas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Przechwytywanie danych z API
    axios.get('http://localhost:8000/pizzas')
      .then(response => {
        setPizzas(response.data); // Ustawienie danych w stanie
        setLoading(false); // Zmiana stanu ładowania
      })
      .catch(err => {
        setError(err.message); // Obsługa błędów
        setLoading(false); // Zmiana stanu ładowania
      });
  }, []);

  if (loading) {
    return <div>Ładowanie...</div>;
  }

  if (error) {
    return <div>Błąd: {error}</div>;
  }

  return (
    <PizzaContainer>
      {isModalOpen && (
        <Modal>
          <form>
            <h2>Enter Delivery Details</h2>
            <input placeholder="Full Name" />
            <input placeholder="Address" />
            <input placeholder="Phone Number" />
            <button type="submit">Place Order</button>
            <button type="button" onClick={() => setIsModalOpen(false)}>Close</button>
          </form>
        </Modal>
      )}
      <PizzaList>
        {pizzas.map(pizza => (
          <li key={pizza.id}>
            <img
              src={pizzaImg[pizza.name] || '/images/default.jpg'}
              alt={pizza.name}
            />
            <div>
              <p className='name'>{pizza.name}</p>
              <p className='price'>{pizza.price}$</p>
              <p className='ingredients'>{pizza.ingredients}</p>
            </div>
            <button onClick={() => setIsModalOpen(true)}>
              <FaShoppingBasket />
            </button>
          </li>
        ))}
      </PizzaList>
    </PizzaContainer>
  );
}

export default PizzaMenu;