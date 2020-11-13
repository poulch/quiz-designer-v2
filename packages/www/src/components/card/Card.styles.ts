import styled from 'styled-components';
import { Card as AntCard, Typography } from 'antd';

export const Card = styled(AntCard)`
  padding: 1rem;
  min-width: 35rem;
  box-shadow: 10px 10px 26px 0px rgba(0, 0, 0, 0.1);
`;

export const Title = styled(Typography.Title)`
  text-align: center;
`;
