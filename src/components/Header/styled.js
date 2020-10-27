import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  text-align: center;
  padding: 90px;

  ${media.lessThan("medium")`
         padding: 50px;
    `};
`;

export const Title = styled.h1`
  font-size: 2rem;
  color: var(--black-text);

  ${media.lessThan("medium")`
        font-size: 1.2rem;
    `};
`;
