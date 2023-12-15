import styled from "styled-components";
import image1 from "../../../public/resources/images/prices_regular.jpeg";

export const PricesWrapper = styled.div`
  width: 40%;
  padding: 2rem;
  background: white;
`;

const PricesContainer = styled.div`
  background-image: url("/resources/images/prices_regular.png");
  background-size: cover;
  display: flex;
  align-items: center;
  height: 45vh;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.5);
  border-radius: 8px;
  padding: 16px;
`;

export default PricesContainer;
