import React from "react";
import * as S from './styled';

export default function Table({ movies }) {
  return (
    <S.Wrapper>
      {movies.map((item, index) => {
        return <div key={index}>{item.title}</div>;
      })}
    </S.Wrapper>
  );
}
