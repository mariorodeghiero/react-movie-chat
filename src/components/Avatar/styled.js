import styled from "styled-components";

export const Avatar = styled.div`
  overflow: hidden;
  background-image: url(${props => props.image && props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-color: var(--blue);
  border-radius: 50%;
  text-align: center;
  align-content: center;
  width: 32px;
  height: 32px;
`;