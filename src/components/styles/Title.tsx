import { comforter } from "@/utils/fonts";
import { styled } from "styled-components";

const Title = styled.h1`
  font-size: 4rem;
  text-align: center;
  font-family: ${comforter.style.fontFamily};
`;

export const TitleVar = styled(Title)`
  text-align: left;
`;

export default Title;