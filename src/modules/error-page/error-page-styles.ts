import { Container } from '@/shared/assets/styles/layout';
import { mediaWidth } from '@/shared/assets/styles/mixins';
import styled from 'styled-components';

const PageContainer = styled(Container)`
  min-height: 940px;
  //background-image: url('/flat-tire.jpg');
  background-size: cover;
  background-position: bottom;
  background-repeat: no-repeat;

  ${mediaWidth('max', 'lg')} {
    min-height: 600px;
  }
  ${mediaWidth('max', 'sm')} {
    min-height: 400px;
  }
`;
const Main = styled.main`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SC = {
  PageContainer,
  Main,
};
