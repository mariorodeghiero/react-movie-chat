import styled from "styled-components";
import media from "styled-media-query";
import { ArrowBack } from "@styled-icons/boxicons-regular/ArrowBack";
import { Send } from "@styled-icons/material-rounded/Send";
import { FadeIn } from "../../utils/styled";

export const ModalWrapper = styled.div`
  position: fixed;
  overflow-y: scroll;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: ${(props) => (props.open ? "block" : "none")};
  background-color: rgba(0, 0, 0, 0.75);
  z-index: 666;
`;

export const Wrapper = styled.div`
  background-color: #f2f2f2;
  width: 50%;
  max-width: 460px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 3px;
  animation: 0.75s ${FadeIn} ease-in;
  box-sizing: border-box;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  background-color: var(--blue);
  padding: 0.768rem 0.5rem;
`;

export const Title = styled.h1`
  display: inline;
  margin-left: 0.5rem;
  font-weight: 700;
`;

export const BackIcon = styled(ArrowBack)`
  height: 32px;
  width: 32px;
  margin-left: 0.5rem;
  display: inline;
  cursor: pointer;
  ${media.lessThan("medium")`
    margin-left: 0.2rem;
  `};
`;

export const Content = styled.ul`
  min-height: 300px;
`;

export const Comment = styled.li`
  padding: 1rem;
  display: flex;
  align-items: center;
`;

export const Text = styled.p`
  margin-left: 1rem;
  width: 76%;
  padding: 0.578rem 1rem;
  color: var(--white-text);
  background-color: var(--blue);
  font-size: 0.678rem;
`;

export const Footer = styled.footer`
  background-color: #fdfdfd;
  padding: 0rem 1rem;
  height: 60px;
  display: flex;
  align-items: center;
`;

export const Input = styled.textarea`
  background-color: inherit;
  width: 90%;
  border: none;
  overflow: auto;
  outline: none;
  -webkit-box-shadow: none;
  -moz-box-shadow: none;
  box-shadow: none;
  resize: none;
`;

export const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: var(--blue);
  margin-left: 1rem;
  border: none;
  outline: 0;
  border-radius: 50%;
  cursor: pointer;
  text-align: center;
  align-content: center;
`;

export const SendIcon = styled(Send)`
  height: 28px;
  width: 28px;
  color: var(--white);
`;
