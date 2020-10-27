import styled from "styled-components";
import media from "styled-media-query";

export const Wrapper = styled.div`
  text-align: left;
  max-width: 1080px;
  margin: 0 auto;

  ${media.lessThan("medium")`
        overflow: scroll;
        max-width: 320px;
        max-height: 460px;
    `};
`;

export const Table = styled.table`
  width: 100%;
  display: grid;
  border: 1px solid var(--grey);
`;

export const Content = styled.div`
  overflow: overlay;
  max-height: 500px;
`;

export const Thead = styled.thead`
  text-align: left;
  background-color: var(--white);
`;

export const Tr = styled.tr`
  border-bottom: 1px solid var(--light-grey);
`;

export const Th = styled.th`
  padding: 1.25rem;
  color: var(--black-text);
  min-width: 130px;
  :first-child {
    min-width: 316px;
  }

  ${media.lessThan("medium")`
        font-size: 0.678rem;
        min-width: 140px;

        :first-child {
            min-width: 246px;
        }
    `};
`;

export const Td = styled.td`
  padding: 1.25rem;
  background-color: var(--white);
  color: var(--black-text);
`;

export const TrContent = styled.tr`
  background-color: ${(props) =>
    props.white ? "var(--light-grey)" : "var(--white)"};
  color: var(--black-text);
  padding: 1.25rem;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
`;

export const TdContent = styled.td`
  color: var(--black-text);
  padding: 1.25rem;
  min-width: 130px;

  ${media.lessThan("medium")`
        font-size: 0.678rem;
    `};
`;

export const Filters = styled.div`
  padding-top: 0.5rem;
`;
