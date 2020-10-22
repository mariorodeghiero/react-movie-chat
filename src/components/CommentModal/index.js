import React from "react";
import { Avatar } from "../Avatar/styled";
import * as S from "./styled";

const commentsMock = [
  {
    id: 1,
    text: "lorem 1",
  },
  {
    id: 1,
    text: "lorem 2",
  },
];

export default function CommentModal({ movie, comments, modalOpen }) {
  return (
    <S.ModalWrapper open={modalOpen}>
      <S.Wrapper>
        <S.Header>
          <S.BackIcon />
          <S.Title>{movie.title}</S.Title>
        </S.Header>
        <S.Content>
          {commentsMock.map((item, index) => {
            return (
              <S.Comment key={index}>
                <Avatar />
                <S.Text>{item.text}</S.Text>
              </S.Comment>
            );
          })}
        </S.Content>
        <S.Footer>
          <S.Input type="text" />
          <S.Button>
            <S.SendIcon />
          </S.Button>
        </S.Footer>
      </S.Wrapper>
    </S.ModalWrapper>
  );
}
