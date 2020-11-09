import React from 'react';
import * as S from './Container.styles';

const Container: React.FC = ({ children }) => {
  return <S.Container>{children}</S.Container>;
};

export default Container;
