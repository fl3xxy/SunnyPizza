import styled from 'styled-components';

export const PizzaContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 20px;
`;

export const PizzaList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 20px;
  width: 100%;
  max-width: 1200px;

  li {
    background: #fff;
    padding: 20px 30px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    position: relative;
    transition: all 0.3s ease;

    img {
      width: 200px;
      height: 150px;
      object-fit: cover;
      border-radius: 20px;
    }

    div {
      flex: 1;

      p.name {
        font-family: 'Pacifico', cursive;
        font-size: 20px;
        color: #556B2F;
        margin: 0;
      }

      p.price {
        font-family: 'Montserrat', sans-serif;
        font-size: 15px;
        margin: 5px 0;
      }

      p.ingredients {
        font-family: 'Montserrat', sans-serif;
        color: #555;
        font-size: 14px;
      }
    }

    button {
      position: absolute;
      top: 15px;
      right: 15px;
      background-color: #e67e22;
      color: white;
      border: none;
      border-radius: 25px;
      padding: 10px 20px;
      font-size: 14px;
      font-weight: bold;
      cursor: pointer;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      transition: all 0.3s ease;

      &:hover {
        transform: translateY(-2px);
        box-shadow: 0 12px 32px rgba(0, 0, 0, 0.15);
      }
    }

    @media ${({ theme }) => theme.devices.tablet} {
      flex-direction: column;
      align-items: flex-start;

      img {
        width: 100%;
        height: auto;
        border-radius: 20px;
      }

      button {
        position: static;
        margin-top: 15px;
        align-self: flex-end;
      }

      div {
        width: 100%;
      }
    }

    @media ${({ theme }) => theme.devices.mobile} {
      padding: 15px 20px;

      p.name {
        font-size: 18px;
      }

      p.price {
        font-size: 14px;
      }

      p.ingredients {
        font-size: 13px;
      }

      button {
        padding: 8px 16px;
        font-size: 13px;
      }
    }
  }
`;

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;

  form {
    background: #fff;
    padding: 30px 40px;
    border-radius: 25px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.2);
    display: flex;
    flex-direction: column;
    gap: 15px;
    min-width: 300px;
    max-width: 90%;

    h2 {
      font-family: 'Pacifico', cursive;
      font-size: 24px;
      margin-bottom: 10px;
      text-align: center;
    }

    input {
      padding: 12px 16px;
      font-size: 16px;
      border-radius: 10px;
      border: 1px solid #ccc;
      outline: none;
    }

    button[type="submit"] {
      background-color: #27ae60;
      color: white;
      font-weight: bold;
      border: none;
      padding: 12px;
      border-radius: 10px;
      cursor: pointer;
      transition: background 0.3s;
      font-size: 16px;

      &:hover {
        background-color: #219150;
      }
    }

    button[type="button"] {
      background-color: transparent;
      color: #999;
      border: none;
      cursor: pointer;
      font-size: 14px;
      text-decoration: underline;
      align-self: center;
    }
  }
`;