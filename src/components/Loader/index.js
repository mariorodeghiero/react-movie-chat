import React from 'react';
import * as S from './styled';

const Loader = props => {
  return (
    <S.PreloaderCircle size={props.size}>
      <div />
    </S.PreloaderCircle>
  );
};

export default Loader;