import styled from 'styled-components';

export const AboutContainer = styled.div`
  background-color: #FDF5E6;
  min-height: 100vh;
  width: 100%;
  height: 100%;
`;

export const AboutSectionOne = styled.div`
  height: 40vh;
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column;
    height: auto;
    padding: 30px 0;
  }
`;

export const AboutSectionTwo = styled.div`
  height: 40vh;
  width: 100%;
  background-color: #FDF5E6;
  display: flex;
  align-items: center;
  justify-content: center;

  @media ${({ theme }) => theme.devices.tablet} {
    flex-direction: column-reverse;
    height: auto;
    padding: 30px 0;
  }
`;

export const AboutDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media ${({ theme }) => theme.devices.mobile} {
    flex-direction: column;
    gap: 20px;
  }
`;

export const AboutP = styled.p`
  max-width: 700px;
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: #333;
  text-align: justify;
  padding: 0 20px;

  @media ${({ theme }) => theme.devices.tablet} {
    font-size: 13px;
  }

  @media ${({ theme }) => theme.devices.mobile} {
    font-size: 12px;
  }
`;

export const AboutImg = styled.img`
  width: 400px;
  height: auto;
  border-radius: 35px;

  @media ${({ theme }) => theme.devices.tablet} {
    width: 300px;
  }

  @media ${({ theme }) => theme.devices.mobile} {
    width: 90%;
  }
`;