import styled from "styled-components";

export const ContactContainer = styled.div`
  background-color: #FDF5E6;
  min-height: 100vh;
  width: 100%;
  position: relative;
`;

export const ContactFormContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 90%;
  max-width: 600px;
  background-color: white;
  border-radius: 25px;
  padding: 40px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
    margin-bottom: 20px;
    color: #333;
    text-align: center;
  }

  form {
    display: flex;
    flex-direction: column;
    width: 100%;

    input,
    textarea {
      padding: 12px 16px;
      margin-bottom: 15px;
      border: 1px solid #ccc;
      border-radius: 12px;
      font-family: 'Montserrat', sans-serif;
      font-size: 14px;
      resize: vertical;
    }

    button {
      padding: 12px 20px;
      border: none;
      border-radius: 20px;
      background-color: #e67e22;
      color: white;
      font-weight: bold;
      font-size: 16px;
      cursor: pointer;
      transition: all 0.3s ease;

      &:hover {
        background-color: #d35400;
        transform: translateY(-2px);
      }
    }
  }

  @media ${({ theme }) => theme.devices.tablet} {
    padding: 30px;

    h2 {
      font-size: 22px;
    }

    form {
      input,
      textarea {
        font-size: 13px;
      }

      button {
        font-size: 15px;
      }
    }
  }

  @media ${({ theme }) => theme.devices.mobile} {
    padding: 20px;

    h2 {
      font-size: 20px;
    }

    form {
      input,
      textarea {
        font-size: 12px;
      }

      button {
        font-size: 14px;
        padding: 10px 16px;
      }
    }
  }
`;