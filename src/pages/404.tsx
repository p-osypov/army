import React from 'react';
import { SC } from '@/modules/error-page/error-page.styles';
import Message from '@/modules/error-page/message';

function ErrorPage() {
  return (
    <SC.PageContainer>
      <SC.Main>
        <Message />
      </SC.Main>
    </SC.PageContainer>
  );
}

export default ErrorPage;
