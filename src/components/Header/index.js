import React from 'react';
import * as S from "./styled";

function Header({title}) {
  return (
    <S.Wrapper>
        <S.Title>{title}</S.Title>
    </S.Wrapper>
  );
}

export default Header;
