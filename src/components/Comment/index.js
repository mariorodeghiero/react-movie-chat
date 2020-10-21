import React from "react";
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

export default function Comment({ movie, comments }) {
  return (
    <S.Wrapper>
      <S.Header>
        <S.Title>{movie.title}</S.Title>
      </S.Header>
      <S.Content>
        {commentsMock.map((item, index) => {
          return <div key={index}>{item.text}</div>;
        })}
      </S.Content>
      <S.Footer>
        <S.Input type="text" />
      </S.Footer>
    </S.Wrapper>
  );
}
