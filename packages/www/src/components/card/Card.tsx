import React from 'react';
import { Typography } from 'antd';
import * as S from './Card.styles';

const Card: React.FC = ({ children }) => {
  return <S.Card>{children}</S.Card>;
};

export const CardTitle: React.FC = ({ children }) => {
  return <S.Title>{children}</S.Title>;
};

export const CardText: React.FC = ({ children }) => {
  return <Typography.Text>{children}</Typography.Text>;
};

export default Card;
